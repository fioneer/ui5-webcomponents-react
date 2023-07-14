import{M as E,C,f as O,a as N}from"./chunk-PCJTTTQV-4d268401.js";import{_ as F}from"./iframe-2ea913ee.js";import{e as h,l as s,s as V,a as M,b as L,p as w,c as j,w as U}from"./withWebComponent-d4224c1c.js";import{F as T}from"./Float-99d99064.js";import{a as k,d as q}from"./UI5Element-78be0f3d.js";import{d as z,n as X,m as $}from"./Icons-26e87c01.js";import{S as g}from"./SliderBase-1597ec4e.js";import{c as H,I as W}from"./Icon-70a9e5b9.js";import{o as S}from"./class-map-18f572ce.js";import{s as c}from"./style-map-54298215.js";import{bk as K,bl as R,bm as x}from"./i18n-defaults-f002f496.js";import{e as G}from"./DomRefTable.module-a8922c91.js";import{D as Y}from"./DocsHeader-7caf0556.js";import{F as J}from"./Footer-8be17dcc.js";import{j as d}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u as A}from"./index-bda0bad7.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Integer-f7f172c9.js";import"./ResizeHandler-15c77712.js";import"./Device-99b8bbf4.js";import"./react-jss.esm-022ab528.js";import"./index-072d53af.js";import"./slot-76e48863.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./information-872f55da.js";import"./Button-427cd4bb.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-3e959ad1.js";import"./index-063ffa6b.js";import"./index-b490c39d.js";import"./Avatar-e1c9d8f0.js";import"./employee-1c1d2fc1.js";import"./index-7e299d9c.js";import"./index-4d911eb4.js";import"./Link-04c4a519.js";import"./WrappingType-b81e595a.js";import"./index-ea625d40.js";import"./TableOfContent-7be08c3b.js";import"./index-7332b178.js";import"./Label-263c93f2.js";import"./index-f5b57a3d.js";import"./index-707767ec.js";import"./Popover-a03c4c52.js";import"./PopupsCommon.css-1eb36bcf.js";import"./FocusableElements-53839075.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-119d6915.js";function Q(a,e,t){return t?h`<div class="ui5-slider-root ${S(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><span id="${s(this._id)}-startHandleDesc" class="ui5-hidden-text">${s(this._ariaHandlesText.startHandleText)}</span><span id="${s(this._id)}-endHandleDesc" class="ui5-hidden-text">${s(this._ariaHandlesText.endHandleText)}</span><div class="ui5-slider-inner">${this.step?I.call(this,a,e,t):void 0}<div class="ui5-slider-progress-container" part="progress-container"><div class="ui5-slider-progress" part="progress-bar" style="${c(this.styles.progress)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this._ariaValueNow)}" aria-valuetext="From ${s(this.startValue)} to ${s(this.endValue)}" aria-labelledby="${s(this._ariaLabelledByProgressBarRefs)}" aria-disabled="${s(this._ariaDisabled)}"></div></div><div class="ui5-slider-handle ui5-slider-handle--start" part="handle" style="${c(this.styles.startHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this.startValue)}" aria-labelledby="${s(this._ariaLabelledByStartHandleRefs)}" aria-disabled="${s(this._ariaDisabled)}"><${V("ui5-icon",e,t)} name="direction-arrows" slider-icon></${V("ui5-icon",e,t)}>${this.showTooltip?D.call(this,a,e,t):void 0}</div><div class="ui5-slider-handle ui5-slider-handle--end" part="handle" style="${c(this.styles.endHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this.endValue)}" aria-labelledby="${s(this._ariaLabelledByEndHandleRefs)}" aria-disabled="${s(this._ariaDisabled)}"><${V("ui5-icon",e,t)} name="direction-arrows" slider-icon></${V("ui5-icon",e,t)}>${this.showTooltip?P.call(this,a,e,t):void 0}</div></div><span id="${s(this._id)}-accName" class="ui5-hidden-text">${s(this.accessibleName)}</span><span id="${s(this._id)}-sliderDesc" class="ui5-hidden-text">${s(this._ariaLabelledByText)}</span></div> `:h`<div class="ui5-slider-root ${S(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><span id="${s(this._id)}-startHandleDesc" class="ui5-hidden-text">${s(this._ariaHandlesText.startHandleText)}</span><span id="${s(this._id)}-endHandleDesc" class="ui5-hidden-text">${s(this._ariaHandlesText.endHandleText)}</span><div class="ui5-slider-inner">${this.step?I.call(this,a,e,t):void 0}<div class="ui5-slider-progress-container" part="progress-container"><div class="ui5-slider-progress" part="progress-bar" style="${c(this.styles.progress)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this._ariaValueNow)}" aria-valuetext="From ${s(this.startValue)} to ${s(this.endValue)}" aria-labelledby="${s(this._ariaLabelledByProgressBarRefs)}" aria-disabled="${s(this._ariaDisabled)}"></div></div><div class="ui5-slider-handle ui5-slider-handle--start" part="handle" style="${c(this.styles.startHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this.startValue)}" aria-labelledby="${s(this._ariaLabelledByStartHandleRefs)}" aria-disabled="${s(this._ariaDisabled)}"><ui5-icon name="direction-arrows" slider-icon></ui5-icon>${this.showTooltip?D.call(this,a,e,t):void 0}</div><div class="ui5-slider-handle ui5-slider-handle--end" part="handle" style="${c(this.styles.endHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this.endValue)}" aria-labelledby="${s(this._ariaLabelledByEndHandleRefs)}" aria-disabled="${s(this._ariaDisabled)}"><ui5-icon name="direction-arrows" slider-icon></ui5-icon>${this.showTooltip?P.call(this,a,e,t):void 0}</div></div><span id="${s(this._id)}-accName" class="ui5-hidden-text">${s(this.accessibleName)}</span><span id="${s(this._id)}-sliderDesc" class="ui5-hidden-text">${s(this._ariaLabelledByText)}</span></div> `}function I(a,e,t){return h`${this.showTickmarks?Z.call(this,a,e,t):void 0}`}function Z(a,e,t){return h`<ul class="ui5-slider-tickmarks">${H(this.tickmarksObject,(i,n)=>i._id||n,(i,n)=>ee.call(this,a,e,t,i,n))}</ul>${this.labelInterval?se.call(this,a,e,t):void 0}`}function ee(a,e,t,i,n){return h`${i?te.call(this,a,e,t,i,n):ie.call(this,a,e,t,i,n)}`}function te(a,e,t,i,n){return h`<li class="ui5-slider-tickmark ui5-slider-tickmark-in-range"></li>`}function ie(a,e,t,i,n){return h`<li class="ui5-slider-tickmark"></li>`}function se(a,e,t){return h`<ul class="ui5-slider-labels ${S(this.classes.labelContainer)}" style="${c(this.styles.labelContainer)}">${H(this._labels,(i,n)=>i._id||n,(i,n)=>ne.call(this,a,e,t,i,n))}</ul>`}function ne(a,e,t,i,n){return h`<li style="${c(this.styles.label)}">${s(i)}</li>`}function D(a,e,t){return h`<div class="ui5-slider-tooltip ui5-slider-tooltip--start" style="${c(this.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${s(this.tooltipStartValue)}</span></div>`}function P(a,e,t){return h`<div class="ui5-slider-tooltip ui5-slider-tooltip--end" style="${c(this.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${s(this.tooltipEndValue)}</span></div>`}k("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);k("@ui5/webcomponents","sap_fiori_3",async()=>L);const ae={packageName:"@ui5/webcomponents",fileName:"themes/RangeSlider.css",content:`:host([ui5-range-slider]) .ui5-slider-progress-container::before {
	background-color: var(--_ui5_slider_progress_container_dot_background);
}

