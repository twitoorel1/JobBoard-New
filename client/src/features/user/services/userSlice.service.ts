import { api } from '@/utils/api';
import { getCookie } from '@/utils/cookies';

// All User Access
export async function editPassword(userId: string, formValue: object) {
	try {
		const response = await api.put(`/user/editPassword/${userId}`, formValue);
		return response.data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message || error.message || 'Server Error');
	}
}
export async function updateUser(userId: string, formValue: object) {
	try {
		const response = await api.put(`/user/update/${userId}`, formValue);
		return response.data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message || error.message || 'Server Error');
	}
}

export async function getUser(userId: string) {
	try {
		const response = await api.get(`/user/find/${userId}`);
		return response.data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message || error.message || 'Server Error');
	}
}

// Admin Access
export async function getAllUsers() {
	try {
		const response = await api.get(`/user/admin/all`);
		return response.data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message || error.message || 'Server Error');
	}
}

export async function deleteUser(userId: string) {
	try {
		const response = await api.delete(`/user/admin/delete/${userId}`);
		return response.data;
	} catch (error: any) {
		return Promise.reject(error.response?.data?.message || error.message || 'Server Error');
	}
}
