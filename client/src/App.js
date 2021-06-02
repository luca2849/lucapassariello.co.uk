import { useState } from "react";
import "./styles/theme.scss";

import Navbar from "./Components/Navbar/Navbar";

function App() {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);

	const themeChangeHandler = (theme) => {
		localStorage.setItem("theme", theme);
		setTheme(theme);
	};

	return (
		<div className={`App ${theme}`}>
			<Navbar changeHandler={themeChangeHandler} theme={theme} />
		</div>
	);
}

export default App;