/* Range Slider handles (Horizon implementatioon) */

.ui5-slider-root:hover:active .ui5-slider-handle:not(:focus) {
	background: var(--sapSlider_RangeHandleBackground);
}

.ui5-slider-root:active .ui5-slider-handle:active:focus,
.ui5-slider-root:active .ui5-slider-handle:focus {
	background: var(--_ui5_range_slider_handle_active_background);
}

.ui5-slider-root:active .ui5-slider-handle:active:focus [slider-icon],
.ui5-slider-root:active .ui5-slider-handle:focus [slider-icon] {
	display: var(--_ui5_range_slider_active_handle_icon_display);
}

:host([range-pressed]) .ui5-slider-root:active .ui5-slider-handle:not(:focus) {
	background: var(--_ui5_range_slider_handle_active_background);
	border: var(--_ui5_slider_handle_focus_border);
	box-shadow: none;
}

:host([range-pressed]) .ui5-slider-progress:focus::after {
	border: none;
}

:host([range-pressed]) .ui5-slider-handle [slider-icon] {
	display: var(--_ui5_range_slider_active_handle_icon_display);
}

.ui5-slider-root:not(.ui5-slider-root-phone):focus .ui5-slider-inner .ui5-slider-handle,
.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-inner .ui5-slider-handle:focus {
	background: var(--_ui5_range_slider_handle_background_focus);
}

