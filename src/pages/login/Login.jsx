import React from "react";
import { Form, Button } from "react-bootstrap";
import "./_login.scss";

const Login = () => {
	return (
		<>
			<h1 className="login-title">Login</h1>
			<section className="login-section">
				<Form className="login-form">
					<Form.Group className="mb-3" controlId="LoginEmail">
						<Form.Label className="login-form-label">Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="LoginPassword">
						<Form.Label className="login-form-label">Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="primary" type="submit" className="login-form-btn">
						Submit
					</Button>
				</Form>
			</section>
		</>
	);
};

export default Login;
