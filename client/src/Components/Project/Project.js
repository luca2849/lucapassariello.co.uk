import React from "react";
import styles from "./Project.module.scss";

import oxford from "../../util/oxford";

import { AiOutlineDesktop, AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Project = ({ project, index }) => {
	const description = project.desc.split("\n");
	const handleClick = (link) => {
		window.open(link, "_blank");
	};

	const techString = project.tech && oxford(project.tech, "and");

	return (
		<div index={index} className={styles.project}>
			<div className={styles.image}>
				<img alt={project.img} src={`/img/${project.img}`} />
			</div>
			<div className={styles.info}>
				<h3>{project.name}</h3>
				<div className={styles.description}>
					{description.map((desc) => (
						<p>{desc}</p>
					))}
				</div>
				{project.tech && (
					<div className={styles.tech}>
						<p>
							Some key technologies used in this application
							include: <b>{techString}</b>
						</p>
					</div>
				)}
				<div className={styles.links}>
					<div
						className={styles.linkButton}
						onClick={() => handleClick(project.link)}
					>
						<AiOutlineDesktop />
					</div>
					{project.github && (
						<div
							className={styles.linkButton}
							onClick={() => handleClick(project.github)}
						>
							<AiFillGithub />
						</div>
					)}
					{project.external && (
						<div
							className={styles.linkButton}
							onClick={() => handleClick(project.external)}
						>
							<AiOutlineLink />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
