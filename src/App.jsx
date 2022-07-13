import NavbarTop from "./components/navbar/NavbarTop";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Policies from "./pages/policies/Policies";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/profile";
import "./styles/_app.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<NavbarTop />
			</header>
			<main>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/policies" element={<Policies />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Register />} />
				</Routes>
				<ToastContainer />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
