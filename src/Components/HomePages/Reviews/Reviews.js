import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const Reviews = () => {
	const [
		reviews,
		setReviews
	] = useState([]);
	useEffect(() => {
		fetch('https://desolate-depths-51777.herokuapp.com/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<Container>
			<h2 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}> Reviews </h2>
			{reviews.length === 0 ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<Row style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
					{reviews.map((review) => (
						<div class="card border-info m-2 w-25">
							<div class="card-header">{review.name}</div>
							<div class="card-body">
								<p class="card-text">{review.description}</p>
							</div>
						</div>
					))}
				</Row>
			)}
		</Container>
	);
};

export default Reviews;
