import { useEffect, useState } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	
	onAuthStateChanged,
	updateProfile
} from 'firebase/auth';
import initializeFirebase from "../../Firebase/firebase.init"

initializeFirebase();
const useFirebase = ()=> {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState('');

	const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const registerUser = (email, password, name, location, history) => {
		setIsloading(true);	
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				
				const newUser = {email, displayName: name}
				setUser(newUser); 
				saveUser(email, name, 'POST');
				updateProfile(auth.currentUser, {
					displayName: name
				  }).then(() => {	
				  }).catch((error) => {	
				  });
				const destination = location?.state?.from || '/';
				history.push(destination);
				setError('');
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsloading(false));
	};

    const loginUser = (email, password, location, history) => {
		setIsloading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				const destination = location?.state?.from || '/';
				history.push(destination)
				setError('');
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => setIsloading(false));
	};
    useEffect(()=>{
		setIsloading(true);
		fetch(`http://localhost:5000/userProfile/${user.email}`).then(res => res.json()).then(data=> {
			setAdmin(data.admin)
			setIsloading(false);
		})
	},[user.email])

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsloading(false);
		});
		return () => unSubscribe;
	}, [auth]);
    const logOut = () => {
		setIsloading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			})
			.finally(() => setIsloading(false));
	};
    const saveUser = (email, displayName, method) => {
		const userProfile = {email, displayName};
		fetch('http://localhost:5000/userProfile',{
			method: method,
			headers:{
				'content-type': 'application/json'
			},
			body: JSON.stringify(userProfile)
		}).then(res => res.json()).then(data => console.log(data));
	}
   console.log(admin);
    return {
		user,
		error,
		isLoading,
		admin,
		registerUser,
		loginUser,
		logOut
	};
}

export default useFirebase;