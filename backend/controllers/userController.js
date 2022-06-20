const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

// Desc: Get user data
// Route: GET /api/user/me
// Access: Private
const getUser = asyncHandler(async (req, res) => {
	const { _id, name, email } = await User.findById(req.user.id);

	res.status(200).json({
		id: _id,
		name,
		email,
	});
});

// Desc: Register New User
// Route: POST /api/user
// Access: Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	// Check if fields in body are complete
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please complete all fields");
	}

	// Check if user already exists
	const checkUser = await User.findOne({ email });
	if (checkUser) {
		res.status(400);
		throw new Error("User already exists");
	}

	// Hash Password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create User
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			password: user.password,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid User data");
	}
});

// Desc: Authenticate a User
// Route: GET /api/user/login
// Access: Public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// Check is email exists
	const user = await User.findOne({ email });

	// Check if email and password match
	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			password: user.password,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid Email or Password");
	}
});

// Desc: Update user data
// Route: PUT /api/user/:id
// Access: Private
const updateUser = asyncHandler(async (req, res) => {
	// Check user if user is logged in and matches
	if (!req.user || req.params.id !== req.user.id) {
		res.status(401);
		throw new Error("Not Authorized");
	}

	const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
		new: true,
	});
	res.status(200).json(updatedUser);
});

// Desc: Delete user data
// Route: DELETE /api/user/:id
// Access: Private
const deleteUser = asyncHandler(async (req, res) => {
	// Check user if user is logged in and matches
	if (!req.user || req.params.id !== req.user.id) {
		res.status(401);
		throw new Error("Not Authorized");
	}

	const deleteUser = await User.findByIdAndDelete(req.user.id);
	res.status(200).json(deleteUser);
});

module.exports = {
	getUser,
	registerUser,
	updateUser,
	loginUser,
	deleteUser,
};
