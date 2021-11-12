import React from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';
import DashboardNavigaion from '../DashboardNavigation/DashboardNavigaion';

const Pay = () => {
	const { user, isLoading, admin } = useAuth();

	return (
		<div>
			<DashboardNavigaion />
			{isLoading ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<h1 style={{ textAlign: 'center' }}>Payment method comming soon</h1>
			)}
		</div>
	);
};

export default Pay;
