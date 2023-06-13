import type { MenuProps } from 'antd';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
export type MenuItem = Required<MenuProps>['items'][number];

export interface AppState {
	// Properties related to the App state...
}

export interface RootState {
	app: AppState;
	auth: AuthState;
	// user: UserState;
	// Other slices of your Redux state...
}

type LayoutProps = {
	children?: ReactNode;
	isAuthenticated?: any;
};

// Auth
export interface AuthState {
	isAuthenticated: boolean | null;
	token?: string | null;
	isLoading: boolean;
	isRegister: boolean;
	isError: boolean | null;
	error: any;
	user?: {
		_id: string;
		firstName: string;
		lastName: string;
		phoneNumber?: Number | undefined | string;
		email: string;
		username: string;
		role: string;
		phoneNumber: string;
		imgSRC: string;
	} | null;
}

export type FormRegisterInputs = {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export type FormLoginInputs = {
	username: string;
	password: string;
};

export type ForgotPasswordInputs = {
	email: string;
};
