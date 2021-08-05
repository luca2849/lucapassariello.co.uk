import React from "react";
// import { Link } from "react-router-dom";
import { CopyBlock, nord } from "react-code-blocks";

import styles from "./Component.module.scss";

const Component = ({ component, samples, textClass }) => {
	return (
		<div className={styles.component}>
			<h3 className={styles.alth3}>
				{`${component.name[0].toUpperCase()}${component.name.substring(
					1
				)}`}{" "}
				{/* -{" "}
				<Link to={{ pathname: component.code }} target="_blank">
					Code
				</Link> */}
			</h3>
			<div className={`${textClass} ${styles.text}`}>
				{component.desc.split("\n").map((paragraph, i) => (
					<p>{paragraph}</p>
				))}
			</div>
			<h4>Usage</h4>
			<hr />
			<CopyBlock
				theme={nord}
				language="jsx"
				text={samples[`${component.name}_str`]}
				showLineNumbers={true}
			/>
			<h4>Example</h4>
			<hr />
			<div className={styles.example}>{samples[component.name]}</div>
			<h4>Props</h4>
			<hr />
			<table className={styles.propTable}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Short Description</th>
						<th>Possible Values</th>
						<th>Optional?</th>
						<th>Default Value</th>
					</tr>
				</thead>
				<tbody>
					{component.props.map((prop, i) => (
						<tr key={`${prop.name}${i}`}>
							<td>{prop.name}</td>
							<td>{prop.desc}</td>
							<td className={styles.vertList}>
								{prop.possible_values.map((val, i) => (
									<p key={`${val}${i}`}>{val}</p>
								))}
							</td>
							<td>{prop.optional ? "Yes" : "No"}</td>
							<td>{prop.default}</td>
						</tr>
					))}
				</tbody>
			</table>
			<h4>How it Works</h4>
			<hr />
			<div className={`${textClass} ${styles.text}`}>
				{component.how.split("\n").map((paragraph, i) => (
					<p>{paragraph}</p>
				))}
			</div>
		</div>
	);
};

export default Component;
