import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const About = () => {
	return (
		<>
			<h1 className="about-title">About Me</h1>
			<div className="about-main">
				<h3 class="about-greeting">&#10049; Hey flower &#10049;</h3>
				<section class="about-para-block">
					<p>
						Thank you for being here! My name is Abigail Flower and I'm an
						artist based in the uk
					</p>
					<p>
						I'm so passionate about creating and putting positivity out into the
						world, and I hope my art uplifts you and brings you happiness!
					</p>
					<p>
						Im so grateful for all of the love and support I receive on this
						journey, each piece is unique and handmade by me with so much love
						and positivity going into my artwork, I hope you love my creations
						and I appreciate you all!
					</p>
					<h3>You make my dreams a reality!</h3>
				</section>
				<section className="social-block">
					<a
						href="https://www.instagram.com/abigailflower_/"
						className="insta-link"
						target="_blank"
					>
						<h2>
							Follow <FontAwesomeIcon icon={faInstagram} /> Me!
						</h2>
					</a>
				</section>
			</div>
		</>
	);
};

export default About;
