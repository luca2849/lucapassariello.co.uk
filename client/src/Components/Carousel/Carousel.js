import React, {useState} from 'react'

import styles from "./Carousel.module.scss";

import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

const Carousel = ({children, width}) => {
    // Width Prop Checks
    if(width === undefined) width = 1000;
    // Allow percentage values
    if(typeof width === "string") {
        if(width.split("%").length > 1) {
            console.log("Percent Used")
            width = window.innerWidth * width.split("%")[0] / 100;
            console.log(width)
        }
    }
    const [currentPage, setCurrentPage] = useState(1); // Stores current page
    const [offset, setOffset] = useState(0); // Stores last offset
    const [style, setStyle] = useState(null); // Stores style obj for element
    const handleChange = (page) => {
        if(page > children.length || page < 1) return;
        // calc difference
        const diff = page - currentPage;
        setCurrentPage(page);
        const newOffset = offset + (diff * -width);
        setStyle({transition: `all 300ms cubic-bezier(0, 0, 0.28, 1) 0s`, transform: "matrix(1, 0, 0, 1, " + newOffset + ", 0)"})
        setOffset(newOffset);
    }
    return (
        <div className={styles.outer} style={{maxWidth: width}}>
            <div className={`${styles.arrow} ${styles.leftArrow}`} onClick={() => handleChange(currentPage - 1)}>
                <BsChevronLeft />
            </div>
            <div className={styles.carousel} style={style}>
                    {children}
                </div>
            <div className={`${styles.arrow} ${styles.rightArrow}`} onClick={() => handleChange(currentPage + 1)}>
                <BsChevronRight />
            </div>
            <div className={styles.nav}>
                {children.map((_, i) => <div onClick={() => handleChange(i + 1)} className={`${styles.button} ${i === currentPage - 1 ? styles.current : styles.common}`}></div>)}
            </div>
        </div>
    )
}

const Item = ({children}) => {
    return <div className={styles.carouselItem}>{children}</div>
}

Carousel.Item = Item;

export default Carousel
