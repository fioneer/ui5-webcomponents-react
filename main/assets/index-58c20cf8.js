import{_ as a}from"./iframe-2ea913ee.js";import"./DatePicker-9e49b132.js";import{w as t}from"./withWebComponent-d4224c1c.js";import{V as n}from"./ValueState-ab6838cc.js";const e=t("ui5-date-picker",["accessibleName","accessibleNameRef","name","placeholder","value","valueState","formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType"],["disabled","hideWeekNumbers","readonly","required"],["valueStateMessage"],["change","input"],()=>a(()=>import("./DatePicker-9e49b132.js"),["./DatePicker-9e49b132.js","./withWebComponent-d4224c1c.js","./utils-69f7a0e0.js","./CustomElementsScopeUtils-137da8c8.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-70a9e5b9.js","./UI5Element-78be0f3d.js","./Icons-26e87c01.js","./Calendar-27089d2d.js","./Gregorian-f31ae0ec.js","./LocaleData-0b80b820.js","./Integer-f7f172c9.js","./slim-arrow-left-9b1e01a2.js","./slim-arrow-right-ccb981dd.js","./class-map-18f572ce.js","./i18n-defaults-f002f496.js","./style-map-54298215.js","./ValueState-2c5e5904.js","./AriaLabelHelper-43a261ec.js","./Device-99b8bbf4.js","./decline-09ce3004.js","./i18n-defaults-80781f7e.js","./HasPopup-47461347.js","./Button-427cd4bb.js","./MarkedEvents-b83081e9.js","./ResponsivePopover-5ed17489.js","./Popover-a03c4c52.js","./PopupsCommon.css-1eb36bcf.js","./FocusableElements-53839075.js","./isElementHidden-01c07146.js","./ResizeHandler-15c77712.js","./MediaRange-25b98f31.js","./BrowserScrollbar.css-119d6915.js","./Dialog-35faa92e.js","./information-872f55da.js","./Title-e1d9d87f.js","./WrappingType-b81e595a.js","./Input-570579b1.js","./Suggestions.css-0bf90e55.js","./ResponsivePopoverCommon.css-f39aca2a.js","./ValueStateMessage.css-998b8922.js"],import.meta.url));e.displayName="DatePicker";e.defaultProps={valueState:n.None};try{e.displayName="DatePicker",e.__docgenInfo={description:"The `DatePicker` component provides an input field with assigned calendar which opens on user action. The `DatePicker` allows users to select a localized date using touch, mouse, or keyboard input. It consists of two parts: the date input field and the date picker.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-DatePicker)",displayName:"DatePicker",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DatePickerDomRef, DatePickerChangeEventDetail>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component is changed at each key stroke.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DatePickerDomRef, DatePickerInputEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},hideWeekNumbers:{defaultValue:null,description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:`Defines a short hint, intended to aid the user with data entry when the component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},maxDate:{defaultValue:null,description:"Determines the maximum date available for selection. **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).",name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Determines the minimum date available for selection. **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).",name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:null,description:'Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`',name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:null,description:"Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.",name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as D};
//# sourceMappingURL=index-58c20cf8.js.map
