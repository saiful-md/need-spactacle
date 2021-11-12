import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
	const [
		products,
		setProducts
	] = useState([]);
	useEffect(() => {
		fetch('https://desolate-depths-51777.herokuapp.com/products')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div>
			<h1 className="my-5" style={{ textAlign: 'center' }}>
				All Products
			</h1>
			<Container>
				{products.length === 0 ? (
					<div className="d-flex justify-content-center">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				) : (
					<div className="row row-cols-1 row-cols-md-3 g-4">
						{products.slice(10, 16).map((product) => (
							<div className="col">
								<div className="card h-100">
									<div className="p-4">
										<img
											style={{ width: '100%', height: '140px' }}
											src={product.image}
											class="card-img-top"
											alt="photos"
										/>
									</div>
									<div style={{ backgroundColor: 'rgba(0,0,73,0.09)' }} className="card-body">
										<h5 style={{ fontWeight: '700' }} className="card-title">
											{product.name}
										</h5>
										<p style={{ fontSize: '14px', fontWeight: '500' }} className="card-text">
											{product.description.slice(0, 40)}
										</p>
										<h6 className="card-text"> $ {product.price}</h6>
									</div>
									<div className="card-footer">
										<Link to={`/buy/${product._id}`}>
											<Button className="w-100" variant="outline-success">
												Buy
											</Button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</Container>
		</div>
	);
};

export default Products;
