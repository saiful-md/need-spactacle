import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const DashboardNavigaion = () => {
	const navCustom = {
		backgroundColor: '#F9D484'
	};
	const { user, logOut, admin } = useAuth();
	return (
		<Navbar sticky="top" expand="lg" style={navCustom} variant="light">
			<Container>
				<Navbar.Brand href="#home">
					<h4 style={{ fontStyle: 'italic', color: '#BF0183' }}>NEED SPACTACLE</h4>{' '}
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav.Link
						as={NavLink}
						style={{ color: 'black', fontWeight: '500' }}
						className="text-decoration-none mx-2 "
						activeStyle={{
							fontWeight: 'bold',
							color: '#059956'
						}}
						to="/home"
					>
						HOME
					</Nav.Link>
					{!admin && (
						<Nav.Link
							as={NavLink}
							style={{ color: 'black', fontWeight: '500' }}
							className="text-decoration-none mx-2 "
							activeStyle={{
								fontWeight: 'bold',
								color: 'cyan'
							}}
							to="/pay"
						>
							PAY
						</Nav.Link>
					)}
					{!admin && (
						<Nav.Link
							as={NavLink}
							style={{ color: 'black', fontWeight: '500' }}
							className="text-decoration-none mx-2 "
							activeStyle={{
								fontWeight: 'bold',
								color: '#027FFC'
							}}
							to="/myOrders"
						>
							My Orders
						</Nav.Link>
					)}

					{admin && (
						<Nav.Link
							as={NavLink}
							style={{ color: 'black', fontWeight: '500' }}
							className="text-decoration-none mx-2 "
							activeStyle={{
								fontWeight: 'bold',
								color: '#027FFC'
							}}
							to="/makeAdmin"
						>
							Make Admin
						</Nav.Link>
					)}
					{admin && (
						<Nav.Link
							as={NavLink}
							style={{ color: 'black', fontWeight: '500' }}
							className="text-decoration-none mx-2 "
							activeStyle={{
								fontWeight: 'bold',
								color: '#027FFC'
							}}
							to="/manageAllOrders"
						>
							Manage All Orders
						</Nav.Link>
					)}
					{admin && (
						<Nav.Link
							as={NavLink}
							style={{ color: 'black', fontWeight: '500' }}
							className="text-decoration-none mx-2 "
							activeStyle={{
								fontWeight: 'bold',
								color: '#027FFC'
							}}
							to="/manageProducts"
						>
							Manage Products
						</Nav.Link>
					)}
					{admin && (
						<Nav.Link
							as={NavLink}
							style={{ color: 'black', fontWeight: '500' }}
							className="text-decoration-none mx-2 "
							activeStyle={{
								fontWeight: 'bold',
								color: '#027FFC'
							}}
							to="/addProduct"
						>
							Add Product
						</Nav.Link>
					)}

					{!admin && (
						<Nav.Link
							as={NavLink}
							style={{ color: 'black', fontWeight: '500' }}
							className="text-decoration-none mx-2 "
							activeStyle={{
								fontWeight: 'bold',
								color: '#027FFC'
							}}
							to="/addReview"
						>
							Add review
						</Nav.Link>
					)}

					{user.email && (
						<Button onClick={logOut} type="submit" className="text-center" variant="info">
							Logout
						</Button>
					)}
					<Navbar.Text style={{ display: 'flex', alignItems: 'center' }}>
						<h6 style={{ fontWeight: '500', color: 'black', marginRight: '5px' }}>{user.displayName}</h6>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default DashboardNavigaion;
