import{j as t}from"./jsx-runtime-6b79a019.js";import{C as s}from"./DomRefTable.module-1c545b6d.js";import{D as a}from"./DocsHeader-2ac4c9ed.js";import{F as l}from"./Footer-ac703fb9.js";import"./index-ccf6a75d.js";import{M as h,C as o}from"./chunk-PCJTTTQV-ea334b5f.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-a6a710a0.js";import{u as n}from"./index-f2208173.js";import"./react-jss.esm-0528916b.js";import"./inheritsLoose-93e09647.js";import"./index-d2e5ea07.js";import"./iframe-663d599c.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-341004db.js";import"./Button-3da2aede.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-d3b71bde.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-41e89c44.js";import"./Integer-f7f172c9.js";import"./index-b42ff7d3.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-476d75d7.js";import"./index-1842ce63.js";import"./Link-6cd3dd1c.js";import"./WrappingType-b81e595a.js";import"./index-9da023d2.js";import"./TableOfContent-5077e852.js";import"./index-c310e45e.js";import"./Label-f867a533.js";import"./index-8d7a8128.js";import"./index-da1c4f54.js";import"./index-c99715ba.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./DemoProps-4ae16275.js";import"./index-99d317a4.js";import"./YAxisTicks-caad4266.js";import"./ChartContainer-3eb70699.js";import"./index-5f41748c.js";import"./i18n-defaults-2d74659d.js";import"./I18nContext-bec860f5.js";import"./throttle-3a2a57e7.js";import"./isString-aa6079bb.js";import"./generateCategoricalChart-aa090752.js";import"./index-af6e0797.js";import"./debounce-bb226b95.js";import"./useTooltipFormatter-b7871c51.js";import"./defaults-6eb2720f.js";import"./ChartDataLabel-70f406db.js";import"./staticProps-b1e5f52f.js";import"./useLongestYAxisLabel-8177fd98.js";import"./useOnClickInternal-8ad4ca9b.js";import"./react-content-loader.es-f0af435f.js";import"./ComposedChart-7f367436.js";import"./Line-3ba3f04f.js";import"./Scatter-248c3f38.js";function Qt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
`,t.jsx(a,{}),`
`,t.jsx(r.h2,{id:"example",children:"Example"}),`
`,t.jsx(o,{of:p}),`
`,t.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:p}),`
`,t.jsx("br",{}),`
`,t.jsx(r.h2,{id:"usage-notes",children:"Usage Notes"}),`
`,t.jsxs(r.p,{children:[`In order to display the "Bullet" lines in the chart, you have to configure which measure should be rendered as bullet line.
You can do this via the `,t.jsx(r.code,{children:"measures"})," array:"]}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-jsx",children:`<BulletChart
  data={
    [
      /* data */
    ]
  }
  dimensions={
    [
      /* dimensions */
    ]
  }
  measures={[
    {
      accessor: 'actuals',
      label: 'Actual Revenue',
      type: 'primary' // this will be the primary bar
    },
    {
      accessor: 'target',
      label: 'Planned Target Revenue',
      type: 'comparison' // this will be the bullet line
    }
  ]}
/>
`})}),`
`,t.jsx("br",{}),`
`,t.jsx(r.h2,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(r.h3,{id:"with-custom-size",children:"With Custom Size"}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(r.h3,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,t.jsx(o,{of:u}),`
`,t.jsx(r.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,t.jsx(o,{of:x}),`
`,t.jsx(l,{})]})}}export{Qt as default};
//# sourceMappingURL=BulletChart-1b32ec88.js.map
