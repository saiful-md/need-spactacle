import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/HomePages/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import ExploreAllProducts from './Components/Explore/ExploreAllProducts/ExploreAllProducts';
import Footer from './Components/Footer/Footer';
import AddProducts from './Components/Dashboard/AddProducts/AddProducts';
import Buy from './Components/HomePages/Buy/Buy';
import Login from './Components/SignIn/Login/Login';
import Registration from './Components/SignIn/Registration/Registration';
import AuthProvider from './Components/Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/ProtectedRoute/PrivateRoute/PrivateRoute';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';
import Pay from './Components/Dashboard/Pay/Pay';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Components/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProduct from './Components/Dashboard/ManageProduct/ManageProduct';

import UserProtectedRoute from './Components/ProtectedRoute/UserProtectedRoute/UserProtectedRoute';
import AdminProtectedRoute from './Components/ProtectedRoute/AdminProtectedRoute/AdminProtectedRoute';
function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route path="/exlore">
						<ExploreAllProducts />
					</Route>
					<AdminProtectedRoute path="/addProduct">
						<AddProducts />
					</AdminProtectedRoute>

					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<UserProtectedRoute path="/myOrders">
						<MyOrders />
					</UserProtectedRoute>
					<UserProtectedRoute path="/pay">
						<Pay />
					</UserProtectedRoute>
					<UserProtectedRoute path="/addReview">
						<AddReview />
					</UserProtectedRoute>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/registration">
						<Registration />
					</Route>
					<AdminProtectedRoute path="/makeAdmin">
						<MakeAdmin />
					</AdminProtectedRoute>
					<AdminProtectedRoute path="/manageAllOrders">
						<ManageAllOrders />
					</AdminProtectedRoute>
					<AdminProtectedRoute path="/manageProducts">
						<ManageProduct />
					</AdminProtectedRoute>

					<UserProtectedRoute path="/buy/:id">
						<Buy />
					</UserProtectedRoute>
				</Switch>

				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
