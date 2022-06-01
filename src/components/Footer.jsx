import React from "react";
import afLogo from "../assets/images/af-logo.svg";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer-links-div">
					<a className="footer-nav-link">
						<h6>Contact</h6>
					</a>
					<a className="footer-nav-link">
						<h6>Policies</h6>
					</a>
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
