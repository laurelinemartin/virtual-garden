import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './component/App';

const knex = require('knex');
const express = require('express');

ReactDOM.render(
      <App />,
  document.getElementById("root")
);












/*
console.log("it's okay.");

const title = "le jardin virtuel";
const desc = "Planter des petites graines dans un espace virtuel et les voir pousser !";
var stockCourge = 8
var stockTomate = 12
var stockIris = 6

const Header = () => (<h1> { title.toUpperCase() } </h1>); ///
const Description = () => (<p>{ desc }</p>); /// 
const Graine = () => (	<div><p>Ici sont stockées les graines.</p> 
							<ul>
								<li>Courge : { stockCourge } en stock;</li>
								<li>Tomate : { stockTomate } en stock;</li>
								<li>Iris : { stockIris }en stock.</li>
							</ul>
							<p>Total des graines dispo : { stockIris + stockCourge + stockTomate }</p>
						</div>);///

const Banner = () => (<React.Fragment>
						<Header />
						<Description />
					</React.Fragment> ) ///
const Encaps = () => (	<React.Fragment>
							<Banner />
							<Graine />
						</ React.Fragment>) ///

ReactDOM.render(<Encaps />, document.getElementById("header"));
*/

/* ReactDOM.render(<div>Hello moi </div>, document.getElementById("react"))

const Composant = () => (<h2> C est le premier test mais pas vraiment non plus </h2> );
function Component(){
	return (<div> Coucou moi </div>)
}

///Dis à React d'attacher le composant <HelloWorld> à la balise HTML DIV nommée 'root'
ReactDOM.render(<Composant/>, document.getElementById("react"))
*/
