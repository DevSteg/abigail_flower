import React from "react";
import { Nav } from "react-bootstrap";
import afLogo from "/src/assets/images/af-logo.svg";
import "./_footer.scss";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer-links-div">
					<Nav.Link href="/contact">
						<h6 className="footer-nav-link">Contact</h6>
					</Nav.Link>
					<Nav.Link href="/policies">
						<h6 className="footer-nav-link">Policies</h6>
					</Nav.Link>
				</div>
				<div className="logo-div">
					<img
						src={afLogo}
						alt="Abigail Flower logo small"
						className="af-logo-small"
					/>
				</div>
			</div>
		</>
	);
};

export default Footer;
