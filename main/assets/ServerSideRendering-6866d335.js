import{j as e}from"./jsx-runtime-5926aa06.js";import"./DomRefTable.module-a8922c91.js";import{M as s}from"./chunk-PCJTTTQV-4d268401.js";import"./index-ebeaab24.js";import{T as p}from"./TableOfContent-7be08c3b.js";import{F as a}from"./Footer-8be17dcc.js";import{M as m,a as c}from"./index-072d53af.js";import{u as i}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-3e959ad1.js";import"./UI5Element-78be0f3d.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-69f7a0e0.js";import"./index-063ffa6b.js";import"./iframe-2ea913ee.js";import"../sb-preview/runtime.js";import"./withWebComponent-d4224c1c.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-70a9e5b9.js";import"./Icons-26e87c01.js";import"./Device-99b8bbf4.js";import"./Integer-f7f172c9.js";import"./class-map-18f572ce.js";import"./i18n-defaults-f002f496.js";import"./index-b490c39d.js";import"./Avatar-e1c9d8f0.js";import"./ResizeHandler-15c77712.js";import"./employee-1c1d2fc1.js";import"./index-7e299d9c.js";import"./AriaLabelHelper-43a261ec.js";import"./index-4d911eb4.js";import"./Link-04c4a519.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-ea625d40.js";import"./index-7332b178.js";import"./Label-263c93f2.js";import"./index-f5b57a3d.js";import"./Button-427cd4bb.js";import"./index-707767ec.js";import"./Popover-a03c4c52.js";import"./PopupsCommon.css-1eb36bcf.js";import"./FocusableElements-53839075.js";import"./isElementHidden-01c07146.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-119d6915.js";import"./information-872f55da.js";function h(){return e.jsx(m,{design:c.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Known Limitations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening on the client."}),e.jsxs("li",{children:["The Next.js ",e.jsx("code",{children:"app"})," directory shows some hydration warnings on the client. These warnings seem not to affect the runtime."]})]})]})})}function ke(r={}){const{wrapper:o}=Object.assign({},i(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",h3:"h3",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Server Side Rendering"}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h1,{id:"server-side-rendering",children:"Server Side Rendering"}),`
`,e.jsxs(t.p,{children:["We're happy to announce that starting from ",e.jsx(t.strong,{children:"v1.17.0"}),", UI5 Web Components for React is supporting Server Side Rendering Frameworks like ",e.jsx(t.a,{href:"https://nextjs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Next.js"})," 🎉."]}),`
`,e.jsx(h,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"nextjs",children:"Next.js"}),`
`,e.jsx(t.h3,{id:"create-a-new-project",children:"Create a new project"}),`
`,e.jsxs(t.p,{children:["The best way to start using UI5 Web Components in Next.js is using one of our ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/project-templates--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"templates"}),`.
We have templates available for both the pages and the app router.`]}),`
`,e.jsx(t.h3,{id:"add-to-existing-project",children:"Add to existing project"}),`
`,e.jsxs(t.p,{children:["In case you already have an existing Next.js project and want to add UI5 Web Components for React to it, you first need to follow our ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"general Getting Started Guide"}),"."]}),`
`,e.jsxs(t.p,{children:["As UI5 Web Components for React is using ",e.jsx(t.code,{children:"react-jss"})," internally, you need to apply some changes to your ",e.jsx(t.code,{children:"_app"})," and ",e.jsx(t.code,{children:"_document"}),` file (in case you are using the pages router).
You can copy these changes either from the official `,e.jsx(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/with-react-jss",target:"_blank",rel:"nofollow noopener noreferrer",children:"next.js-react-jss example"})," or from our ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/examples/nextjs-pages",target:"_blank",rel:"nofollow noopener noreferrer",children:"pages router template"}),"."]}),`
`,e.jsxs(t.p,{children:["In case you are already using the app router, you can copy the ",e.jsx(t.code,{children:"react-jss"})," setup from the ",e.jsx(t.code,{children:"app/CssRegistry.tsx"})," in our ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/examples/nextjs-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"app router template"}),". Make sure to add this component to your root layout!"]}),`
`,e.jsx(t.h2,{id:"other-frameworks",children:"Other frameworks"}),`
`,e.jsxs(t.p,{children:["Your favorite framework is missing here? Feel free to ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/knowledge-base/ServerSideRendering.mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"edit this page"})," and submit a pull request to get it added!"]}),`
`,e.jsx(a,{})]})}}export{ke as default};
//# sourceMappingURL=ServerSideRendering-6866d335.js.map
