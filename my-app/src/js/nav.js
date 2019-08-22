import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import '../css/nav.css'

class NavBar extends Component{
	render(){
		return(
				<Nav class="topnav" variant="pills" defaultActiveKey="/home">
					<Nav.Item>
			    		    <Nav.Link a href="/home">Home</Nav.Link>
			  		</Nav.Item>
			  		<Nav.Item>
					    <Nav.Link eventKey="resume">Resume</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					    <Nav.Link eventKey="projects">Projects</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					    <Nav.Link eventKey="contact">Contact</Nav.Link>
					</Nav.Item>
				</Nav>
		);
	}
}

export default withRouter(NavBar);

