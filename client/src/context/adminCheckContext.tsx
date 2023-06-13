import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginByToken } from '@/features/authentication/redux/authenticationSlice';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/types/global';

type AdminContextType = {
	children?: ReactNode;
};

const AdminContext = createContext({});

export function useAdminContext() {
	return useContext(AdminContext);
}

export const AdminContextProvider = ({ children }: AdminContextType) => {
	const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
	const router = useRouter();
	const { isAuthenticated, user, isLoading, isRegister, isError } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		if (user?.role !== 'admin') {
			router.replace('/');
		}
	}, [router, user?.role]);

	return <AdminContext.Provider value={{ isAuthenticated }}>{children}</AdminContext.Provider>;
};
