import{j as e}from"./jsx-runtime-6b79a019.js";import{M as s}from"./chunk-PCJTTTQV-ea334b5f.js";import"./DomRefTable.module-1c545b6d.js";import"./index-ccf6a75d.js";import{T as a}from"./TableOfContent-5077e852.js";import{F as p}from"./Footer-ac703fb9.js";import{u as i}from"./index-f2208173.js";import{M as c}from"./index-d2e5ea07.js";import"./iframe-663d599c.js";import"../sb-preview/runtime.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-8d7a8128.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./react-jss.esm-0528916b.js";import"./index-d3b71bde.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-f515de3e.js";import"./index-41e89c44.js";import"./withWebComponent-03662f7f.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./Device-6afa24d0.js";import"./Integer-f7f172c9.js";import"./class-map-341004db.js";import"./i18n-defaults-1a83921e.js";import"./index-b42ff7d3.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-476d75d7.js";import"./AriaLabelHelper-43a261ec.js";import"./index-1842ce63.js";import"./Link-6cd3dd1c.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-9da023d2.js";import"./index-c310e45e.js";import"./Label-f867a533.js";import"./index-da1c4f54.js";import"./Button-3da2aede.js";import"./index-c99715ba.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";import"./information-2644a02f.js";function ge(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const o=Object.assign({h1:"h1","ui5-link":"ui5-link",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"FAQ"}),`
`,e.jsx(a,{}),`
`,e.jsx(o.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(c,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" Please also take a look at the FAQ of"," ",e.jsx(o["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-faq",children:" UI5 Web Components"})," ."]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"why-is-my-popover-or-dialog-not-rendered-correctly",children:"Why is my Popover or Dialog not rendered correctly?"}),`
`,e.jsxs(o.p,{children:[`Mounting popups, like the Popover, inside of components can lead to unwanted side-effects (wrong positioning, alignment, etc.), to prevent that we recommend either mounting it outside of the component, or mounting it with a React portal.
You can find out more about how we use portals `,e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsxs(o.h2,{id:"where-can-i-find-all-compatible-versions-of-ui5webcomponents-and-ui5webcomponents-react",children:["Where can I find all compatible versions of ",e.jsx(o.code,{children:"@ui5/webcomponents"})," and ",e.jsx(o.code,{children:"@ui5/webcomponents-react"}),"?"]}),`
`,e.jsxs(o.p,{children:["All necessary ",e.jsx(o.code,{children:"@ui5/webcomponents"})," packages are ",e.jsx(o.code,{children:"peerDependencies"})," of ",e.jsx(o.code,{children:"@ui5/webcomponents-react"}),", so if you're using npm v7 or later, then these dependencies should be auto installed when running ",e.jsx(o.code,{children:"npm install"}),`.
If you want to check which versions are compatible you can find a compatibility table `,e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsx(o.h2,{id:"what-are-abstract-ui5-web-components",children:'What are "abstract" UI5 Web Components?'}),`
`,e.jsx(o.p,{children:"Abstract UI5 Web Components are mainly there to pass props to the actual component inside the shadow root. Therefore, all attributes passed to the element, will have no effect on the actual component."}),`
`,e.jsx(o.h3,{id:"example",children:"Example"}),`
`,e.jsxs(o.p,{children:["Rendering a ",e.jsx(o.code,{children:"ComboBoxItem"})," with some custom HTML attributes..."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<ComboBox>
  <ComboBoxItem text="ComboBoxItem1" title="Hello" style={{ backgroundColor: 'red' }} />
</ComboBox>
`})}),`
`,e.jsx(o.p,{children:"...will result in an element that looks like this:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<ui5-cb-item
  text="ComboBoxItem1"
  title="Hello"
  style="background-color: red;"
  _ui5rt0=""
  _ui5host=""
  ui5-cb-item=""
></ui5-cb-item>
`})}),`
`,e.jsxs(o.p,{children:["As you can see, both ",e.jsx(o.code,{children:"title"})," and ",e.jsx(o.code,{children:"style"})," are correctly applied, but since the item doesn't have children, nor a shadow root the attributes don't have an effect on the component."]}),`
`,e.jsx(o.h2,{id:"how-can-i-style-elements-inside-the-shadow-root-of-a-web-component",children:"How can I style elements inside the shadow root of a web component?"}),`
`,e.jsxs(o.p,{children:["Styling elements inside the shadow root is only supported by leveraging the ",e.jsxs(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",target:"_blank",rel:"nofollow noopener noreferrer",children:[e.jsx(o.code,{children:"::part"})," pseudo-element"]}),". You can find out more about this ",e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-styling--docs#css-shadow-parts",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsx(p,{})]})}}export{ge as default};
//# sourceMappingURL=FAQ-3f732b40.js.map
