import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth/useAuth';
import DashboardNavigaion from '../DashboardNavigation/DashboardNavigaion';

const AddProducts = () => {
	const [
		addProduct,
		setAddProduct
	] = useState({});
	const { isLoading } = useAuth();
	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const previousProduct = { ...addProduct };
		previousProduct[field] = value;

		setAddProduct(previousProduct);
		e.preventDefault();
	};
	const handleAddProduct = (e) => {
		e.preventDefault();
		const product = addProduct;
		const confirmation = window.confirm('Are you sure added a product?');
		if (confirmation) {
			fetch('https://desolate-depths-51777.herokuapp.com/products', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(product)
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.acknowledged) {
						alert('added product successfully!');
					}
				});
		}
	};

	<div className="d-flex justify-content-center">
		<div className="spinner-border" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	</div>;
	return (
		<div>
			<DashboardNavigaion />
			<div className="d-flex justify-content-center align-items-center my-5">
				<div>
					<h1>Add a products.</h1>
					{isLoading ? (
						<div className="d-flex justify-content-center">
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : (
						<form onSubmit={handleAddProduct}>
							<input
								style={{ padding: '10px', marginBottom: '10px' }}
								type="text"
								name="name"
								placeholder="name"
								onBlur={handleOnBlur}
							/>
							<br />

							<input
								style={{ padding: '10px', marginBottom: '10px', marginTop: '4px' }}
								type="text"
								name="price"
								type="number"
								placeholder="price"
								onBlur={handleOnBlur}
							/>
							<br />
							<input
								style={{ padding: '10px', marginBottom: '10px', marginTop: '4px' }}
								type="text"
								name="image"
								placeholder="image url"
								onBlur={handleOnBlur}
							/>
							<br />
							<textarea
								style={{ width: '300px', height: '100px' }}
								type="text"
								name="description"
								placeholder="description"
								onBlur={handleOnBlur}
							/>
							<br />
							<Button className="w-100 " type="submit" variant="outline-success">
								Add
							</Button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default AddProducts;