.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-inner .ui5-slider-handle:focus [slider-icon] {
  display: none;
}

.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-progress:focus::before {
	display: var(--_ui5_range_slider_legacy_progress_focus_display);
	content: '';
	position: absolute;
	width: var(--_ui5_range_slider_focus_outline_width);
	border: var(--_ui5_slider_progress_outline);
	border-radius: var(--_ui5_range_slider_focus_outline_radius);
	top: var(--_ui5_slider_progress_outline_offset);
	height: var(--_ui5_slider_outer_height);
	box-sizing: border-box;
	left: var(--_ui5_slider_progress_outline_offset_left);
}

.ui5-slider-progress {
  position: relative;
}

.ui5-slider-progress:focus::after {
	border: 0.125rem solid var(--sapContent_FocusColor);
	border-radius: 0.5rem;
	content: "";
	display: var(--_ui5_range_slider_progress_focus_display);
	position: absolute;
	top: var(--_ui5_range_slider_progress_focus_top);
	left: var(--_ui5_range_slider_progress_focus_left);
	padding: var(--_ui5_range_slider_progress_focus_padding);
	width: var(--_ui5_range_slider_progress_focus_width);
	height: var(--_ui5_range_slider_progress_focus_height);
	box-sizing: border-box;
}

.ui5-slider-handle {
	background: var(--_ui5_range_slider_handle_background);
}

.ui5-slider-progress-container:hover ~ .ui5-slider-handle:not(:focus),
.ui5-slider-handle:hover  {
	background: var(--_ui5_range_slider_root_hover_handle_bg);
}

.ui5-slider-root:hover .ui5-slider-handle:not(:focus) [slider-icon] {
	display: var(--_ui5_range_slider_root_hover_handle_icon_display);
}

