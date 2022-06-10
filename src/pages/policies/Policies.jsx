import React from "react";
import Shipping from "./Shipping";
import International from "./International";
import FinalSales from "./FinalSales";
import Disclaimer from "./Disclaimer";
import "./_policies.scss";

const Policies = () => {
	return (
		<>
			<h1 className="policies-title">Policies</h1>
			<section className="policies-section">
				<Shipping />
				<International />
				<FinalSales />
				<Disclaimer />
			</section>
			<h2 className="thank-you">&#10049; Thank You &#10049;</h2>
		</>
	);
};

export default Policies;
