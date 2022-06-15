import React from "react";
import styles from "./ExampleButton.module.scss";
import styled from "styled-components";
import resolveProps from "../../util/resolveProps";

const Button = (props) => {
	console.log(props);
	const resolvedProps = resolveProps(props, "Button");
	let backgroundColor = getBackgroundColor(resolvedProps);
	let backgroundColorHover = getBackgroundHoverColor(resolvedProps);
	let textColor = getTextColor(resolvedProps);
	let border = getBorder(resolvedProps);
	let [size, padding] = getSizeAndPadding(resolvedProps);

	const StyledButton = styled.button`
		color: ${textColor};
		background: ${backgroundColor};
		cursor: ${props.disabled ? "not-allowed" : "pointer"};
		border: ${border};
		padding: ${padding};
		font-size: ${size};
		border-radius: 6px;
		letter-spacing: 1px;
		transition: all 0.2s;
		display: flex;
		background: ${props.className === "hovered" &&
		!props.disabled &&
		backgroundColorHover};
		&:hover {
			background: ${!props.disabled && backgroundColorHover};
		}
	`;
	return (
		<StyledButton>
			{props.startIcon && (
				<div className={`${styles.icon} ${styles.startIcon}`}>
					{props.startIcon}
				</div>
			)}
			{props.children}
			{props.endIcon && (
				<div className={`${styles.icon} ${styles.endIcon}`}>
					{props.endIcon}
				</div>
			)}
		</StyledButton>
	);
};

// Colour dictionary
const variants = {
	default: { bg: "#e0e0e0", hover: "#aeaeae", color: "#000" },
	primary: { bg: "#3d5afe", hover: "#0039cb", color: "#FFF" },
	secondary: { bg: "#455a64", hover: "#1c313a", color: "#FFF" },
	danger: { bg: "#d32f2f", hover: "#9a0007", color: "#FFF" },
	disabled: { bg: "#9e9e9e", hover: "#9e9e9e", color: "#9e9e9e" },
};

// Functions for selecting correct style for a given prop object

const getBackgroundColor = (props) => {
	// This function essentially works through
	// all passed in props and works out the
	// required color through precedence
	let color;
	// Deal with variants
	switch (props.variant) {
		// futureproofed switch
		case "outline":
		case "text":
			color = "none";
			break;
		default:
			color = variants["default"].bg;
			break;
	}
	// Deal with disableShadow
	if (props.disableShadow) color = variants["primary"].bg;
	// Deal with colors
	if (props.color) color = variants[props.color].bg;
	return color;
};

const getBackgroundHoverColor = (props) => {
	let color;
	// variants
	switch (props.variant) {
		case "outline":
		case "text":
			color = "rgba(41, 98, 255, 0.1);";
			break;
		default:
			color = variants["default"].hover;
			break;
	}
	// disableShadow
	if (props.disableShadow) color = variants["primary"].hover;
	// Deal with colors
	if (props.color) color = variants[props.color].hover;
	return color || variants["default"].hover;
};

const getTextColor = (props) => {
	let color;
	// variants
	switch (props.variant) {
		case "outline":
		case "text":
			color = variants["primary"].bg;
			break;
		default:
			color = variants["default"].color;
			break;
	}
	// disableShadow
	if (props.disableShadow) color = "#FFF";
	// Deal with colors
	if (props.color) color = variants[props.color].color;
	// Disabled?
	if (props.disabled) color = variants["disabled"].color;
	return color || "#000";
};

const getBorder = (props) => {
	let border;
	// Border for outline button
	switch (props.variant) {
		case "outline":
			border = `2px solid ${variants["primary"].bg}`;
			break;
		default:
			border = "none";
			break;
	}
	return border || "none";
};

const getSizeAndPadding = (props) => {
	let size, padding;
	switch (props.size) {
		case "sm":
			size = "100%";
			padding = "0.75rem 1rem";
			break;
		case "md":
			size = "110%";
			padding = "1rem 1.25rem";
			break;
		case "lg":
			size = "120%";
			padding = "1.25rem 1.5rem";
			break;
		default:
			size = "100%";
			padding = "1rem 1rem";
			break;
	}
	return [size, padding];
};

export default Button;
