import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth/useAuth';
import DashboardNavigaion from '../DashboardNavigation/DashboardNavigaion';

const MakeAdmin = () => {
	const [
		email,
		setEmail
	] = useState('');
	const [
		isLoading,
		setIsLoading
	] = useState(false);
	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};
	const handleOnAdmin = (e) => {
		setIsLoading(true);
		const adminEmail = { email };
		fetch(`https://desolate-depths-51777.herokuapp.com/userProfile/admin`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(adminEmail)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					alert('make admin successfully!');
					setIsLoading(false);
				}
			});
		e.preventDefault();
	};

	return (
		<div>
			<DashboardNavigaion />
			<div style={{ display: 'flex', justifyContent: 'center', height: '70vh', marginTop: '50px' }}>
				<div>
					{isLoading ? (
						<div className="d-flex justify-content-center">
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : (
						<form onSubmit={handleOnAdmin}>
							<input
								style={{
									marginBottom: '10px',
									borderRadius: '5px',
									border: 'none',
									padding: '5px',
									width: '250px',
									backgroundColor: 'rgba(0,0,0,0.09)'
								}}
								type="email"
								placeholder="email"
								onBlur={handleOnBlur}
							/>
							<br />
							<Button type="submit" variant="outline-success">
								Make Admin
							</Button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default MakeAdmin;
