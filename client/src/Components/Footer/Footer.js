import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer = () => {
	const [viewport, setViewport] = useState({
		width: 400,
		height: 400,
		latitude: 51.43865023294366,
		longitude: -3.1738439421791376,
		zoom: 12,
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
						<Link to={`/docs`}>Component Docs</Link>
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
			<h2>Currently Based in Penarth, Wales</h2>
			<div className={styles.map}>
				<ReactMapGL
					{...viewport}
					width="100%"
					height="100%"
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					onViewportChange={(viewport) => setViewport(viewport)}
					mapStyle="mapbox://styles/luca2849/ck963lzou5e8n1ip9o6akrymt"
				>
					<Marker
						longitude={-3.1738439421791376}
						latitude={51.43865023294366}
						offsetLeft={-10}
						offsetTop={-15}
					>
						<div className={styles.marker}></div>
					</Marker>
				</ReactMapGL>
			</div>
			<div className={styles.footerBottom}>
				<p>Copyright &copy; Luca Passariello 2021</p>
			</div>
		</div>
	);
};

export default Footer;
