import React from "react";

import styles from "./TableOfContents.module.scss";

const TableOfContents = ({ children }) => {
	return (
		<div className={styles.toc}>
			<h3>Table of Contents</h3>
			{children}
		</div>
	);
};

const List = ({ children }) => {
	return <ul>{children}</ul>;
};

const Item = ({ children, onClick }) => {
	return <li onClick={onClick}>{children}</li>;
};

TableOfContents.List = List;
TableOfContents.Item = Item;

export default TableOfContents;
