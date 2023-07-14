import{a as e}from"./UI5Element-78be0f3d.js";import{a,b as t}from"./withWebComponent-d4224c1c.js";e("@ui5/webcomponents-theming","sap_fiori_3",async()=>a);e("@ui5/webcomponents","sap_fiori_3",async()=>t);const o={packageName:"@ui5/webcomponents",fileName:"themes/ValueStateMessage.css",content:`.ui5-valuestatemessage-popover {
	border-radius: var(--_ui5_value_state_message_popover_border_radius);
	box-shadow: var(--_ui5_value_state_message_popover_box_shadow);
}

.ui5-input-value-state-message-icon {
	width: var(--_ui5_value_state_message_icon_width);
	height: var(--_ui5_value_state_message_icon_height);
	display: var(--_ui5_input_value_state_icon_display);
	position: absolute;
	padding-right: 0.375rem;
}

.ui5-valuestatemessage-root .ui5-input-value-state-message-icon {
	left: var(--_ui5_input_value_state_icon_offset);
}

.ui5-input-value-state-message-icon[name="error"] {
	color: var(--sapNegativeElementColor);
}

.ui5-input-value-state-message-icon[name="alert"] {
	color: var(--sapCriticalElementColor);
}

.ui5-input-value-state-message-icon[name="success"] {
	color: var(--sapPositiveElementColor);
}

.ui5-input-value-state-message-icon[name="information"] {
	color: var(--sapInformativeElementColor);
}

.ui5-valuestatemessage-root {
	box-sizing: border-box;
	display: inline-block;
	color: var(--sapTextColor);
	font-size: var(--sapFontSmallSize);
	font-family: "72override", var(--sapFontFamily);
	height: auto;
	padding: var(--_ui5_value_state_message_padding);
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 6.25rem;
	border: var(--_ui5_value_state_message_border);
}

[ui5-responsive-popover] .ui5-valuestatemessage-header, [ui5-popover] .ui5-valuestatemessage-header  {
	min-height: 2rem;
}

[ui5-responsive-popover] .ui5-valuestatemessage-header {
	padding: var(--_ui5_value_state_header_padding);
	border: var(--_ui5_value_state_header_border);
	border-bottom: var(--_ui5_value_state_header_border_bottom);
}

.ui5-valuestatemessage--success {
	background: var(--sapSuccessBackground);
}

.ui5-valuestatemessage--warning {
	background: var(--sapWarningBackground);
}

.ui5-valuestatemessage--error {
	background: var(--sapErrorBackground);
}

.ui5-valuestatemessage--information {
	background: var(--sapInformationBackground);
}

.ui5-responsive-popover-header[focused], .ui5-responsive-popover-header:focus {
	outline-offset: var(--_ui5_value_state_header_offset);
	outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
}

.ui5-valuestatemessage-popover::part(header),
.ui5-valuestatemessage-popover::part(content) {
	padding: 0;
}

.ui5-valuestatemessage-popover::part(header),
.ui5-valuestatemessage-popover::part(footer) {
	min-height: 0;
}

.ui5-valuestatemessage-popover::part(header),
.ui5-suggestions-popover-with-value-state-header::part(header) {
	margin-bottom: 0;
}
`};export{o as s};
//# sourceMappingURL=ValueStateMessage.css-998b8922.js.map
