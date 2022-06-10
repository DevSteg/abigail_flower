import React from "react";
import ContactForm from "./ContactForm";
import "./_contact.scss";

const Contact = () => {
	return (
		<>
			<h1 className="contact-title">Contact</h1>
			<section className="contact-section">
				<ContactForm />
			</section>
		</>
	);
};

export default Contact;
