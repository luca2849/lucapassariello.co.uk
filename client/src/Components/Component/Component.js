import React from "react";
import { CopyBlock, nord } from "react-code-blocks";

import styles from "./Component.module.scss";

const Component = ({ component, samples, textClass }) => {
	return (
		<div className={styles.component}>
			<h3
				className={styles.alth3}
			>{`${component.name[0].toUpperCase()}${component.name.substring(
				1
			)}`}</h3>
			<div className={`${textClass} ${styles.text}`}>
				<p>{component.desc}</p>
			</div>
			<h4>Code Example</h4>
			<hr />
			<CopyBlock
				theme={nord}
				language="jsx"
				text={samples[`${component.name}_str`]}
				showLineNumbers={true}
			/>
			<h4>Working Example</h4>
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
					</tr>
				</thead>
				<tbody>
					{component.props.map((prop, i) => (
						<tr key={i}>
							<td>{prop.name}</td>
							<td>{prop.desc}</td>
							<td className={styles.vertList}>
								{prop.possible_values.map((val, i) => (
									<p key={`${val}${i}`}>{val}</p>
								))}
							</td>
							<td>{prop.optional ? "Yes" : "No"}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Component;
