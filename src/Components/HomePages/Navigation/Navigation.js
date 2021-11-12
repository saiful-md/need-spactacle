import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const Navigation = () => {
	const navCustom = {
		backgroundColor: '#26AB88'
	};
	const { user, logOut } = useAuth();
	return (
		<Navbar sticky="top" expand="lg" style={navCustom} variant="light">
			<Container>
				<Navbar.Brand href="#home">
					<h4 style={{ fontStyle: 'italic', color: 'white' }}>NEED SPACTACLE</h4>{' '}
				</Navbar.Brand>
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
					{user.email ? (
						<Button onClick={logOut} type="submit" className="text-center" variant="info">
							Logout
						</Button>
					) : (
						<Nav.Link
							as={NavLink}
							style={{ color: 'black', fontWeight: '500' }}
							className="text-decoration-none mx-2 "
							activeStyle={{
								fontWeight: 'bold',
								color: 'cyan'
							}}
							to="/login"
						>
							Login
						</Nav.Link>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
