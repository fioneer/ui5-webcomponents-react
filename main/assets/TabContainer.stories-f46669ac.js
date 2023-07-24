import{j as e}from"./jsx-runtime-d079401a.js";import{r as u,U,v as y,m as k}from"./UI5Element-11982a12.js";import{r as h}from"./Icons-234bf59e.js";import{a as V}from"./add-f5bbced1.js";import{e as G}from"./employee-e34ffee2.js";import{s as J}from"./settings-4143fb8e.js";import{b as H,a as f,c as K,d as S,T as t}from"./index-4e5d3067.js";import{_ as Q}from"./iframe-d41fd58f.js";import{b as x,l as _,d as w,s as F,a as L,c as X,f as Y,w as Z}from"./withWebComponent-99b005ba.js";import{o as q}from"./class-map-b4d8f3b0.js";import{s as v}from"./style-map-56038137.js";function ee(a,n,o){return x`<div id="${_(this._id)}" role="separator" class="${q(this.classes.root)}"></div>`}function te(a,n,o){return o?x`<${w("ui5-li-custom",n,o)} id="${_(this._id)}" role="separator" class="${q(this.classes.root)}" disabled style="${v(this._style)}"></${w("ui5-li-custom",n,o)}>`:x`<ui5-li-custom id="${_(this._id)}" role="separator" class="${q(this.classes.root)}" disabled style="${v(this._style)}"></ui5-li-custom>`}u("@ui5/webcomponents-theming","sap_fiori_3",async()=>F);u("@ui5/webcomponents","sap_fiori_3",async()=>L);const ae={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInStrip.css",content:`.ui5-tc__separator {
	width: 0;
	border-left: 0.0625rem solid var(--sapGroup_TitleBorderColor);
	margin: 0.5rem 0.25rem;
}
`};u("@ui5/webcomponents-theming","sap_fiori_3",async()=>F);u("@ui5/webcomponents","sap_fiori_3",async()=>L);const ne={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css",content:`.ui5-tc__separator {
	min-height: 0.25rem;
	border-bottom: 0.0625rem solid var(--sapGroup_TitleBorderColor);
	margin-inline-start: calc(var(--_ui5-tab-indentation-level) * 0.5rem);
	margin-inline-end: 0.5rem;
}

