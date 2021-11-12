import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth/useAuth';
import DashboardNavigaion from '../DashboardNavigation/DashboardNavigaion';

const MyOrders = () => {
	const { user } = useAuth();
	const [
		products,
		setProducts
	] = useState([]);

	useEffect(
		() => {
			fetch(`https://desolate-depths-51777.herokuapp.com/user?email=${user.email}`)
				.then((res) => res.json())
				.then((data) => {
					setProducts(data);
				});
		},
		[
			user.email
		]
	);

	const handleDelete = (id) => {
		const confirmation = window.confirm('Are you sure to delete?');
		if (confirmation) {
			fetch(`https://desolate-depths-51777.herokuapp.com/orders/${id}`, {
				method: 'DELETE'
			})
				.then((res) => res.json())
				.then((data) => {
					alert('deleted parmanently.');
					const remainingProducts = products.filter((product) => product._id !== id);
					setProducts(remainingProducts);
				});
		}
	};
	return (
		<div>
			<DashboardNavigaion />
			<Container>
				<h3 style={{ textAlign: 'center', marginBottom: '30px', marginTop: '30px' }}>Your Orders</h3>
				{products.length === 0 ? (
					<div className="d-flex justify-content-center">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				) : (
					<Table responsive striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Quantity</th>
								<th>Address</th>
								<th>Delete</th>
							</tr>
						</thead>

						<tbody>
							{products.map((product) => (
								<tr>
									<td>1</td>
									<td>{product.name}</td>
									<td>{product.email}</td>
									<td>{product.phone}</td>
									<td>{product.quentity}</td>
									<td>{product.address}</td>
									<td>
										<Button onClick={() => handleDelete(product._id)} variant="danger">
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Container>
		</div>
	);
};

export default MyOrders;
