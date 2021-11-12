import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Navigation from '../../HomePages/Navigation/Navigation';
import useAuth from '../../Hooks/useAuth/useAuth';

const Registration = () => {
	const [
		registerData,
		setRegisterData
	] = useState({});
	const location = useLocation();
	const history = useHistory();
	const { registerUser } = useAuth();
	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newRegistrationData = { ...registerData };
		newRegistrationData[field] = value;
		setRegisterData(newRegistrationData);
	};
	const handleRegister = (e) => {
		e.preventDefault();
		if (registerData.password1 !== registerData.password2) {
			alert("Dont't match your password!");
		}
		registerUser(registerData.email, registerData.password1, registerData.userName, location, history);
	};
	return (
		<div style={{ marginBottom: '100px' }}>
			<Navigation />
			<div style={{ height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<div>
					<h2 style={{ textAlign: 'center', color: 'tomato' }}>Please Registration</h2>
					<form onSubmit={handleRegister}>
						<input
							style={{ marginBottom: '20px', padding: '5px' }}
							className="w-100"
							type="text"
							onBlur={handleOnBlur}
							name="userName"
							placeholder="User Name"
						/>
						<br />
						<input
							style={{ marginBottom: '20px', padding: '5px' }}
							className="w-100"
							onBlur={handleOnBlur}
							type="email"
							name="email"
							placeholder="email"
						/>
						<br />
						<input
							style={{ marginBottom: '20px', padding: '5px' }}
							className="w-100"
							onBlur={handleOnBlur}
							type="password"
							name="password1"
							placeholder="password"
						/>
						<br />
						<input
							style={{ marginBottom: '20px', padding: '5px' }}
							className="w-100"
							onBlur={handleOnBlur}
							type="password"
							name="password2"
							placeholder="Re-type Password"
						/>
						<br />
						<p>
							Already Register?{' '}
							<Link style={{ fontWeight: '700' }} to="/registration">
								Please Login here
							</Link>
						</p>

						<Button type="submit" className="w-75 text-center" variant="info">
							Register
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Registration;
