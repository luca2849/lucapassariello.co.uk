import React, { useState } from "react";

import styles from "./Contact.module.scss";

const Contact = () => {
	const [formData, setFormData] = useState({});

	const onSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<h2>Contact Me!</h2>
			<form onSubmit={onSubmit} className={styles.form}>
				<div className={styles.formGroup}>
					<input
						placeholder="First Name..."
						name="fname"
						type="text"
						required="required"
						onChange={onChange}
					/>
					<input
						placeholder="Last Name..."
						name="lname"
						type="text"
						required="required"
						onChange={onChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<input
						placeholder="Phone Number... (+44)"
						name="num"
						type="text"
						pattern="[0-9]{11}"
						required="required"
						onChange={onChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<input
						placeholder="E-Mail..."
						name="email"
						type="email"
						required="required"
						onChange={onChange}
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
						onChange={onChange}
					></textarea>
				</div>
				<div className={styles.formGroup}>
					<input type="submit" />
				</div>
			</form>
		</div>
	);
};

export default Contact;
