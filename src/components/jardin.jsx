import * as React from 'react';
import Plante from "./Plante.jsx"
import '../styles/Jardin.css';

const plantes = ["Tomate",
"Courge",
"Iris", 
"Salade",
"Framboise",
"Rose"]

const Jardin = () => (<div className='jardin'>
						<h2> Ici on a notre joli jardin !</h2>
						<div className='plante'><Plante /></div>
					</div>);


export default Jardin;