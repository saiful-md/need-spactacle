import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/HomePages/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Navigation from './Components/HomePages/Navigation/Navigation';
import ExploreAllProducts from './Components/Explore/ExploreAllProducts/ExploreAllProducts';
import Footer from './Components/Footer/Footer';
function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/exlore">
					<ExploreAllProducts />
				</Route>
			</Switch>

			<Footer />
		</Router>
	);
}

export default App;
