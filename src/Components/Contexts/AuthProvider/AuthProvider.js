import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const allCotext = useFirebase();
	return <AuthContext.Provider value={allCotext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
