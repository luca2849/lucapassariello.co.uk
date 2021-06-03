import React from "react";

import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.container}>
			<section className={styles.section}>
				<div className={styles.inner}>
					<h1>Full Stack Dev, Designer, & Engineer</h1>
					<h2>
						I create responsive, usable, and practical web
						applications.
					</h2>
					<div className={styles.avatar}>
						<img src="/img/avatar.svg" />
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.clipped}`}>
				<div className={styles.inner}>
					<h3>A Bit About Me</h3>
					<br />
					<div className={styles.textblock}>
						<p>
							Hi, I'm Luca, I'm currently a masters student in
							Advanced Computer Science at Cardiff University,
							graduating in the summer of 2022. I completed my
							bachelors in Computer Science in 2021, graduating
							with first class honours.
						</p>
						<p>
							Web development has always been one of my favorite
							areas of computer science, and this portfolio aims
							to show some of my work in this field.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.skills}>
					<div className={styles.skill}></div>
					<div className={styles.skill}></div>
					<div className={styles.skill}></div>
				</div>
			</section>
		</div>
	);
};

export default Home;
