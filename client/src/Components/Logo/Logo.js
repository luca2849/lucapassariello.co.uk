const Logo = ({ width, height }) => (
	<div style={{ height: height || "50px", width: width || "50px" }}>
		<img alt="Site Logo" src="/img/logo.svg" />
	</div>
);

export default Logo;
