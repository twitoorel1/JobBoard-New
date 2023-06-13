import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginByToken } from '@/features/authentication/redux/authenticationSlice';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/types/global';
import { getCookie } from '@/utils/cookies';

type AuthContextProps = {
	children?: ReactNode;
};

const AuthContext = createContext({});

export function useAuthContext() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthContextProps) {
	const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
	const router = useRouter();
	const { isAuthenticated, user, isLoading, isRegister, isError } = useSelector((state: RootState) => state.auth);
	const getCookieUser = getCookie('ac-token');

	useEffect(() => {
		if (!router.pathname.includes('/authentication') || (router.pathname.includes('/authentication') && getCookieUser)) {
			dispatch(isLoginByToken())
				.then(data => data)
				.catch((err: any) => console.log(err));
		}
	}, [dispatch]);

	useEffect(() => {
		if (isAuthenticated === false) {
			// Redirect the user to the login page if they are not authenticated
			router
				.replace('/authentication/login')
				.then(data => data)
				.catch((err: any) => console.log(err));
		}
	}, [isAuthenticated, isRegister, isError, router]);

	return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}
