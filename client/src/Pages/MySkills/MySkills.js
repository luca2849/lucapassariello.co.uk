import React from 'react'

import styles from "./MySkills.module.scss";

import Carousel from "../../Components/Carousel/Carousel";

const MySkills = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item><div><p>Page 1</p></div></Carousel.Item>
                <Carousel.Item><div><p>Page 2</p></div></Carousel.Item>
                <Carousel.Item><div><p>Page 3</p></div></Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MySkills
