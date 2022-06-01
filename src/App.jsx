import NavbarTop from "./components/NavbarTop";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
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
