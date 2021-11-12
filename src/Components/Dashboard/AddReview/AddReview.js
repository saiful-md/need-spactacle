import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth/useAuth';
import DashboardNavigaion from '../DashboardNavigation/DashboardNavigaion';

const AddReview = () => {
	const { user } = useAuth();
	const initialInfo = { name: user.displayName, email: user.email, description: '' };
	const [
		reviewData,
		setReviewData
	] = useState(initialInfo);

	const [
		isLoading,
		setIsLoading
	] = useState(false);

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newData = { ...reviewData };
		newData[field] = value;
		setReviewData(newData);
	};
	const handleReview = (e) => {
		setIsLoading(true);
		fetch('http://localhost:5000/reviews', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(reviewData)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					alert('review added successfully!');
					setIsLoading(false);
				}
			});

		e.preventDefault();
	};
	return (
		<div>
			<DashboardNavigaion />
			<div className="my-4">
				<h2 style={{ textAlign: 'center' }}>Add a review</h2>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					{isLoading ? (
						<div className="d-flex justify-content-center">
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : (
						<div>
							<form onSubmit={handleReview}>
								<input
									style={{ marginRight: '10px', padding: '2px' }}
									type="text"
									name="name"
									onBlur={handleOnBlur}
									value={user.displayName}
								/>
								<input
									style={{ padding: '2px' }}
									type="email"
									name="email"
									onBlur={handleOnBlur}
									value={user.email}
								/>{' '}
								<br />
								<textarea
									style={{ width: '100%', marginTop: '20px', height: '150px' }}
									name="description"
									onBlur={handleOnBlur}
									placeholder="Add review..."
								/>
								<Button type="submit" variant="primary">
									Submit
								</Button>
							</form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AddReview;
