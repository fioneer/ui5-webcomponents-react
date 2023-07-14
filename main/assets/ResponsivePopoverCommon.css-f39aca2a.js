import{a as n}from"./UI5Element-78be0f3d.js";import{a as o,b as t}from"./withWebComponent-d4224c1c.js";n("@ui5/webcomponents-theming","sap_fiori_3",async()=>o);n("@ui5/webcomponents","sap_fiori_3",async()=>t);const i={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopoverCommon.css",content:`/* styles for input in dialog */
.input-root-phone {
	flex: 1;
	position: relative;
	height: var(--_ui5_input_height);
	color: var(--sapField_TextColor);
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	background: var(--sapField_BackgroundStyle);
	background-color: var(--_ui5_input_background_color);
	border: var(--_ui5-input-border);
	border-radius: var(--_ui5_input_border_radius);
	box-sizing: border-box;
}
.input-root-phone [inner-input] {
	padding: 0 0.5rem;
	width: 100%;
	height: 100%;
}
.input-root-phone [inner-input]:focus {
	background-color: var(--sapField_Focus_Background);
}
.input-root-phone:focus-within:before {
	content: '';
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_input_focus_border_radius);
	top: var(--_ui5_input_focus_offset);
	bottom: var(--_ui5_input_focus_offset);
	left: var(--_ui5_input_focus_offset);
	right: var(--_ui5_input_focus_offset);

}
.input-root-phone [value-state="Error"] [input-icon][data-ui5-compact-size],
.input-root-phone [value-state="Success"] [input-icon][data-ui5-compact-size],
.input-root-phone [value-state="Warning"] [input-icon][data-ui5-compact-size] {
	padding: .1875rem .5rem
}
[inner-input] {
	background: transparent;
	color: inherit;
	border: none;
	font-style: normal;
	-webkit-appearance: none;
	-moz-appearance: textfield;
	line-height: normal;
	padding: var(--_ui5_input_inner_padding);
	box-sizing: border-box;
	min-width: 3rem;
	text-overflow: ellipsis;
	flex: 1;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	border-radius: var(--_ui5_input_border_radius);
}
[inner-input]::selection,
[inner-input]::-moz-selection {
	background: var(--sapSelectedColor);
	color: var(--sapContent_ContrastTextColor);
}
/* Input placeholder */
[inner-input]::-webkit-input-placeholder {
	font-style: italic;
	color: var(--sapField_PlaceholderTextColor);
}
[inner-input]::-moz-placeholder {
	font-style: italic;
	color: var(--sapField_PlaceholderTextColor);
}
.input-root-phone[value-state]:not([value-state="None"]) {
	border-width: var(--_ui5_input_state_border_width);
}
.input-root-phone[value-state="Error"] [inner-input],
.input-root-phone[value-state="Warning"] [inner-input] {
	font-style: var(--_ui5_input_error_warning_font_style);
}
.input-root-phone[value-state="Error"] [inner-input] {
	font-weight: var(--_ui5_input_error_font_weight);
}
.input-root-phone[value-state="Error"]:not([readonly]) {
	background: var(--sapField_InvalidBackgroundStyle);
	background-color: var(--sapField_InvalidBackground);
	border-color: var(--_ui5_input_value_state_error_border_color);
}
.input-root-phone[value-state="Error"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_error_background);
	border-color: var(--_ui5_input_focused_value_state_error_border_color);
}
.input-root-phone[value-state="Error"]:not([readonly]):focus-within:before {
	border-color: var(--_ui5_input_focused_value_state_error_focus_outline_color);
}
.input-root-phone[value-state="Error"]:not([readonly]):not([disabled]),
.input-root-phone[value-state="Warning"]:not([readonly]):not([disabled]),
.input-root-phone[value-state="Information"]:not([readonly]):not([disabled]) {
	border-style: var(--_ui5_input_error_warning_border_style);
}
.input-root-phone[value-state="Warning"]:not([readonly]) {
	background: var(--sapField_WarningBackgroundStyle);
	background-color: var(--sapField_WarningBackground);
	border-color: var(--_ui5_input_value_state_warning_border_color);
}
.input-root-phone[value-state="Warning"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_warning_background);
	border-color: var(--_ui5_input_focused_value_state_warning_border_color);
}
.input-root-phone[value-state="Warning"]:not([readonly]):focus-within:before {
	border-color: var(--_ui5_input_focused_value_state_warning_focus_outline_color);
}
.input-root-phone[value-state="Success"]:not([readonly]) {
	background: var(--sapField_SuccessBackgroundStyle);
	background-color: var(--sapField_SuccessBackground);
	border-color: var(--_ui5_input_value_state_success_border_color);
	border-width: var(--_ui5_input_value_state_success_border_width);
}
.input-root-phone[value-state="Success"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_success_background);
	border-color: var(--_ui5_input_focused_value_state_success_border_color);
}
.input-root-phone[value-state="Success"]:not([readonly]):focus-within:before {
	border-color: var(--_ui5_input_focused_value_state_success_focus_outline_color);
}
.input-root-phone[value-state="Information"]:not([readonly]) {
	background: var(--sapField_InformationBackgroundStyle);
	background-color: var(--sapField_InformationBackground);
	border-color: var(--_ui5_input_value_state_information_border_color);
	border-width: var(--_ui5_input_information_border_width);
}
.input-root-phone[value-state="Information"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_information_background);
	border-color: var(--_ui5_input_focused_value_state_information_border_color);
}
/* MultiComboBox & MultiInput specific */
.ui5-multi-combobox-toggle-button {
	margin-left: 0.5rem;
}
.ui5-responsive-popover-header {
	width: 100%;
	min-height: 2.5rem;
	display: flex;
	flex-direction: column;
}
.ui5-responsive-popover-header-text {
	width: calc(100% - var(--_ui5_button_base_min_width));
}
/* Header and footer layout */
.ui5-responsive-popover-header .row {
	box-sizing: border-box;
	padding: 0.25rem 1rem;
	min-height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: var(--sapFontHeader5Size);
}
.ui5-responsive-popover-footer {
	display: flex;
	justify-content: flex-end;
	padding: 0.25rem 0;
	width: 100%;
}
.ui5-responsive-popover-close-btn {
	position: absolute;
	right: 1rem;
}

`};export{i as s};
//# sourceMappingURL=ResponsivePopoverCommon.css-f39aca2a.js.map
