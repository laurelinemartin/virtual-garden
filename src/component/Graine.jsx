import * as React from "react";
import "../styles/Graine.css"

const plantes = [["Tomate", 8],
["Courge", 12],
["Iris", 6], 
["Salade", 24],
["Framboise", 3],
["Rose", 13]]


const Graine = () => (	<div className="graine"> <h2>Ici sont stockées les graines.</h2> 
							<ul>
								{plantes.map((plante, index)=>(
									<li key={`${plante}-${index}`}>
									{plante[0]} : {plante[1]} en stock</li>
									))}
							</ul>
						</div>
						);

export default Graine;