import React from "react";
import { Link } from "react-router-dom";
import samples from "./example_code";
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
				<p>
					Everything on this page, and included in the{" "}
					<Link
						to={{
							pathname:
								"https://github.com/luca2849/lucapassariello.co.uk",
						}}
						target="_blank"
					>
						GitHub repository for this website
					</Link>{" "}
					comes under the MIT license, allowing for unlimited rights
					to use, copy, modify, merge, publish, distribute,
					sublicense, and/or sell copies of the software, and to
					permit persons to whom the software is furnished to do so.
					Full license is available{" "}
					<Link
						to={{
							pathname:
								"https://github.com/luca2849/lucapassariello.co.uk/blob/main/LICENSE",
						}}
						target="_blank"
					>
						here
					</Link>
					.
				</p>
			</div>
			<div className={styles.toc}>
				<Toc>
					<Toc.List>
						{samples.map((sample, index) => (
							<div key={index}>
								<Toc.Item
									onClick={() => scrollToRef(tocRefs[index])}
								>
									{sample.name[0].toUpperCase() +
										sample.name.substring(1).toLowerCase()}
								</Toc.Item>
							</div>
						))}
					</Toc.List>
				</Toc>
			</div>
			<div className={styles.components}>
				{samples.map((sample, index) => (
					<div
						ref={setRef}
						className={styles.componentContainer}
						key={index}
					>
						<Component sample={sample} textClass={styles.text} />
					</div>
				))}
			</div>
		</div>
	);
};

export default CodeExamples;
