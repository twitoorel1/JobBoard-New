import React, { useState } from 'react';
import { LayoutProps } from '@/types/global';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Helper from '@/components/Helper/Helper';
import { FolderIcon, HomeIcon, UsersIcon, ChartPieIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Input from '@/components/common/Input';

const Layout = ({ children }: LayoutProps) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const navigation = [
		{
			name: 'לוח בקרה',
			href: '/',
			icon: HomeIcon
		},
		{
			name: 'לקוחות',
			href: '',
			icon: FolderIcon,
			roles: 'employee',
			submenu: true,
			submenuItems: [
				{ name: 'רשימת לקוחות', href: '/clients', icon: UsersIcon },
				{ name: 'צור לקוח חדש', href: '/clients/create', icon: ChartPieIcon }
			]
		},
		{
			name: 'משרות',
			href: '',
			icon: FolderIcon,
			submenu: true,
			submenuItems: [
				{ name: 'רשימת משרות', href: '/Jobs', icon: UsersIcon },
				{ name: 'צור משרה חדש', href: '/Jobs/create', icon: ChartPieIcon }
			]
		},
		{
			name: 'מעומדים',
			href: '',
			icon: FolderIcon,
			submenu: true,
			submenuItems: [
				{ name: 'רשימת מעומדים', href: '/candidates', icon: UsersIcon },
				{ name: 'צור מעומד חדש', href: '/candidates/create', icon: ChartPieIcon }
			]
		}
	];

	const userNavigation = [
		{ name: 'הפרופיל שלי', href: '/account' },
		{ name: 'שינוי סיסמה', href: '/account/editPassword' },
		{ name: 'התנתק', href: '#', isFunction: true }
	];

	return (
		<div>
			<Sidebar
				setSidebarOpen={setSidebarOpen}
				sidebarOpen={sidebarOpen}
				setSubMenuOpen={setSubMenuOpen}
				subMenuOpen={subMenuOpen}
				navigation={navigation}
			/>
			<div className="lg:pr-72">
				{/* Navbar */}
				<Navbar setSidebarOpen={setSidebarOpen} userNavigation={userNavigation} />
				{/* Children */}
				<main className="py-10">
					<div className="px-4 sm:px-6 lg:px-8">{children}</div>
				</main>

				<Helper />
			</div>
		</div>
	);
};

export default Layout;
