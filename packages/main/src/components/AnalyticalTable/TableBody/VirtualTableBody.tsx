import { useVirtualizer } from '@tanstack/react-virtual';
// MODIFICATION: use header background in section headers
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { MutableRefObject, ReactNode } from 'react';
import React, { useCallback, useMemo, useRef } from 'react';
import type { ScrollToRefType } from '../interfaces.js';
import { getSubRowsByString } from '../util/index.js';
import { EmptyRow } from './EmptyRow.js';
import { RowSubComponent as SubComponent } from './RowSubComponent.js';

interface VirtualTableBodyProps {
  classes: Record<string, string>;
  prepareRow: (row: unknown) => void;
  rows: Record<string, any>[];
  minRows: number;
  scrollToRef: MutableRefObject<ScrollToRefType>;
  isTreeTable: boolean;
  internalRowHeight: number;
  visibleRows: number;
  alternateRowColor: boolean;
  overscanCount: number;
  visibleColumns: Record<string, unknown>[];
  parentRef: MutableRefObject<HTMLDivElement>;
  renderRowSubComponent: (row?: Record<string, unknown>) => ReactNode;
  popInRowHeight: number;
  isRtl: boolean;
  markNavigatedRow?: (row?: Record<string, unknown>) => boolean;
  alwaysShowSubComponent: boolean;
  dispatch?: (e: { type: string; payload?: Record<string, unknown> }) => void;
  subComponentsHeight?: Record<string, { rowId: string; subComponentHeight?: number }>;
  columnVirtualizer: Record<string, any>;
  manualGroupBy?: boolean;
  subRowsKey: string;
}

const measureElement = (el) => el.offsetHeight;

