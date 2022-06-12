import React from "react";
import afLogo from "/src/assets/images/abigail_flower.svg";
import cloud from "/src/assets/images/cloud.svg";
import cloudsBorder from "/src/assets/images/clouds_top_border.svg";
import bgImg from "/src/assets/images/bg_img_top.webp";
import "./_home.scss";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div
				className="home-body"
				style={{
					background: `url('${bgImg}') no-repeat center fixed`,
				}}
			>
				<div className="home-header">
					<div className="logo-div">
						<img src={afLogo} alt="Abigail Flower Logo" className="af-logo" />
					</div>
				</div>
				<section className="btn-section">
					<div className="cloud-btn-div">
						<Link to="/products/ceramics" className="cloud-btn">
							<h2 className="cloud-btn-title">Ceramics</h2>
							<img src={cloud} alt="Cloud" className="cloud-btn-img" />
						</Link>
						<Link to="/products/originals" className="cloud-btn">
							<h2 className="cloud-btn-title">Originals</h2>
							<img src={cloud} alt="Cloud" className="cloud-btn-img" />
						</Link>
					</div>
				</section>
			</div>
			<section>
				<div className="cloud-border-div">
					<img src={cloudsBorder} alt="Cloud Top Border" />
				</div>
				<div className="insta-div"></div>
				<div className="cloud-border-div">
					<img src={cloudsBorder} alt="Cloud Top Border" />
				</div>
			</section>
		</>
	);
};

export default Home;
