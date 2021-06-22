import React, { useRef } from "react";
import {useHistory} from "react-router-dom";

import styles from "./Home.module.scss";

import { BiServer, BiNetworkChart } from "react-icons/bi";
import { FaTerminal, FaPencilRuler } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { RiMessage2Line } from "react-icons/ri";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { VscChevronDown } from "react-icons/vsc";


const Home = () => {
	const contentRef = useRef(null);
	const history = useHistory();

	const handleScroll = () => {
		contentRef.current.scrollIntoView();
	};

	const handleClick = (link) => history.push(link);

	const buttons = [
		{
			name: "My Work",
			icon: <FaTerminal />,
			link: "/portfolio"
		},
		{
			name: "My Skills",
			icon: <GiBrain />,
			link: "/skills"
		},
		{
			name: "Contact Me",
			icon: <RiMessage2Line />,
			link: "/contact"
		},
		{
			name: "My Notes",
			icon: <FaPencilRuler />,
			link: "/notes"
		}
	]

	return (
		<div className={styles.container}>
			<section className={`${styles.section} ${styles.first}`}>
				<div className={styles.inner}>
					<h1>Full Stack Dev, Designer, & Engineer</h1>
					<h2>
						I create responsive, usable, and practical web
						applications.
					</h2>
					<div className={styles.avatar}>
						<img src="/img/avatar.svg" />
					</div>
					<div className={styles.down} onClick={() => handleScroll()}>
						<VscChevronDown />
					</div>
				</div>
			</section>
			<section
				className={`${styles.section} ${styles.clipped}`}
				ref={contentRef}
			>
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
					<div className={styles.skill}>
						<div className={styles.skillHeader}>
							<div className={styles.icon}>
								<HiOutlineDesktopComputer />
							</div>
							<h2>Front-End Development</h2>
						</div>
						<div className={styles.heading}>
							<p>Skills</p>
						</div>
						<div className={styles.list}>
							<ul>
								<li>HTML5</li>
								<li>CSS3</li>
								<li>JavaScript</li>
								<li>React</li>
								<li>Pug (NodeJS)</li>
								<li>Jinja (Python)</li>
								<li>Twig (PHP)</li>
							</ul>
						</div>
						<div className={styles.heading}>
							<p>Used Tools</p>
						</div>
						<div className={styles.list}>
							<ul>
								<li>VSCode</li>
								<li>Google Chrome</li>
								<li>Mozilla FireFox</li>
							</ul>
						</div>
					</div>
					<div className={styles.skill}>
						<div className={styles.skillHeader}>
							<div className={styles.icon}>
								<BiServer />
							</div>
							<h2>Back-End Development</h2>
						</div>
						<div className={styles.heading}>
							<p>Skills</p>
						</div>
						<div className={styles.list}>
							<ul>
								<li>NodeJS</li>
								<li>Python</li>
								<li>PHP</li>
								<li>MySQL</li>
								<li>MongoDB</li>
								<li>Neo4J</li>
								<li>Socket-IO / WebSockets</li>
							</ul>
						</div>
						<div className={styles.heading}>
							<p>Used Tools</p>
						</div>
						<div className={styles.list}>
							<ul>
								<li>VSCode</li>
								<li>SQL Workbench</li>
								<li>MongoDB Compass</li>
							</ul>
						</div>
					</div>
					<div className={styles.skill}>
						<div className={styles.skillHeader}>
							<div className={styles.icon}>
								<BiNetworkChart />
							</div>
							<h2>Networking</h2>
						</div>
						<div className={styles.heading}>
							<p>Skills</p>
						</div>
						<div className={styles.list}>
							<ul>
								<li>Apache / Nginx</li>
								<li>Virtual Hosts</li>
								<li>Subdomains</li>
								<li>Network Routing / Traffic</li>
							</ul>
						</div>
						<div className={styles.heading}>
							<p>Used Tools</p>
						</div>
						<div className={styles.list}>
							<ul>
								<li>MobaXterm</li>
								<li>PuTTY</li>
								<li>UniFiOS</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className={`${styles.section}`}>
				<div className={styles.inner}>
					<h3>More Information</h3>
					<br />
					<div className={styles.info}>
						{buttons.map((button, i) => (
								<div className={styles.button} onClick={() => handleClick(button.link)}>
									<div className={styles.icon}>
										{button.icon}
									</div>
									<p>{button.name}</p>
								</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
