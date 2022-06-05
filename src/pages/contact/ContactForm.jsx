import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef();
	const [status, setStatus] = useState("Submit");

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus("Sending...");

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(
				(result) => {
					setStatus("Submit");
					alert("Message Sent, I will be in touch shortly");
				},
				(error) => {
					setStatus("Submit");
					alert("Error sending message, Please try again");
				}
			);
	};
	return (
		<>
			<Form className="contact-form" ref={form} onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formFullName">
					<Form.Label className="form-label">Full Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Full Name"
						name="user_name"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formEmailAddress">
					<Form.Label className="form-label">Email Address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter Email Address"
						name="user_email"
						required
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formFullName">
					<Form.Label className="form-label">Message</Form.Label>
					<Form.Control
						as="textarea"
						placeholder="Enter your message"
						rows={5}
						name="message"
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="form-btn">
					{status}
				</Button>
			</Form>
		</>
	);
};

export default ContactForm;
