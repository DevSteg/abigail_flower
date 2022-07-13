import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { register, reset } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import "./register.scss";

const Register = () => {
	const [registerData, setRegisterData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = registerData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

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

		dispatch(reset());
	}, [user, isError, isSuccess, message]);

	const onChange = (e) => {
		setRegisterData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (password2 != password) {
			return toast.error("Passwords do not match");
		}

		const userData = {
			name,
			email,
			password,
		};

		return dispatch(register(userData));
	};

	if (isLoading) {
		return <Spinner animation="border" variant="info" />;
	}
	return (
		<>
			<h1 className="register-title">Sign Up</h1>
			<section className="register-section">
				<Form className="register-form" onSubmit={onSubmit}>
					<Form.Group className="mb-3" controlId="registerName">
						<Form.Label className="register-form-label">Full Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Full Name"
							name="name"
							value={name}
							onChange={onChange}
							required
						/>
						<Form.Text className="text-muted">
							We'll never share your details with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="registerEmail">
						<Form.Label className="register-form-label">
							Email address
						</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Email Address"
							name="email"
							value={email}
							onChange={onChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="registerPassword">
						<Form.Label className="register-form-label">Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							name="password"
							onChange={onChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="confirmPassword">
						<Form.Label className="register-form-label">
							Confirm Password
						</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							value={password2}
							name="password2"
							onChange={onChange}
							required
						/>
					</Form.Group>
					<Button variant="primary" type="submit" className="register-form-btn">
						Submit
					</Button>
				</Form>
			</section>
		</>
	);
};

export default Register;
