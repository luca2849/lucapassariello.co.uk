import React, {useState} from 'react'

import styles from "./Carousel.module.scss";

const Carousel = ({children}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [style, setStyle] = useState(null);
    const handleChange = (page) => {
        setCurrentPage(page);
        setStyle({transition: `all 300ms cubic-bezier(0, 0, 0.28, 1) 0s`, transform: "matrix(1, 0, 0, 1, " + currentPage * -1000 + ", 0)"})
    }
    console.log(children.length);
    return (
        <div className={styles.outer}>
            <div className={styles.carousel} style={style}>
                {children}
            </div>
            <div className={styles.nav}>
                {children.map((child, i) => <div onClick={() => handleChange(i + 1)} style={{background: `${i === currentPage - 1 ? 'white' : '#b0b0b0'}`}} className={styles.button}></div>)}
            </div>
            <button onClick={() => handleChange(currentPage + 1)}>Next</button>
        </div>
    )
}

const Item = ({children}) => {
    return <div className={styles.carouselItem}>{children}</div>
}

Carousel.Item = Item;

export default Carousel
