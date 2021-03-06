import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/theme.scss";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import MyWork from "./Pages/MyWork/MyWork";
import MySkills from "./Pages/MySkills/MySkills";

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
					<Route exact path="/portfolio" component={MyWork} />
					<Route exact path="/skills" component={MySkills} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
