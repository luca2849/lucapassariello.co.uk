import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer = () => {
	const [viewport, setViewport] = useState({
		width: 400,
		height: 400,
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8
	});
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
								pathname: `https://www.linkedin.com/in/luca-passariello-ab2913189/`
							}}
							target="_blank"
						>
							LinkedIn
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.map}>
				<ReactMapGL
					{...viewport}
					width="100%"
					height="100%"
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					onViewportChange={viewport => setViewport(viewport)}
				/>
			</div>
			<div className={styles.footerBottom}>
				<p>Copyright &copy; Luca Passariello 2021</p>
			</div>
		</div>
	);
};

export default Footer;
