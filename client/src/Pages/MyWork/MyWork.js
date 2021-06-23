import React from 'react'

import styles from "./MyWork.module.scss";

import Project from "../../Components/Project/Project";

import projects from "./projects.json";

const MyWork = () => {
    return (
        <div className={styles.container}>
            <h2>My Work</h2>
            <div className={styles.project}>
                {projects.map((proj, i) => <Project project={proj} index={i} />)}
            </div>
        </div>
    )
}

export default MyWork
