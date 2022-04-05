import * as React from "react"
import '../styles/Banner.css'
import logo from '../assets/leaf.png'
console.log("it's okay from Banner.");

const title = "le jardin virtuel";
const desc = "Planter des petites graines dans un espace virtuel et les voir pousser !";

const Header = () => (<div className="banner">
						<img src={logo} alt='Logo - Le jardin virtuel' className='banner-logo'/>
						<h1> { title.toUpperCase() } </h1>
					</div>); ///
const Description = () => (<p>{ desc }</p>); /// 

const Banner = () => (<div>
						<Header />
						<Description />
					</div> ); 

export default Banner;