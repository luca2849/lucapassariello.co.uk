import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./Contact.module.scss";

const Contact = () => {
	const [formState, handleSubmit] = useForm("meqvrwjn");

	if (formState.succeeded) {
		return (
			<div className={styles.completed}>
				<motion.div
					cx={500}
					animate={{
						x: [0, 100, 400, 700],
						y: [0, 0, -400],
					}}
					transition={{
						type: "spring",
						stiffness: 100,
						duration: 3,
					}}
				>
					<FaTelegramPlane />
				</motion.div>
				<h3>Your message has been sent.</h3>
				<h4>Thanks for getting in touch.</h4>
				<p>
					From here, you can either{" "}
					<Link to={`/`}>go back to the homepage</Link>, or visit some
					of my other pages, such as{" "}
					<Link to={`/portfolio`}>my work</Link>, or{" "}
					<Link to={`/docs`}>my React component documentation</Link>
				</p>
			</div>
		);
	}

	return (
		<div>
			<h2>Contact Me!</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.formGroup}>
					<input
						placeholder="First Name..."
						name="fname"
						type="text"
						required="required"
					/>
					<input
						placeholder="Last Name..."
						name="lname"
						type="text"
						required="required"
					/>
				</div>
				<div className={styles.formGroup}>
					<input
						placeholder="Phone Number... (+44)"
						name="phone_num"
						type="text"
						pattern="[0-9]{11}"
						required="required"
					/>
				</div>
				<div className={styles.formGroup}>
					<input
						placeholder="E-Mail..."
						name="email"
						type="email"
						required="required"
					/>
				</div>
				<div className={styles.formGroup}>
					<textarea
						className={styles.textarea}
						rows="10"
						cols="40"
						type="text"
						name="message"
						placeholder="Message..."
						required="required"
					></textarea>
				</div>
				<div className={styles.formGroup}>
					<input type="submit" disabled={formState.submitting} />
				</div>
			</form>
		</div>
	);
};

export default Contact;
