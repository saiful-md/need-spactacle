import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';
import DashboardNavigaion from '../DashboardNavigation/DashboardNavigaion';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
	const { admin } = useAuth();
	return (
		<div>
			{/* <DashboardNavigaion /> */}
			{admin ? <ManageAllOrders /> : <MyOrders />}
		</div>
	);
};

export default Dashboard;
