import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';
import Navigation from '../Navigation/Navigation';

const Buy = () => {
	const { id } = useParams();
	const [
		buy,
		setBuy
	] = useState([]);
	const { user } = useAuth();
	const initialInfo = {
		productTitle: buy.neme,
		email: user.email,
		name: user.displayName,
		quentity: 0,
		address: '',
		phone: ''
	};
	const [
		add,
		setAdd
	] = useState(initialInfo);

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newAdd = { ...add };
		newAdd[field] = value;
		setAdd(newAdd);
	};

	useEffect(
		() => {
			fetch(`http://localhost:5000/products/${id}`).then((res) => res.json()).then((data) => setBuy(data));
		},
		[
			id
		]
	);
	const handleOnBuy = (e) => {
		fetch('http://localhost:5000/orders', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(add)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					alert('Added a product. Please check your Dashboard.');
				}
			});
		e.preventDefault();
	};

	return (
		<div>
			<Navigation />
			<Container>
				<h3 style={{ textAlign: 'center', marginTop: '30px' }}> Order Products</h3>
				<h6 style={{ textAlign: 'center', color: 'tomato' }}>PRODUCT TITLE: {buy.name}</h6>
				<Row style={{ padding: '30px' }}>
					<Col xs={12} md={6} lg={6} style={{ marginBottom: '20px' }}>
						<form onSubmit={handleOnBuy}>
							<input
								style={{ marginBottom: '20px', padding: '5px' }}
								className="w-75"
								type="text"
								onBlur={handleOnBlur}
								value={buy.name}
								name="productTitle"
								placeholder="Product Title"
							/>
							<br />

							<input
								style={{ marginBottom: '20px', padding: '5px' }}
								className="w-75"
								onBlur={handleOnBlur}
								value={user.email}
								type="email"
								name="email"
								placeholder="email"
							/>
							<br />
							<input
								style={{ marginBottom: '20px', padding: '5px' }}
								className="w-75"
								onBlur={handleOnBlur}
								type="text"
								value={user.displayName}
								name="name"
								placeholder="name"
							/>
							<br />
							<input
								style={{ marginBottom: '20px', padding: '5px' }}
								className="w-75"
								onBlur={handleOnBlur}
								type="number"
								name="quentity"
								placeholder="Quantity"
							/>
							<br />
							<input
								style={{ marginBottom: '20px', padding: '5px' }}
								className="w-75"
								onBlur={handleOnBlur}
								type="text"
								name="address"
								placeholder="address"
							/>
							<br />
							<input
								style={{ marginBottom: '20px', padding: '5px' }}
								className="w-75"
								onBlur={handleOnBlur}
								type="text"
								name="phone"
								placeholder="number"
							/>
							<br />
							<Button type="submit" className="w-75" variant="outline-success">
								Submit
							</Button>
						</form>
					</Col>
					<Col xs={12} md={6} lg={6}>
						<div class="card mb-3">
							<div className="row g-0">
								<div className="col-md-4 p-4">
									<img src={buy.image} className="img-fluid rounded-start" alt="..." />
								</div>
								<div className="col-md-8" style={{ borderLeft: '1px solid rgba(0,0,0,0.1)' }}>
									<div className="card-body">
										<h5 className="card-title">{buy.name}</h5>
										<p className="card-text">{buy.description}</p>
										<h6 className="card-text">Price: $ {buy.price}</h6>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Buy;
// style="max-width: 540px;"