[ui5-list] > .ui5-tc__separator:first-child {
	min-height: 0.5rem;
}
`};var oe=globalThis&&globalThis.__decorate||function(a,n,o,m){var b=arguments.length,r=b<3?n:m===null?m=Object.getOwnPropertyDescriptor(n,o):m,T;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,n,o,m);else for(var g=a.length-1;g>=0;g--)(T=a[g])&&(r=(b<3?T(r):b>3?T(n,o,r):T(n,o))||r);return b>3&&r&&Object.defineProperty(n,o,r),r},p;let d=p=class extends U{static get stripTemplate(){return ee}static get overflowTemplate(){return te}get classes(){return{root:{"ui5-tc__separator":!0}}}get isSeparator(){return!0}getTabInStripDomRef(){return this._getElementInStrip?this._getElementInStrip():null}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return y(p.stripTemplate,this)}get overflowPresentation(){return y(p.overflowTemplate,this)}};d=p=oe([X({tag:"ui5-tab-separator",renderer:Y})],d);d.define();H.registerTabStyles(ae);H.registerStaticAreaTabStyles(ne);const re=d,se=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),l=Z("ui5-tab-separator",[],[],[],[],()=>Q(()=>Promise.resolve().then(()=>se),void 0,import.meta.url));l.displayName="TabSeparator";try{l.displayName="TabSeparator",l.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-TabContainer)",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ie="activities",M="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm0 164l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-160q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",ce=!0,le="SAP-icons-v4",me="@ui5/webcomponents-icons";h(ie,{pathData:M,ltr:ce,collection:le,packageName:me});const be="activities",E="M179 251q9-9 20.5-9t19.5 9q8 8 8 19.5t-8 19.5L105 404q-8 9-19.5 9T66 404L9 347q-9-8-9-19.5T9 307q8-8 19.5-8t19.5 8l37 37zm0-171q9-9 20.5-9t19.5 9q8 8 8 19.5t-8 20.5L105 233q-8 9-19.5 9T66 233L9 177q-9-9-9-20.5T9 137q8-9 19.5-9t19.5 9l37 37zm134 105q-28 0-28-28 0-13 7.5-21t20.5-8h171q13 0 20.5 8t7.5 21q0 28-28 28H313zm171 114q28 0 28 28 0 13-7.5 21t-20.5 8H313q-13 0-20.5-8t-7.5-21q0-28 28-28h171z",Te=!0,pe="SAP-icons-v5",de="@ui5/webcomponents-icons";h(be,{pathData:E,ltr:Te,collection:pe,packageName:de});k();const R="activities",ue="menu",W="M32 64q14 0 23 9.5T64 96q0 14-9 23t-23 9q-13 0-22.5-9T0 96q0-13 9.5-22.5T32 64zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 416q0-13 9.5-22.5T32 384zm128-255q-13 0-22.5-9.5T128 97q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 256q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 415q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160z",he=!1,fe="SAP-icons-v4",ge="@ui5/webcomponents-icons";h(ue,{pathData:W,ltr:he,collection:fe,packageName:ge});const xe="menu",A="M481 384q14 0 23 9t9 23-9 23-23 9H194q-15 0-23.5-9t-8.5-23 8.5-23 23.5-9h287zM194 129q-15 0-23.5-9T162 97t8.5-23 23.5-9h287q14 0 23 9t9 23-9 23-23 9H194zM50 368q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-159q20 0 34 13.5T98 256t-14 34-34 14-34-14-14-34 14-33.5T50 209zm0-160q20 0 34 14t14 34-14 34-34 14-34-14T2 97t14-34 34-14zm431 175q14 0 23 9t9 23q0 15-9 23.5t-23 8.5H194q-32 0-32-32 0-14 8.5-23t23.5-9h287z",_e=!1,qe="SAP-icons-v5",ye="@ui5/webcomponents-icons";h(xe,{pathData:A,ltr:_e,collection:qe,packageName:ye});k();const B="menu",Se={title:"Layouts & Floorplans / TabContainer",component:f,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:K.Standard,contentBackgroundDesign:S.Solid,headerBackgroundDesign:S.Solid}},s={render:a=>e.jsxs(f,{...a,children:[e.jsx(t,{text:"Tab One",icon:B,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(t,{text:"Tab Two",icon:R,additionalText:"20",children:"Content Tab 2"}),e.jsx(t,{text:"Tab Three",icon:V,children:"Content Tab 3"}),e.jsx(t,{text:"Tab Four",icon:G,children:"Content Tab 4"}),e.jsx(t,{text:"Tab Five",icon:J,children:"Content Tab 5"})]})},i={name:"with TabSeparator",render:a=>e.jsxs(f,{...a,children:[e.jsx(t,{text:"Tab One",icon:B,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(l,{}),e.jsx(t,{text:"Tab Two",icon:R,additionalText:"20",children:"Content Tab 2"})]})},c={name:"with nested tabs",render:a=>e.jsxs(f,{...a,children:[e.jsx(t,{text:"Tab One",selected:!0,subTabs:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Tab 1.1"}),e.jsx(t,{text:"Tab 1.2"}),e.jsx(t,{text:"Tab 1.3"})]}),children:e.jsx("div",{style:{display:"none"}})}),e.jsx(l,{}),e.jsx(t,{text:"Tab Two"}),e.jsx(t,{text:"Tab Three",subTabs:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Tab 3.1"}),e.jsx(t,{text:"Tab 3.2"}),e.jsx(t,{text:"Tab 3.3"})]})})]})};var C,$,j;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
        <Tab text="Tab Three" icon={addIcon}>
          Content Tab 3
        </Tab>
        <Tab text="Tab Four" icon={employeeIcon}>
          Content Tab 4
        </Tab>
        <Tab text="Tab Five" icon={settingsIcon}>
          Content Tab 5
        </Tab>
      </TabContainer>;
  }
}`,...(j=($=s.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var z,D,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'with TabSeparator',
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
      </TabContainer>;
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,O,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'with nested tabs',
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" selected subTabs={<>
              <Tab text="Tab 1.1" />
              <Tab text="Tab 1.2" />
              <Tab text="Tab 1.3" />
            </>}>
          <div style={{
          display: 'none'
        }} />
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" />
        <Tab text="Tab Three" subTabs={<>
              <Tab text="Tab 3.1" />
              <Tab text="Tab 3.2" />
              <Tab text="Tab 3.3" />
            </>} />
      </TabContainer>;
  }
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const we=["Default","WithTabSeparator","WithNestedTabs"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithNestedTabs:c,WithTabSeparator:i,__namedExportsOrder:we,default:Se},Symbol.toStringTag,{value:"Module"}));export{Fe as C,s as D,l as T,i as W,c as a};
//# sourceMappingURL=TabContainer.stories-f46669ac.js.map
