import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
	return (
		<div>
			<Navigation />
			<TopBanner />
			<Products />
			<Reviews />
			<AboutUs />
		</div>
	);
};

export default Home;
