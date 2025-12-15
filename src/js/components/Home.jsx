import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digito } from "./Digito";

//create your first component
const getDigito = (cuenta, pos) => {
	return Math.floor(cuenta / 10 ** pos) % 10;
};

const posiciones = [5, 4, 3, 2, 1, 0];

const Home = ({ count }) => {
	return (
		<div className="web">		
				<div className="contador d-flex border text-dark justify-content-center text-light">
					{posiciones.map((pos, index) => {
						return <Digito key={index} digito={getDigito(count, pos)} />
					})}
				</div>
			
		</div>
	);
};


export default Home;