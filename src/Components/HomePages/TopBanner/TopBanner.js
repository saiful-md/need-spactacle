import React from 'react';

import banner2 from '../../../images/banner-1.jpg';

const TopBanner = () => {
	const topBanner = {
		background: `url(https://i.ibb.co/DCkD2R8/banner-1-1.png)`,
		width: '100%',
		height: '90vh',

		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		color: 'white'
	};
	return (
		<div style={topBanner}>
			<div>
				<h1>Hello! welcome to our shop.</h1>
				<h6>
					We develop products that are human-centered. We strive to ensure that new technologies are
					approachable and easy to understand. <br /> Our intent is to make our products comfortable to use
					and to leverage technology to find solutions that increase accessibility.
				</h6>
			</div>
		</div>
	);
};

export default TopBanner;
