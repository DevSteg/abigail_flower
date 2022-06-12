import NavbarTop from "./components/navbar/NavbarTop";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Policies from "./pages/policies/Policies";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import "./styles/_app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<NavbarTop />
			</header>
			<main>
				<BrowserRouter>
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/policies" element={<Policies />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
