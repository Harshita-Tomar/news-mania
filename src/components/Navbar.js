import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import logo from "../logo.svg";
import { Link } from 'react-router-dom';

export class Navbar extends Component {
	//static propTypes = {

	//}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
					<div className="container-fluid">
						<Link className="navbar-brand text-info" to="/">
							<img src={logo} className="App-logo me-1" alt="logo" />
							{/*{props.title}*/}
							NewsMania
						</Link>
						<button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">

								<li className="nav-item mx-2">
									<Link className="nav-a active text-white text-decoration-none" aria-current="page" to="/" >Home</Link></li>

								{/*<li className="nav-item mx-2 ">
									<Link className="nav-a text-white text-decoration-none" to="/about">About</Link></li>*/}

								<li className="nav-item mx-2">
									<Link className="nav-a text-white text-decoration-none" to="/business">Business</Link></li>

								<li className="nav-item mx-2">
									<Link className="nav-a text-white text-decoration-none" to="/entertainment">Entertainment</Link></li>

								<li className="nav-item mx-2">
									<Link className="nav-a text-white text-decoration-none" to="/health">Health</Link></li>

								<li className="nav-item mx-2">
									<Link className="nav-a text-white text-decoration-none" to="/science">Science</Link></li>

								<li className="nav-item mx-2">
									<Link className="nav-a text-white text-decoration-none" to="/sports">Sports</Link></li>

								<li className="nav-item mx-2">
									<Link className="nav-a text-white text-decoration-none" to="/technology">Technology</Link></li>
							</ul>

							{/*<form className="d-flex" role="search">
								<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-info" type="submit">
									Search
								</button>
							</form>*/}
						</div>
					</div>
				</nav >
			</div >
		)
	}
}

export default Navbar