export const VirtualTableBody = (props: VirtualTableBodyProps) => {
  const {
    alternateRowColor,
    classes,
    prepareRow,
    rows,
    minRows,
    scrollToRef,
    isTreeTable,
    internalRowHeight,
    visibleRows,
    overscanCount,
    visibleColumns,
    parentRef,
    renderRowSubComponent,
    popInRowHeight,
    markNavigatedRow,
    isRtl,
    alwaysShowSubComponent,
    dispatch,
    subComponentsHeight,
    columnVirtualizer,
    manualGroupBy,
    subRowsKey
  } = props;

  const itemCount = Math.max(minRows, rows.length);
  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);
  const rowHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;
  const lastNonEmptyRow = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: itemCount,
    getScrollElement: () => parentRef.current,
    estimateSize: useCallback(
      (index) => {
        if (
          renderRowSubComponent &&
          (rows[index]?.isExpanded || alwaysShowSubComponent) &&
          subComponentsHeight?.[index]?.rowId === rows[index]?.id
        ) {
          return rowHeight + (subComponentsHeight?.[index]?.subComponentHeight ?? 0);
        }
        return rowHeight;
      },
      [rowHeight, rows, renderRowSubComponent, alwaysShowSubComponent, subComponentsHeight]
    ),
    overscan,
    measureElement
  });
  scrollToRef.current = {
    ...scrollToRef.current,
    scrollToOffset: rowVirtualizer.scrollToOffset,
    scrollToIndex: rowVirtualizer.scrollToIndex
  };

  const popInColumn = useMemo(
    () =>
      visibleColumns.filter(
        (item) =>
          item.id !== '__ui5wcr__internal_highlight_column' &&
          item.id !== '__ui5wcr__internal_selection_column' &&
          item.id !== '__ui5wcr__internal_navigation_column'
      )[0],
    [visibleColumns]
  );
  return (
    <div
      data-component-name="AnalyticalTableBodyScrollableContainer"
      style={{
        position: 'relative',
        height: `${rowVirtualizer.getTotalSize()}px`,
        width: `${columnVirtualizer.getTotalSize()}px`
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow, visibleRowIndex) => {
        const row = rows[virtualRow.index];
        const rowIndexWithHeader = virtualRow.index + 1;
        if (!row || row.groupByVal === 'undefined') {
          const alternate = alternateRowColor && virtualRow.index % 2 !== 0;
          if (!lastNonEmptyRow.current?.cells) {
            return (
              <EmptyRow
                key={`empty_row_${virtualRow.index}`}
                virtualRow={virtualRow}
                className={clsx(classes.tr, alternate && classes.alternateRowColor)}
              />
            );
          }
          const cells = lastNonEmptyRow.current.cells;

          return (
            <EmptyRow
              key={`empty_row_${virtualRow.index}`}
              virtualRow={virtualRow}
              className={clsx(classes.tr, alternate && classes.alternateRowColor)}
            >
              {cells.map((item) => {
                const cellProps = item.getCellProps();
                const {
                  'aria-colindex': _0,
                  'aria-selected': _1,
                  'aria-label': _2,
                  tabIndex: _3,
                  ...emptyRowCellProps
                } = cellProps;
                return (
                  <div
                    {...emptyRowCellProps}
                    key={`${visibleRowIndex}-${emptyRowCellProps.key}`}
                    data-empty-row-cell="true"
                    tabIndex={-1}
                    aria-hidden
                    style={{ ...emptyRowCellProps.style, cursor: 'unset' }}
                  />
                );
              })}
            </EmptyRow>
          );
        } else {
          lastNonEmptyRow.current = row;
        }
        prepareRow(row);
        const rowProps = row.getRowProps({ 'aria-rowindex': virtualRow.index });
        const isNavigatedCell = markNavigatedRow(row);
        const RowSubComponent = typeof renderRowSubComponent === 'function' ? renderRowSubComponent(row) : undefined;

        if (!RowSubComponent && subComponentsHeight && subComponentsHeight?.[virtualRow.index]?.subComponentHeight) {
          dispatch({
            type: 'SUB_COMPONENTS_HEIGHT',
            payload: {
              ...subComponentsHeight,
              [virtualRow.index]: { subComponentHeight: 0, rowId: row.id }
            }
          });
        }
        // MODIFICATION: use custom row height
        let updatedHeight = row.original?.rowHeight ?? rowHeight;
        if (
          renderRowSubComponent &&
          (rows[virtualRow.index]?.isExpanded || alwaysShowSubComponent) &&
          subComponentsHeight?.[virtualRow.index]?.rowId === rows[virtualRow.index]?.id
        ) {
          updatedHeight += subComponentsHeight?.[virtualRow.index]?.subComponentHeight ?? 0;
        }

        // MODIFICATION: allow for a custom row wrapper rendering
        const rowPropsWithoutWrapper = { ...rowProps };
        delete rowPropsWithoutWrapper.rowWrapper;
        delete rowPropsWithoutWrapper.rowWrapperProps;

        const renderedRow = (
          // eslint-disable-next-line react/jsx-key
          <div
            {...rowPropsWithoutWrapper}
            style={{
              ...(rowPropsWithoutWrapper.style ?? {}),
              transform: `translateY(${virtualRow.start}px)`,
              position: 'absolute',
              boxSizing: 'border-box',
              height: `${updatedHeight}px`
            }}
            ref={(node) => {
              virtualRow.measureElement(node);
            }}
            aria-rowindex={rowPropsWithoutWrapper['aria-rowindex'] + 1}
          >
            {RowSubComponent && (row.isExpanded || alwaysShowSubComponent) && (
              <SubComponent
                subComponentsHeight={subComponentsHeight}
                virtualRow={virtualRow}
                dispatch={dispatch}
                row={row}
                rowHeight={rowHeight}
                rows={rows}
                alwaysShowSubComponent={alwaysShowSubComponent}
                rowIndex={visibleRowIndex + 1}
              >
                {RowSubComponent}
              </SubComponent>
            )}
            {columnVirtualizer.getVirtualItems().map((virtualColumn, visibleColumnIndex) => {
              const cell = row.cells[virtualColumn.index];
              const directionStyles = isRtl
                ? {
                    transform: `translateX(-${virtualColumn.start}px)`,
                    right: 0
                  }
                : { transform: `translateX(${virtualColumn.start}px)`, left: 0 };
              if (!cell) {
                return null;
              }
              const cellProps = cell.getCellProps();
              const allCellProps = {
                ...cellProps,
                ['data-visible-column-index']: visibleColumnIndex,
                ['data-column-index']: virtualColumn.index,
                ['data-visible-row-index']: visibleRowIndex + 1,
                ['data-row-index']: rowIndexWithHeader,
                style: {
                  ...cellProps.style,
                  position: 'absolute',
                  width: `${virtualColumn.size}px`,
                  top: 0,
                  // MODIFICATION: use header background in section headers
                  backgroundColor: row?.original?.isSectionHeader
                    ? ThemingParameters.sapList_HeaderBackground
                    : undefined,
                  // MODIFICATION: use custom row height
                  height: `${updatedHeight}px`,
                  ...directionStyles
                }
              };
              let contentToRender;
              if (
                cell.column.id === '__ui5wcr__internal_highlight_column' ||
                cell.column.id === '__ui5wcr__internal_selection_column' ||
                cell.column.id === '__ui5wcr__internal_navigation_column'
              ) {
                contentToRender = 'Cell';
              } else if (isTreeTable || (!alwaysShowSubComponent && RowSubComponent)) {
                contentToRender = 'Expandable';
              } else if (
                cell.isGrouped ||
                (manualGroupBy &&
                  cell.column.isGrouped &&
                  getSubRowsByString(subRowsKey, row.original) != null &&
                  cell.value !== undefined)
              ) {
                contentToRender = 'Grouped';
              } else if (cell.isAggregated) {
                contentToRender = 'Aggregated';
              } else if (cell.isPlaceholder) {
                contentToRender = 'RepeatedValue';
              } else {
                contentToRender = 'Cell';
              }

              return (
                // eslint-disable-next-line react/jsx-key
                <div {...allCellProps} data-selection-cell={cell.column.id === '__ui5wcr__internal_selection_column'}>
                  {popInRowHeight !== internalRowHeight && popInColumn.id === cell.column.id
                    ? cell.render('PopIn', { contentToRender, internalRowHeight })
                    : cell.render(contentToRender, isNavigatedCell === true ? { isNavigatedCell } : {})}
                </div>
              );
            })}
          </div>
        );

        // MODIFICATION: allow for a custom row wrapper rendering
        if (rowProps.rowWrapper) {
          const additionalRowProps = rowProps.rowWrapperProps || {};
          return (
            // eslint-disable-next-line react/jsx-key
            <rowProps.rowWrapper {...rowProps} {...additionalRowProps} height={`${updatedHeight}px`}>
              {renderedRow}
            </rowProps.rowWrapper>
          );
        }

        return renderedRow;
      })}
    </div>
  );
};
