import * as React from 'react';
import "../styles/Plante.css";

var plantation = ["Tomate", "Rose", "Iris", "Salade", "Courge"]

const Plante = () => (
	<div className='plante'>
		<table>{plantation.map((p=>(
				<td> {p} </td> )))}
		</table>
	</div>);

export default Plante;