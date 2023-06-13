type MenuItem = Required<MenuProps>['items'][number];
import type { MenuProps } from 'antd';

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
