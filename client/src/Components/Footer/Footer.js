import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import styles from "./Footer.module.scss";

const Footer = () => {
	mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
	const mapContainer = useRef(null);
	const map = useRef(null);
	// 51.43868922526807, -3.1737732513490617
	const [lng] = useState(-3.1737732513490617);
	const [lat] = useState(51.43868922526807);
	const [zoom] = useState(12);
	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/luca2849/ck963lzou5e8n1ip9o6akrymt",
			center: [lng, lat],
			zoom: zoom,
		});
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
				<div ref={mapContainer} style={{ height: "100%" }} />
			</div>
			<div className={styles.footerBottom}>
				<p>Copyright &copy; Luca Passariello 2022</p>
			</div>
		</div>
	);
};

export default Footer;
