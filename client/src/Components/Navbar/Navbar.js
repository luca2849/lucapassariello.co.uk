import { useState } from "react";

import styles from "./Navbar.module.scss";
import Logo from "../Logo/Logo";

import Switch from "react-switch";

import { BiMoon, BiSun } from "react-icons/bi";

const Navbar = ({ changeHandler, theme }) => {
	const [checked, setChecked] = useState(false);

	const onChange = (e) => {
		console.log(e);
		setChecked(!checked);
		changeHandler(theme === "light" ? "dark" : "light");
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.content}>
				<div>
					<Logo />
				</div>
				<div>
					<Switch
						onChange={(e) => onChange(e)}
						checked={theme === "dark"}
						onColor="#3590FF"
						checkedIcon={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									height: "100%",
									width: "100%",
									transform: "scale(1.5)",
								}}
							>
								<BiSun />
							</div>
						}
						uncheckedIcon={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									height: "100%",
									width: "100%",
									transform: "scale(1.25)",
								}}
							>
								<BiMoon />
							</div>
						}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
