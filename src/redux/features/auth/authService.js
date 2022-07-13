import axios from "axios";

const API_URL = "/api/users/";

// register http request
const register = async (userdata) => {
	const response = await axios.post(API_URL, userdata);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}

	return response.data;
};

//  Login http request

const login = async (userdata) => {
	const response = await axios.post(`${API_URL}login`, userdata);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}

	return response.data;
};

// Logout http request

const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
