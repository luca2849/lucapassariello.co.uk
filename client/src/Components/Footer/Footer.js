import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerTop}>
				<div className={styles.footerGroup}>
					<p>Quick Links</p>
					<div className={styles.links}>
						<Link to={`/`}>Home</Link>
						<Link to={`/contact`}>Contact</Link>
						<Link to={`/portfolio`}>Projects</Link>
						<Link to={`/skills`}>Skills</Link>
					</div>
				</div>
				<div className={styles.footerGroup}>
					<p>My Socials</p>
					<div className={styles.links}>
						<Link
							to={{ pathname: `https://github.com/luca2849` }}
							target="_blank"
						>
							GitHub
						</Link>
						<Link
							to={{
								pathname: `https://www.linkedin.com/in/luca-passariello-ab2913189/`,
							}}
							target="_blank"
						>
							LinkedIn
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.map}>
				<p>Map</p>
			</div>
			<div className={styles.footerBottom}>
				<p>Copyright &copy; Luca Passariello 2021</p>
			</div>
		</div>
	);
};

export default Footer;
