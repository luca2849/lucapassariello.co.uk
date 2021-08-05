import React, { useRef, createRef } from "react";
import samples from "./example_code";
import components from "./components.json";
import styles from "./CodeExamples.module.scss";
import Component from "../../Components/Component/Component";
import Toc from "../../Components/TableOfContents/TableOfContents";

const CodeExamples = () => {
	const tocRefs = [];
	const setRef = (ref) => {
		tocRefs.push(ref);
	};

	const scrollToRef = (ref) => {
		ref.scrollIntoView();
	};

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
			<div className={styles.toc}>
				<Toc>
					<Toc.List>
						{components.map((component, index) => (
							<>
								<Toc.Item
									onClick={() => scrollToRef(tocRefs[index])}
								>
									{component.name[0].toUpperCase() +
										component.name.substring(1)}
								</Toc.Item>
							</>
						))}
					</Toc.List>
				</Toc>
			</div>
			<div className={styles.components}>
				{components.map((component, index) => (
					<div ref={setRef}>
						<Component
							component={component}
							samples={samples}
							textClass={styles.text}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CodeExamples;
