import React from 'react';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
	return (
		<div>
			{/* <Navigation /> */}
			<TopBanner />
			<Products />
			<Reviews />
		</div>
	);
};

export default Home;