:host([range-pressed]) .ui5-slider-root:active .ui5-slider-handle:not(:focus) [slider-icon] {
	display: var(--_ui5_range_slider_root_active_handle_icon_display);
}`};var y=globalThis&&globalThis.__decorate||function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var l=a.length-1;l>=0;l--)(o=a[l])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},p;let _=p=class extends g{constructor(){super(),this._isPressInCurrentRange=!1,this._handeIsPressed=!1,this._reversedValues=!1,this._stateStorage.startValue=void 0,this._stateStorage.endValue=void 0}get tooltipStartValue(){const t=this.constructor._getDecimalPrecisionOfNumber(this._effectiveStep);return this.startValue.toFixed(t)}get tooltipEndValue(){const t=this.constructor._getDecimalPrecisionOfNumber(this._effectiveStep);return this.endValue.toFixed(t)}get _ariaDisabled(){return this.disabled||void 0}get _ariaLabelledByText(){return p.i18nBundle.getText(K)}get _ariaHandlesText(){const e=this.effectiveDir==="rtl",t=this._areValuesReversed(),i={};return e&&!t||!e&&t?(i.startHandleText=p.i18nBundle.getText(R),i.endHandleText=p.i18nBundle.getText(x)):(i.startHandleText=p.i18nBundle.getText(x),i.endHandleText=p.i18nBundle.getText(R)),i}get _ariaValueNow(){return Math.abs(this.endValue-this.startValue)}onBeforeRendering(){if(this.startValue>this.endValue){const e=this._valueAffected==="startValue"?"endValue":"startValue";this._swapValues(),this._setAffectedValue(e),this.update(e,this.startValue,this.endValue)}this.isCurrentStateOutdated()&&(this.notResized=!0,this.syncUIAndState(),this._updateHandlesAndRange(0))}syncUIAndState(){if(this.isPropertyUpdated("step")&&(this._validateStep(this.step),this.storePropertyState("step")),this.isPropertyUpdated("min","max","startValue","endValue")){this.storePropertyState("min","max");const e=g.clipValue(this.startValue,this._effectiveMin,this._effectiveMax);this.startValue=e,this.updateStateStorageAndFireInputEvent("startValue"),this.storePropertyState("startValue");const t=g.clipValue(this.endValue,this._effectiveMin,this._effectiveMax);this.endValue=t,this.updateStateStorageAndFireInputEvent("endValue"),this.storePropertyState("endValue")}this.labelInterval&&this.showTickmarks&&this._createLabels(),this.isPropertyUpdated("labelInterval")&&this.storePropertyState("labelInterval")}_onfocusin(){this._endValueInitial||(this._startValueInitial=this.startValue,this._endValueInitial=this.endValue),this.showTooltip&&(this._tooltipVisibility=g.TOOLTIP_VISIBILITY.VISIBLE)}_onfocusout(){if(this._isFocusing()){this._preventFocusOut();return}this._setAffectedValue(void 0),this._startValueInitial=void 0,this._endValueInitial=void 0,this.showTooltip&&(this._tooltipVisibility=g.TOOLTIP_VISIBILITY.HIDDEN)}_onkeyup(){super._onkeyup(),this._setAffectedValue(void 0),(this.startValue!==this._startValueAtBeginningOfAction||this.endValue!==this._endValueAtBeginningOfAction)&&this.fireEvent("change"),this._startValueAtBeginningOfAction=void 0,this._endValueAtBeginningOfAction=void 0}_handleActionKeyPress(e){if(this._startValueAtBeginningOfAction=this.startValue,this._endValueAtBeginningOfAction=this.endValue,z(e)){this.update(void 0,this._startValueInitial,this._endValueInitial);return}this._setAffectedValueByFocusedElement();const t=this._effectiveMin,i=this._effectiveMax,n=this._valueAffected;if((X(e)||$(e))&&!n){this._homeEndForSelectedRange(e,$(e)?"startValue":"endValue",t,i);return}const r=this._handleActionKeyPressBase(e,n);if(!r)return;const o=this.constructor;if(n&&!this._isPressInCurrentRange){const l=this[n],u=o.clipValue(r+l,t,i);this.update(n,u,void 0)}else if(r<0&&this.startValue>t||r>0&&this.endValue<i){const l=o.clipValue(r+this.startValue,t,i),u=o.clipValue(r+this.endValue,t,i);this.update(n,l,u)}}_setAffectedValueByFocusedElement(){this.shadowRoot.activeElement===this._startHandle&&this._setAffectedValue("startValue"),this.shadowRoot.activeElement===this._endHandle&&this._setAffectedValue("endValue"),this.shadowRoot.activeElement===this._progressBar&&this._setAffectedValue(void 0),this._setIsPressInCurrentRange(!this._valueAffected)}_homeEndForSelectedRange(e,t,i,n){const r=this._handleActionKeyPressBase(e,t),o=this.constructor,l=o.clipValue(r+this.startValue,i,n),u=o.clipValue(r+this.endValue,i,n);this.update(void 0,l,u)}update(e,t,i){if(!e)this.startValue=t,this.updateStateStorageAndFireInputEvent("startValue"),this.endValue=i,this.updateStateStorageAndFireInputEvent("endValue"),this._updateHandlesAndRange(0);else{const n=i&&e==="endValue"?i:t;this._updateHandlesAndRange(n||0),e==="startValue"&&(this.startValue=n,this.updateStateStorageAndFireInputEvent("startValue")),e==="endValue"&&(this.endValue=n,this.updateStateStorageAndFireInputEvent("endValue"))}}_onmousedown(e){if(this.disabled||this._effectiveStep===0)return;const t=this.handleDownBase(e);if(this._saveInteractionStartData(e,t),this.rangePressed=this._isPressInCurrentRange,this._isPressInCurrentRange||this._handeIsPressed){this._handeIsPressed=!1;return}this.update(this._valueAffected,t,void 0)}_saveInteractionStartData(e,t){const i=this.shadowRoot.querySelector(".ui5-slider-progress").getBoundingClientRect();this._startValueAtBeginningOfAction=this.startValue,this._endValueAtBeginningOfAction=this.endValue;const n=this.constructor;this._initialPageXPosition=n.getPageXValueFromEvent(e),this._pressTargetAndAffectedValue(this._initialPageXPosition,t),this._initialStartHandlePageX=this.directionStart==="left"?i.left:i.right}_handleMove(e){if(e.preventDefault(),!(this.disabled||this._effectiveStep===0)){if(!this._isPressInCurrentRange){this._updateValueOnHandleDrag(e);return}this._updateValueOnRangeDrag(e)}}_updateValueOnHandleDrag(e){const i=this.constructor.getValueFromInteraction(e,this._effectiveStep,this._effectiveMin,this._effectiveMax,this.getBoundingClientRect(),this.directionStart);this.update(this._valueAffected,i,void 0)}_updateValueOnRangeDrag(e){const i=this.constructor.getPageXValueFromEvent(e),n=this._calculateRangeOffset(i,this._initialStartHandlePageX);this._setAffectedValue(void 0),this.update(void 0,n[0],n[1])}_handleUp(){this._setAffectedValueByFocusedElement(),this._setAffectedValue(void 0),(this.startValue!==this._startValueAtBeginningOfAction||this.endValue!==this._endValueAtBeginningOfAction)&&this.fireEvent("change"),this._setIsPressInCurrentRange(!1),this.handleUpBase(),this.rangePressed=!1,this._startValueAtBeginningOfAction=void 0,this._endValueAtBeginningOfAction=void 0}_pressTargetAndAffectedValue(e,t){const i=this.shadowRoot.querySelector(".ui5-slider-handle--start"),n=this.shadowRoot.querySelector(".ui5-slider-handle--end"),r=i.getBoundingClientRect(),o=n.getBoundingClientRect(),l=e>=r.left&&e<=r.right,u=e>=o.left&&e<=o.right;(u||l)&&(this._handeIsPressed=!0),(u||t>this.endValue)&&this._setAffectedValue("endValue"),(l||t<this.startValue)&&this._setAffectedValue("startValue");const m=this._startValueAtBeginningOfAction!==void 0&&this._endValueAtBeginningOfAction!==void 0&&t>=this._startValueAtBeginningOfAction&&t<=this._endValueAtBeginningOfAction;this._setIsPressInCurrentRange(this._valueAffected||this._handeIsPressed?!1:m)}_setAffectedValue(e){this._valueAffected=e,this._areValuesReversed()&&this._setValuesAreReversed()}_setIsPressInCurrentRange(e){this._isPressInCurrentRange=e}focusInnerElement(){const e=this._areValuesReversed(),t=this._valueAffected;(this._isPressInCurrentRange||!t)&&this._progressBar.focus(),(t==="startValue"&&!e||t==="endValue"&&e)&&this._startHandle.focus(),(t==="endValue"&&!e||t==="startValue"&&e)&&this._endHandle.focus()}_calculateRangeOffset(e,t){if(this._initialPageXPosition===e)return[this.startValue,this.endValue];const i=this._effectiveMin,n=this._effectiveMax,r=this.endValue-this.startValue;let o=this._calculateStartValueByOffset(e,t);return o=this.constructor.clipValue(o,i,n-r),[o,o+r]}_calculateStartValueByOffset(e,t){const i=this._effectiveMin,n=this._effectiveMax,r=this._effectiveStep,o=this.getBoundingClientRect();let l,u,m;const v=this.constructor;return e>this._initialPageXPosition?(m=e-this._initialPageXPosition,u=t+m,l=v.computedValueFromPageX(u,i,n,o,this.directionStart),l=v.getSteppedValue(l,r,i)):(m=this._initialPageXPosition-e,u=t-m,l=v.computedValueFromPageX(u,i,n,o,this.directionStart),l=v.getSteppedValue(l,r,i)),l}_updateHandlesAndRange(e){const t=this._effectiveMax,i=this._effectiveMin,n=this.getStoredPropertyState("startValue")||0,r=this.getStoredPropertyState("endValue")||0,o=this._valueAffected;o==="startValue"?(this._selectedRange=(r-e)/(t-i),this._firstHandlePositionFromStart=(e-i)/(t-i)*100):o==="endValue"?(this._selectedRange=(e-n)/(t-i),this._secondHandlePositionFromStart=(e-i)/(t-i)*100):(this._selectedRange=(this.endValue-this.startValue)/(t-i),this._firstHandlePositionFromStart=(this.startValue-i)/(t-i)*100,this._secondHandlePositionFromStart=(this.endValue-i)/(t-i)*100)}_swapValues(){const e=this._valueAffected;if(e){if(e==="startValue"&&this.startValue>this.endValue){const t=this.endValue;this.endValue=this.startValue,this.startValue=t}if(e==="endValue"&&this.endValue<this.startValue){const t=this.startValue;this.startValue=this.endValue,this.endValue=t}this._setValuesAreReversed(),this._updateHandlesAndRange(this[e]),this.focusInnerElement(),this.syncUIAndState()}}_setValuesAreReversed(){this._reversedValues=!this._reversedValues}_areValuesReversed(){return this._reversedValues}get tickmarksObject(){const e=this._tickmarksCount,t=[];if(this._hiddenTickmarks)return[!1,!1];for(let i=0;i<=e;i++){const n=this._effectiveMin+i*this.step>=this.startValue,r=this._effectiveMin+i*this.step<=this.endValue;t.push(n&&r)}return t}get _startHandle(){return this.shadowRoot.querySelector(".ui5-slider-handle--start")}get _endHandle(){return this.shadowRoot.querySelector(".ui5-slider-handle--end")}get _progressBar(){return this.shadowRoot.querySelector(".ui5-slider-progress")}get _ariaLabelledByStartHandleRefs(){return[`${this._id}-accName`,`${this._id}-startHandleDesc`].join(" ").trim()}get _ariaLabelledByEndHandleRefs(){return[`${this._id}-accName`,`${this._id}-endHandleDesc`].join(" ").trim()}get _ariaLabelledByProgressBarRefs(){return[`${this._id}-accName`,`${this._id}-sliderDesc`].join(" ").trim()}get styles(){return{progress:{width:`${this._selectedRange*100}%`,"transform-origin":`${this.directionStart} top`,[this.directionStart]:`${this._firstHandlePositionFromStart}%`},startHandle:{[this.directionStart]:`${this._firstHandlePositionFromStart}%`},endHandle:{[this.directionStart]:`${this._secondHandlePositionFromStart}%`},label:{width:`${this._labelWidth}%`},labelContainer:{width:"100%",[this.directionStart]:`-${this._labelWidth/2}%`},tooltip:{visibility:`${this._tooltipVisibility}`}}}static async onDefine(){p.i18nBundle=await q("@ui5/webcomponents")}};y([w({validator:T,defaultValue:0})],_.prototype,"startValue",void 0);y([w({validator:T,defaultValue:100})],_.prototype,"endValue",void 0);y([w({type:Boolean})],_.prototype,"rangePressed",void 0);_=p=y([j({tag:"ui5-range-slider",languageAware:!0,template:Q,dependencies:[W],styles:[g.styles,ae]})],_);_.define();const re=_,oe=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),f=U("ui5-range-slider",["endValue","startValue","accessibleName","labelInterval","max","min","step"],["disabled","showTickmarks","showTooltip"],[],["change","input"],()=>F(()=>Promise.resolve().then(()=>oe),void 0,import.meta.url));f.displayName="RangeSlider";f.defaultProps={endValue:100,startValue:0,labelInterval:0,max:100,min:0,step:1};try{f.displayName="RangeSlider",f.__docgenInfo={description:`Represents a numerical interval and two handles (grips) to select a sub-range within it. The purpose of the component to enable visual selection of sub-ranges within a given interval.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-RangeSlider)`,displayName:"RangeSlider",props:{onChange:{defaultValue:null,description:"Fired when the value changes and the user has finished interacting with the slider.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RangeSliderDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<RangeSliderDomRef, never>) => void"}},endValue:{defaultValue:{value:"100"},description:"Defines end point of a selection - position of a second handle on the slider.",name:"endValue",required:!1,type:{name:"number"}},startValue:{defaultValue:{value:"0"},description:"Defines start point of a selection - position of a first handle on the slider.",name:"startValue",required:!1,type:{name:"number"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Defines whether the slider is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},labelInterval:{defaultValue:{value:"0"},description:`Displays a label with a value on every N-th step.

