const express = require("express");
const {
	getUser,
	updateUser,
	registerUser,
	loginUser,
	deleteUser,
} = require("../controllers/userController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getUser);

router.post("/", registerUser);

router.post("/login", loginUser);

router.route("/:id").put(protect, updateUser).delete(protect, deleteUser);

module.exports = router;
