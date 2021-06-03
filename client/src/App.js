import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/theme.scss";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);

	const themeChangeHandler = (theme) => {
		// Set theme in local storage if changed
		localStorage.setItem("theme", theme);
		setTheme(theme);
	};

	return (
		<Router>
			<div className={`App ${theme}`}>
				<Navbar changeHandler={themeChangeHandler} theme={theme} />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
