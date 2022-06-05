import NavbarTop from "./components/NavbarTop";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Policies from "./pages/policies/Policies";
import Contact from "./pages/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavbarTop />
			</header>
			<main>
				<BrowserRouter>
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/policies" element={<Policies />} />
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
