import React from "react";
import samples from "./example_code";
import components from "./components.json";
import styles from "./CodeExamples.module.scss";
import Component from "../../Components/Component/Component";

const CodeExamples = () => {
	return (
		<div>
			<h2>Code Examples</h2>
			<div className={styles.text}>
				<p>
					Over some of my projects working with React, I have created
					some reusable components which I though may be of use to
					other developers. What follows is a comprehensive catalogue,
					describing each component, how it was created, how it is
					used and where it can be found.
				</p>
			</div>
			<div className={styles.toc}></div>
			<div className={styles.components}>
				{components.map((component, index) => (
					<Component
						component={component}
						samples={samples}
						textClass={styles.text}
					/>
				))}
			</div>
		</div>
	);
};

export default CodeExamples;
