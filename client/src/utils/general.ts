import React, { FC } from 'react';
type MenuItem = Required<MenuProps>['items'][number];
import type { MenuProps } from 'antd';
import { api } from './api';
import { getCookie } from '@/utils/cookies';

export function getItem(label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type
	} as MenuItem;
}

// To use
// let urlProfile = user.imgSRC.substring(user.imgSRC.indexOf("/") + 1);
export const getFileFromPublicFolder = (url: string): string => {
	return `${process.env.NEXT_PUBLIC_REST_API_URL_ENDPOINT}${url}`;
};

export function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

// Send Email Message
// SendEmail({ form: user?.firstName, client: user?.company.name, subject: inputs.subject, body: inputs.textArea });
// type ISendEmail = {
// 	from?: string | undefined;
// 	client?: string | undefined;
// 	subject: string;
// 	body: string;
// };
// export const SendEmail: FC<ISendEmail> = async ({ from = '', client = '', subject = '', body = '' }) => {
// 	try {
// 		const userId = await getCookie('userId');
// 		const response = await api.post(`/user/sendEmail/${userId}`, { from, client, subject, body });
// 		return response.data;
// 	} catch (error: any) {
// 		console.error('An error occurred while sending the email', error);
// 	}
// };

type ISendEmail = {
	from: string;
	client: string;
	subject: string;
	body: string;
};

export const SendEmail: FC<ISendEmail> = async ({ from, client, subject, body }) => {
	try {
		const userId = await getCookie('userId');
		const response = await api.post(`/user/sendEmail/${userId}`, {
			from,
			client,
			subject,
			body
		});
		return response.data;
	} catch (error: any) {
		console.error('An error occurred while sending the email', error);
	}
};
