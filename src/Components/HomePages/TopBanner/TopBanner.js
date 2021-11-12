import React from 'react';
import banner from '../../../images/banner-2.jpg';
import banner2 from '../../../images/banner-1.jpg';

const TopBanner = () => {
	const topBanner = {
		background: `url(${banner2})`,
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