**Note:** The step and tickmarks properties must be enabled. Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second tickmark will be labelled, which means every 4th value number.`,name:"labelInterval",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Defines the maximum value of the slider.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Defines the minimum value of the slider.",name:"min",required:!1,type:{name:"number"}},showTickmarks:{defaultValue:null,description:`Enables tickmarks visualization for each step.

**Note:** The step must be a positive number.`,name:"showTickmarks",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Enables handle tooltip displaying the current value.",name:"showTooltip",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).

**Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,name:"step",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const le=`## Structure

The most important properties of the Range Slider are:

- min - The minimum value of the slider range.
- max - The maximum value of the slider range.
- value - The current value of the slider.
- step - Determines the increments in which the slider will move.
- showTooltip - Determines if a tooltip should be displayed above the handle.
- showTickmarks - Displays a visual divider between the step values.
- labelInterval - Labels some or all of the tickmarks with their values.

### Notes:

- The right and left handle can be moved individually and their positions could therefore switch.
- The entire range can be moved along the interval.

## Usage

The most common use case is to select and move sub-ranges on a continuous numerical scale.

## Responsive Behavior

You can move the currently selected range by clicking on it and dragging it along the interval.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`RangeSlider\` exposes the following CSS Shadow Parts:

- progress-container - Used to style the progress container(the horizontal bar which visually represents the range between the minimum and maximum value) of the \`RangeSlider\`.
- progress-bar - Used to style the progress bar, which shows the progress of the \`RangeSlider\`.
- handle - Used to style the handles of the \`RangeSlider\`.

## Keyboard Handling

- \`Left or Down Arrow\` - Moves a component's handle or the entire selection one step to the left;
- \`Right or Up Arrow\` - Moves a component's handle or the entire selection one step to the right;
- \`Left or Down Arrow + Ctrl/Cmd\` - Moves a component's handle to the left or the entire range with step equal to 1/10th of the entire range;
- \`Right or Up Arrow + Ctrl/Cmd\` - Moves a component's handle to the right or the entire range with step equal to 1/10th of the entire range;
- \`Plus\` - Same as \`Right or Up Arrow\`;
- \`Minus\` - Same as \`Left or Down Arrow\`;
- \`Home\` - Moves the entire selection or the selected handle to the beginning of the component's range;
- \`End\` - Moves the entire selection or the selected handle to the end of the component's range;
- \`Page Up\` - Same as \`Right or Up Arrow + Ctrl/Cmd\`;
- \`Page Down\` - Same as \`Left or Down Arrow + Ctrl/Cmd\`;
- \`Escape\` - Resets the \`startValue\` and \`endValue\` properties to the values prior the component focusing;
`;function de(a={}){const{wrapper:e}=Object.assign({},A(),a.components);return e?d.jsx(e,{...a,children:d.jsx(t,{})}):t();function t(){const i=Object.assign({h2:"h2"},A(),a.components);return d.jsxs(d.Fragment,{children:[d.jsx(E,{title:"Inputs / RangeSlider",component:f,argTypes:{children:{control:{disable:!0}}}}),`
`,d.jsx(Y,{since:"0.13.0"}),`
`,d.jsx("br",{}),`
`,d.jsx(i.h2,{id:"example",children:"Example"}),`
`,d.jsx(C,{children:d.jsx(O,{name:"Default",children:n=>d.jsx(f,{...n})})}),`
`,d.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,d.jsx(G,{story:"Default"}),`
`,d.jsx(N,{children:le}),`
`,d.jsx(J,{})]})}}const B=a=>d.jsx(f,{...a});B.storyName="Default";B.parameters={storySource:{source:`args => {
  return <RangeSlider {...args} />;
}`}};const b={title:"Inputs / RangeSlider",component:f,argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};b.parameters=b.parameters||{};b.parameters.docs={...b.parameters.docs||{},page:de};const $t=["defaultStory"];export{$t as __namedExportsOrder,b as default,B as defaultStory};
//# sourceMappingURL=RangeSlider.stories-6b37971f.js.map
