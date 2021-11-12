import React, { useState } from 'react';
import Navigation from '../../HomePages/Navigation/Navigation';
import { Alert, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const Login = () => {
	const [
		loginData,
		setLoginData
	] = useState({});
	const { error, user, loginUser } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};
	const handleLogin = (e) => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
	};
	return (
		<div>
			<Navigation />
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
				<div>
					<h2 style={{ textAlign: 'center' }}> Login with an valid Email and Password.</h2>
					<form onSubmit={handleLogin}>
						<br />
						<input
							style={{ marginBottom: '20px', padding: '5px' }}
							className="w-75"
							onBlur={handleOnBlur}
							type="email"
							name="email"
							placeholder="email"
						/>
						<br />
						<input
							style={{ marginBottom: '20px', padding: '5px' }}
							className="w-75"
							onBlur={handleOnBlur}
							type="password"
							name="password"
							placeholder="pasword"
						/>
						<br />
						{error && (
							<p style={{ color: 'red' }}>
								Your account does not exist. First Register or check your password
							</p>
						)}
						<p>
							If you don't Register yet?{' '}
							<Link style={{ fontWeight: '700' }} to="/registration">
								Please Register here
							</Link>
						</p>

						<Button type="submit" className="w-75" variant="info">
							Login
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
