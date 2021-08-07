import React from "react";
import { Link } from "react-router-dom";
import { CopyBlock, nord, a11yLight } from "react-code-blocks";

import { FiCode } from "react-icons/fi";

import styles from "./Component.module.scss";

const Component = ({ sample, textClass }) => {
	return (
		<div className={styles.component}>
			<h3 className={styles.alth3}>
				{`${sample.name[0].toUpperCase()}${sample.name.substring(1)}`}{" "}
				{/* -{" "}
				<Link to={{ pathname: component.code }} target="_blank">
					Code
				</Link> */}
				<span>{sample.created}</span>
			</h3>
			<div className={`${textClass} ${styles.text}`}>
				{sample.desc.split("\n").map((paragraph, i) => (
					<p key={`${paragraph.substring(10)}${i}`}>{paragraph}</p>
				))}
			</div>
			<div className={styles.codeButton}>
				<Link to={{ pathname: sample.code }} target="_blank">
					<FiCode />
				</Link>
			</div>
			<h4>Usage</h4>
			<hr />
			{sample.examples.map((ex, index) => (
				<div key={`${ex.name}${index}`}>
					<h4>{ex.name}</h4>
					<p style={{ marginBottom: "1rem" }}>{ex.desc}</p>
					<CopyBlock
						theme={
							localStorage.getItem("theme") === "light"
								? nord
								: a11yLight
						}
						language="jsx"
						text={ex.string}
						showLineNumbers={true}
					/>
					<div className={styles.example}>{ex.component}</div>
				</div>
			))}

			<h4>Props</h4>
			<hr />
			<table className={styles.propTable}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Short Description</th>
						<th>Data Type</th>
						<th>Possible Values</th>
						<th>Optional?</th>
						<th>Default Value</th>
					</tr>
				</thead>
				<tbody>
					{sample.props.map((prop, i) => (
						<tr key={`${prop.name}${i}`}>
							<td>{prop.name}</td>
							<td>{prop.desc}</td>
							<td>{prop.type}</td>
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
				{sample.how.split("\n").map((paragraph, i) => (
					<p key={`${paragraph.substring(10)}${i}`}>{paragraph}</p>
				))}
			</div>
		</div>
	);
};

export default Component;
