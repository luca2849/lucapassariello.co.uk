const defaultProps = {
	Button: {
		disabled: false,
		variant: "",
		startIcon: "",
		endIcon: "",
		size: "sm",
		color: "",
		disableShadow: false,
	},
};

export default function resolveProps(props, component) {
	const outputProps = { ...props };
	Object.keys(defaultProps[component]).forEach((key) => {
		if (outputProps[key] === undefined) {
			outputProps[key] = defaultProps[component][key];
		}
	});
	return outputProps;
}
