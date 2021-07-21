import React from "react";

import styles from "./MySkills.module.scss";

import Carousel from "../../Components/Carousel/Carousel";
import Skill from "../../Components/Skill/Skill";

const MySkills = () => {
	return (
		<div>
			<Carousel width={"60%"}>
				<Carousel.Item>
					<h3>Front-End</h3>
					<div className={styles.frontEnd}>
						<Skill skill={"html5"} />
						<Skill skill={"css3"} />
						<Skill skill={"javascript"} />
						<Skill skill={"bootstrap"} />
						<Skill skill={"react"} />
						<Skill skill={"next-dot-js"} />
						<Skill skill={"pug"} />
						<Skill skill={"jinja"} />
						<Skill skill={"twig"} />
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<h3>Back-End</h3>
					<div className={styles.frontEnd}>
						<Skill skill={"node-dot-js"} />
						<Skill skill={"python"} />
						<Skill skill={"php"} />
						<Skill skill={"flask"} />
						<Skill skill={"slim"} />
						<Skill skill={"mongo"} />
						<Skill skill={"mysql"} />
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<h3>Networking</h3>
					<div className={styles.frontEnd}>
						<Skill skill={"apache"} />
						<Skill skill={"nginx"} />
						<Skill skill={"filezilla"} />
						<Skill skill={"sphere"} />
						<Skill skill={"linux"} />
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<h3>Other Skills</h3>
					<div className={styles.frontEnd}>
						<Skill skill={"socketio"} />
						<Skill skill={"dot-net"} />
						<Skill skill={"cplusplus"} />
						<Skill skill={"git"} />
						<Skill skill={"java"} />
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default MySkills;
