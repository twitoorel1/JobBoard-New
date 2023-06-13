import { api } from '@/utils/api';
import { getCookie } from '@/utils/cookies';

// import axios from "axios";
// const api = axios.create({
//   baseURL: "http://localhost:4000/auth/",
//   headers: { "Content-Type": "application/json" },
// });

export async function register(formValue: object) {
	try {
		const { data } = await api.post('auth/register', formValue);
		return data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message);
	}
}

export async function login(formValue: object) {
	try {
		const response = await api.post('auth/login', formValue);
		return response.data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message || error.message || 'Server Error');
	}
}

export async function isLogin() {
	try {
		const token = getCookie('ac-token');
		if (!token) Promise.reject();
		const response = await api.post('auth/isLogin', { token });
		return response.data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message || error.message || 'Server Error');
	}
}

export async function logout(userId: string) {
	try {
		const token = getCookie('ac-token');
		if (!token) Promise.reject();
		const response = await api.post(`auth/logout/${userId}`, { token });

		return response.data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message || error.message || 'Server Error');
	}
}

export async function forgotPassword(email: string) {
	try {
		const response = await api.post('auth/forgotPassword', { email });
		return response.data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message || error.message || 'Server Error');
	}
}
