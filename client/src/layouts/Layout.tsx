import React, { useState } from 'react';
import { LayoutProps } from '@/types/global';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { FolderIcon, HomeIcon, UsersIcon, ChartPieIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Layout = ({ children }: LayoutProps) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const navigation = [
		{
			name: 'לוח בקרה',
			href: '/',
			icon: HomeIcon,
			roles: ['admin']
		},
		{
			name: 'מעומדים',
			href: '#',
			icon: FolderIcon,
			submenu: true,
			submenuItems: [
				{ name: 'רשימת מעומדים', href: '#', icon: UsersIcon, current: false },
				{ name: 'צור מעומד חדש', href: '#', icon: ChartPieIcon, current: false }
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
			</div>
		</div>
	);
};

export default Layout;
