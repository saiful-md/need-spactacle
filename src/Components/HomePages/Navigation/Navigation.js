import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
	const navCustom = {
		backgroundColor: '#26AB88'
	};
	return (
		<Navbar expand="lg" style={navCustom} variant="light">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav.Link
						as={NavLink}
						style={{ color: 'black', fontWeight: '500' }}
						className="text-decoration-none mx-2 "
						activeStyle={{
							fontWeight: 'bold',
							color: 'cyan'
						}}
						to="/home"
					>
						HOME
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						style={{ color: 'black', fontWeight: '500' }}
						className="text-decoration-none mx-2 "
						activeStyle={{
							fontWeight: 'bold',
							color: 'cyan'
						}}
						to="/exlore"
					>
						EXPLORE ALL PRODUCTS
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						style={{ color: 'black', fontWeight: '500' }}
						className="text-decoration-none mx-2 "
						activeStyle={{
							fontWeight: 'bold',
							color: 'cyan'
						}}
						to="/dashboard"
					>
						DASHBOARD
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
