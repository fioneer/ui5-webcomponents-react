import{b as M}from"./DomRefTable.module-1c545b6d.js";import{D as j}from"./DocsHeader-2ac4c9ed.js";import{F as w}from"./Footer-ac703fb9.js";import{j as e}from"./jsx-runtime-6b79a019.js";import{M as g,a as m,b as B}from"./index-5146b51e.js";import{r}from"./index-ccf6a75d.js";import{D}from"./DomRefTable-c24c3bfd.js";import{M as k,C as b,f as C}from"./chunk-PCJTTTQV-ea334b5f.js";import{r as O}from"./index-8d7a8128.js";import{D as A}from"./DialogDomRef-ffa73df1.js";import{B as p}from"./index-da1c4f54.js";import{u as y}from"./index-f2208173.js";import"./react-jss.esm-0528916b.js";import"./inheritsLoose-93e09647.js";import"./index-d2e5ea07.js";import"./iframe-663d599c.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-341004db.js";import"./Button-3da2aede.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-d3b71bde.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-41e89c44.js";import"./Integer-f7f172c9.js";import"./index-b42ff7d3.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-476d75d7.js";import"./index-1842ce63.js";import"./Link-6cd3dd1c.js";import"./WrappingType-b81e595a.js";import"./index-9da023d2.js";import"./TableOfContent-5077e852.js";import"./index-c310e45e.js";import"./Label-f867a533.js";import"./index-c99715ba.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";import"./index-99d317a4.js";import"./i18n-defaults-2d74659d.js";import"./I18nContext-bec860f5.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-17481929.js";import"./useIsomorphicId-8e9cbc05.js";import"./index-5d3de080.js";import"./Dialog-b040586c.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-fd1f5c55.js";import"./Title-01e28931.js";import"./index-f19712b5.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";const l=r.forwardRef((n,i)=>O.createPortal(e.jsx(g,{...n,ref:i}),document.body));l.displayName="MessageBox";try{l.displayName="MessageBox",l.__docgenInfo={description:"",displayName:"MessageBox",props:{accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

__Note:__ Per default the prop receives the IDs of the header and the content.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Flag whether the Message Box should be opened or closed",name:"open",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"A custom title for the MessageBox. If not present, it will be derived from the `MessageBox` type.",name:"titleText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `MessageBox`.\n\n**Note:** Although this prop accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design and a11y capabilities.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},actions:{defaultValue:null,description:"Array of actions of the MessageBox. Those actions will be transformed into buttons in the `MessageBox` footer.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `MessageBoxAction`s (text) or the `Button` component in order to preserve the intended.",name:"actions",required:!1,type:{name:"ReactNode[]"}},emphasizedAction:{defaultValue:null,description:`Specifies which action of the created dialog will be emphasized.
@since 0.16.3`,name:"emphasizedAction",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"A custom icon. If not present, it will be derived from the `MessageBox` type.",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"Defines the type of the `MessageBox` with predefined title, icon, actions and a visual highlight color.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Confirm"'},{value:'"Error"'},{value:'"Information"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Confirm"'},{value:'"Success"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element or the `MessageBoxAction`, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback to be executed when the `MessageBox` is closed (either by pressing on one of the `actions` or by pressing the `ESC` key). `event.detail.action` contains the pressed action button.",name:"onClose",required:!1,type:{name:"(event: CustomEvent<{ action: string; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:`Defines the header HTML Element.

**Note:** If \`header\` slot is provided, the labelling of the dialog is a responsibility of the application developer. \`accessibleName\` should be used.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},resizable:{defaultValue:null,description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:null,description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role. Available options are:\n\n*   `Dialog`\n*   `None`\n*   `AlertDialog`",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}}}}}catch{}function N(n={}){const{wrapper:i}=Object.assign({},y(),n.components);return i?e.jsx(i,{...n,children:e.jsx(s,{})}):s();function s(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",a:"a",h1:"h1"},y(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Modals & Popovers / MessageBox",component:g,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:!1,type:B.Confirm,children:'Press "Escape" to close the MessageBox.'},parameters:{chromatic:{delay:1e3}}}),`
`,e.jsx(j,{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(b,{children:e.jsx(C,{name:"Default",children:t=>{const[a,c]=r.useState(t.open),h=()=>{c(!0)},f=d=>{c(!1),t.onClose(d)};return r.useEffect(()=>{c(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:h,children:"Open Messagebox"}),e.jsx(l,{...t,open:a,onClose:f})]})}})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(M,{story:"Default"}),`
`,e.jsx(D,{rows:A}),`
`,e.jsx(o.h2,{id:"opening-and-closing-messageboxes",children:"Opening and Closing MessageBoxes"}),`
`,e.jsxs(o.p,{children:["Unlike ",e.jsx(o.code,{children:"Popovers"})," or ",e.jsx(o.code,{children:"Dialogs"}),", ",e.jsx(o.code,{children:"MessageBoxes"})," do not need to be provided with a ",e.jsx(o.code,{children:"ref"})," to be opened or closed. Instead, the ",e.jsx(o.code,{children:"open"})," prop can be used for this."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," ",e.jsx(o.code,{children:"onClose"})," is either called by clicking on one of the action buttons in the footer or by pressing the ",e.jsx(o.code,{children:"ESC"})," key."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox open={open} onClose={handleClose}>
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,e.jsx(o.h2,{id:"accessing-actions-in-the-onclose-callback",children:"Accessing actions in the onClose callback"}),`
`,e.jsxs(o.p,{children:["To add some logic to the respective actions you can use ",e.jsx(o.code,{children:"event.detail.action"})," inside ",e.jsx(o.code,{children:"onClose"})," which contains the name of the clicked action."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = (event) => {
    if (event.detail.action === MessageBoxActions.OK) {
      // do something on "Ok" button click
    } else if (event.detail.action === 'Custom Action') {
      // do something on "Custom Action" click
    } else {
      // do something on "Cancel" or "Abort" button click
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox
        open={open}
        onClose={handleClose}
        actions={[MessageBoxActions.OK, 'Custom Action', MessageBoxActions.Cancel, MessageBoxActions.Abort]}
      >
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,e.jsx(o.h2,{id:"using-messageboxes-inside-other-components",children:"Using MessageBoxes inside other components"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"MessageBoxes"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e.jsx(o.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",e.jsx(o.code,{children:"MessageBox"})," outside of the DOM hierarchy of the parent component."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-JSX",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      {createPortal(
        <MessageBox open={open} onClose={handleClose}>
          Content
        </MessageBox>,
        document.body
      )}
    </>
  );
};
`})}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"messagebox-with-custom-actions",children:"MessageBox with custom actions"}),`
`,e.jsx(b,{children:e.jsx(C,{name:"With Custom Action",args:{actions:[m.OK,"Custom Action",m.Cancel,e.jsx(p,{id:"custom-action",children:"Custom Button"},"0")]},children:t=>{const[a,c]=r.useState(!1),h=()=>{c(!0)},f=d=>{d.detail.action,c(!1),t.onClose(d)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:h,children:"Open Messagebox"}),e.jsx(l,{...t,open:a,onClose:f})]})}})}),`
`,e.jsx(w,{})]})}}const v=n=>{const[i,s]=r.useState(n.open),o=()=>{s(!0)},t=a=>{s(!1),n.onClose(a)};return r.useEffect(()=>{s(n.open)},[n.open]),e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:o,children:"Open Messagebox"}),e.jsx(l,{...n,open:i,onClose:t})]})};v.storyName="Default";v.parameters={storySource:{source:`args => {
  const [open, setOpen] = useState(isChromatic || args.open);

  const onButtonClick = () => {
    setOpen(true);
  };

  const handleClose = e => {
    setOpen(false);
    args.onClose(e);
  };

  useEffect(() => {
    setOpen(args.open);
  }, [args.open]);
  return <>
          <Button onClick={onButtonClick}>Open Messagebox</Button>
          <MessageBox {...args} open={open} onClose={handleClose} />
        </>;
}`}};const x=n=>{const[i,s]=r.useState(!1),o=()=>{s(!0)},t=a=>{a.detail.action,s(!1),n.onClose(a)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:o,children:"Open Messagebox"}),e.jsx(l,{...n,open:i,onClose:t})]})};x.storyName="With Custom Action";x.args={actions:[m.OK,"Custom Action",m.Cancel,e.jsx(p,{id:"custom-action",children:"Custom Button"},"0")]};x.parameters={storySource:{source:`args => {
  const [open, setOpen] = useState(false);

  const onButtonClick = () => {
    setOpen(true);
  };

  const handleClose = e => {
    if (e.detail.action === "Custom Action") {// do something on "Custom Action" button click
    }

    setOpen(false);
    args.onClose(e);
  };

  return <>
          <Button onClick={onButtonClick}>Open Messagebox</Button>
          <MessageBox {...args} open={open} onClose={handleClose} />
        </>;
}`}};const u={title:"Modals & Popovers / MessageBox",parameters:{chromatic:{delay:1e3}},component:g,args:{open:!1,type:B.Confirm,children:'Press "Escape" to close the MessageBox.'},argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomAction"]};u.parameters=u.parameters||{};u.parameters.docs={...u.parameters.docs||{},page:N};const so=["defaultStory","withCustomAction"];export{so as __namedExportsOrder,u as default,v as defaultStory,x as withCustomAction};
//# sourceMappingURL=MessageBox.stories-bfebc336.js.map
