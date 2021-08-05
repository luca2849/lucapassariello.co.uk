import React from "react";

import styles from "./TableOfContents.module.scss";

const TableOfContents = ({ children, bullets, numbers }) => {
	return (
		<div className={styles.toc}>
			<h3>Table of Contents</h3>
			{React.cloneElement(children, {
				bullets: bullets || false,
				numbers: numbers || false,
			})}
		</div>
	);
};

const List = ({ children, bullets, numbers }) => {
	if (bullets) {
		if (numbers) {
			return <ol style={{ listStyleType: "number" }}>{children}</ol>;
		} else {
			return <ul style={{ listStyleType: "disc" }}>{children}</ul>;
		}
	} else {
		return <ul>{children}</ul>;
	}
};

const Item = ({ children, onClick }) => {
	return <li onClick={onClick}>{children}</li>;
};

TableOfContents.List = List;
TableOfContents.Item = Item;

export default TableOfContents;
