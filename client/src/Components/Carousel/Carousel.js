import React, { useState, useEffect, useCallback } from "react";

import styles from "./Carousel.module.scss";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = ({ children, width, duration }) => {
	const [currentPage, setCurrentPage] = useState(1); // Stores current page
	const [offset, setOffset] = useState(0); // Stores last offset
	const [style, setStyle] = useState(null); // Stores style obj for element
	const [actualWidth, setActualWidth] = useState(1000);
	// Set default duration
	if (!duration) duration = 300;
	// Set default width
	if (!width) width = 500;
	// Function for getting current width (in pixels)
	const getWidth = useCallback(() => {
		let wid = width;
		if (typeof width === "string") {
			if (width.split("%").length > 1) {
				// Calculate percentage widths
				wid = (window.innerWidth * width.split("%")[0]) / 100;
			} else {
				// If number passed as string
				const reg = /^\d+$/;
				if (reg.test(width)) {
					wid = parseInt(width, 10);
				}
			}
		}
		return wid;
	}, [width]);
	// Function for handling a change in page
	const handleChange = (page) => {
		if (page > children.length || page < 1) return;
		// calc difference
		const diff = page - currentPage;
		setCurrentPage(page);
		const newOffset = offset + diff * -actualWidth;
		setStyle({
			transition: `all ${duration}ms cubic-bezier(0, 0, 0.28, 1) 0s`,
			transform: "matrix(1, 0, 0, 1, " + newOffset + ", 0)",
		});
		setOffset(newOffset);
	};
	useEffect(() => {
		const wid = getWidth();
		setActualWidth(wid);
	}, [getWidth]);
	// Event listener for window resize
	window.addEventListener("resize", () => {
		clearTimeout(window.resizeFinished);
		window.resizeFinished = setTimeout(() => {
			// Get new width
			const wid = getWidth();
			setActualWidth(wid);
			// Recalculate Offset
			const newOffset = -wid * (currentPage - 1);
			setStyle({
				transition: `all ${duration}ms cubic-bezier(0, 0, 0.28, 1) 0s`,
				transform: `matrix(1, 0, 0, 1, ${newOffset}, 0)`,
			});
			setOffset(newOffset);
		}, 100);
	});
	return (
		<div className={styles.outer} style={{ width: actualWidth }}>
			<div
				className={`${styles.arrow} ${styles.leftArrow}`}
				onClick={() => handleChange(currentPage - 1)}
			>
				<BsChevronLeft />
			</div>
			<div className={styles.carousel} style={style}>
				{children}
			</div>
			<div
				className={`${styles.arrow} ${styles.rightArrow}`}
				onClick={() => handleChange(currentPage + 1)}
			>
				<BsChevronRight />
			</div>
			<div className={styles.nav}>
				{children.map((_, i) => (
					<div
						key={i}
						onClick={() => handleChange(i + 1)}
						className={`${styles.button} ${
							i === currentPage - 1
								? styles.current
								: styles.common
						}`}
					></div>
				))}
			</div>
		</div>
	);
};

const Item = ({ children }) => {
	return <div className={styles.carouselItem}>{children}</div>;
};

Carousel.Item = Item;

export default Carousel;
