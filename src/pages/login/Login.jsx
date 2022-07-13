import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../redux/features/auth/authSlice";
import "./_login.scss";

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = loginData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isError, isLoading, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess) {
			toast.success(message);
			navigate("/");
		}

		dispatch(reset);
	}, [isError, isSuccess]);

	const onChange = (e) => {
		setLoginData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spinner animation="border" variant="info" />;
	}

	return (
		<>
			<h1 className="login-title">Login</h1>
			<section className="login-section">
				<Form className="login-form" onSubmit={onSubmit}>
					<Form.Group className="mb-3" controlId="LoginEmail">
						<Form.Label className="login-form-label">Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Email Address"
							name="email"
							value={email}
							onChange={onChange}
							required
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="LoginPassword">
						<Form.Label className="login-form-label">Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							name="password"
							onChange={onChange}
							required
						/>
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
