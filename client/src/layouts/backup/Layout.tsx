import React, { Fragment, useState } from 'react';
import useLoader from '@/hooks/useLoader';
import { LayoutProps } from '@/types/global';

import { Dialog, Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	BellIcon,
	CalendarIcon,
	ChartPieIcon,
	Cog6ToothIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	XMarkIcon
} from '@heroicons/react/24/outline';
import { BsChevronDown } from 'react-icons/bs';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import store from '@/redux/store';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { logoutByToken } from '@/features/authentication/redux/authenticationSlice';

// import SkeletonLoader from "@/components/common/SkeletonLoader";
// {isLoading ? <SkeletonLoader isLoading={isLoading} /> : children}

const navigation = [
	{
		name: 'לוח בקרה',
		href: '/',
		icon: HomeIcon
	}
	// { name: 'לוח בקרה', href: '/', icon: HomeIcon, current: true },
	// { name: 'לקוחות', href: '#', icon: UsersIcon, current: false },
	// {
	// 	name: 'מעומדים',
	// 	href: '#',
	// 	icon: FolderIcon,
	// 	current: false,
	// 	submenu: true,
	// 	submenuItems: [
	// 		{ name: 'רשימת מעומדים', href: '#', icon: UsersIcon, current: false },
	// 		{ name: 'צור מעומד חדש', href: '#', icon: ChartPieIcon, current: false }
	// 	]
	// },
	// { name: 'לוח שנה', href: '#', icon: CalendarIcon, current: false },
	// { name: 'מסמכים', href: '#', icon: DocumentDuplicateIcon, current: false },
	// { name: 'דוחות', href: '#', icon: ChartPieIcon, current: false }
];

// const teams = [
//   { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
// ];

const userNavigation = [
	{ name: 'הפרופיל שלי', href: '/account' },
	{ name: 'שינוי סיסמה', href: '/account/editPassword' },
	{ name: 'התנתק', href: '#', isFunction: true }
];

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

const Layout = ({ children }: LayoutProps) => {
	const router = useRouter();
	const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
	const isLoading = useLoader(800);
	const { user } = store.getState().auth;
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const LogoutUser = async () => {
		await dispatch(logoutByToken(user?._id));
	};

	return (
		<>
			<div>
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-100"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
							//   enter="transition ease-in-out duration-100 transform"
							//   enterFrom="translate-x-full"
							//   enterTo="translate-x-0"
							//   leave="transition ease-in-out duration-100 transform"
							//   leaveFrom="translate-x-0"
							//   leaveTo="translate-x-full"
						>
							<div className="fixed inset-0 bg-gray-900/80" />
						</Transition.Child>

						<div className="fixed inset-0 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="relative flex flex-1 w-full max-w-xs ml-16">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 flex justify-center w-16 pt-5 right-full">
											<button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
												<span className="sr-only">Close sidebar</span>
												<XMarkIcon className="w-6 h-6 text-white" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									{/* Sidebar component, swap this element with another sidebar if you like */}
									<div className="flex flex-col px-6 pb-4 overflow-y-auto bg-gray-900 grow gap-y-5 ring-1 ring-white/10">
										<div className="flex items-center h-20 shrink-0">
											<img className="w-12 h-12" src="/favicon.ico" alt="logo" />
											<span className="mr-3 text-2xl font-semibold text-white">בואינג</span>
										</div>
										<nav className="flex flex-col flex-1">
											<ul role="list" className="flex flex-col flex-1 gap-y-7">
												<li>
													<ul role="list" className="-mx-2 space-y-1">
														{navigation.map((item, index) => (
															<Fragment key={index}>
																<li onClick={() => item.submenu && setSubMenuOpen(!subMenuOpen)}>
																	<Link
																		href={item.href}
																		className={classNames(
																			router.pathname === item.href ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
																			'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
																			// // item.current
																			// //   ? "bg-gray-800 text-white"
																			// //   : "text-gray-400 hover:text-white hover:bg-gray-800",
																		)}
																	>
																		<item.icon className="w-6 h-6 shrink-0" aria-hidden="true" />
																		{item.name}
																		{item.submenu && (
																			<BsChevronDown
																				className={`${subMenuOpen && 'rotate-180'} duration-300`}
																				onClick={() => setSubMenuOpen(!subMenuOpen)}
																			/>
																		)}
																	</Link>
																</li>

																<li>
																	{item.submenu && subMenuOpen && (
																		<ul>
																			{item.submenuItems.map((submenuItem, index) => (
																				<li key={index} className="bg-gray-50/10">
																					<Link
																						href={submenuItem.href}
																						className={classNames(
																							router.pathname === submenuItem.href
																								? 'bg-gray-800 text-white'
																								: 'text-gray-400 hover:text-white hover:bg-gray-800',
																							'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
																						)}
																					>
																						<submenuItem.icon className="w-6 h-6 shrink-0" aria-hidden="true" />
																						{submenuItem.name}
																					</Link>
																				</li>
																			))}
																		</ul>
																	)}
																</li>
															</Fragment>
														))}
													</ul>
												</li>
												{/* <li>
													<div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
													<ul role="list" className="mt-2 -mx-2 space-y-1">
														{teams.map(team => (
															<li key={team.name}>
																<Link
																	href={team.href}
																	className={classNames(
																		team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
																		'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
																	)}
																>
																	<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
																		{team.initial}
																	</span>
																	<span className="truncate">{team.name}</span>
																</Link>
															</li>
														))}
													</ul>
												</li> */}
												<li className="mt-auto">
													<Link
														href="/account"
														className="flex p-2 -mx-2 text-sm font-semibold leading-6 text-gray-400 rounded-md group gap-x-3 hover:bg-gray-800 hover:text-white"
													>
														<Cog6ToothIcon className="w-6 h-6 shrink-0" aria-hidden="true" />
														הגדרות
													</Link>
												</li>
											</ul>
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex flex-col px-6 pb-4 overflow-y-auto bg-gray-900 grow gap-y-5">
						<div className="flex items-center h-20 shrink-0">
							<img className="w-12 h-12" src="/favicon.ico" alt="logo" />
							<span className="mr-3 text-2xl font-semibold text-white">בואינג</span>
						</div>
						<nav className="flex flex-col flex-1">
							<ul role="list" className="flex flex-col flex-1 gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-1">
										{navigation.map((item, index) => (
											<Fragment key={index}>
												<li onClick={() => item.submenu && setSubMenuOpen(!subMenuOpen)}>
													<Link
														href={item.href}
														className={classNames(
															router.pathname === item.href ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
															'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
															// // item.current
															// //   ? "bg-gray-800 text-white"
															// //   : "text-gray-400 hover:text-white hover:bg-gray-800",
														)}
													>
														<item.icon className="w-6 h-6 shrink-0" aria-hidden="true" />
														{item.name}
														{item.submenu && (
															<BsChevronDown className={`${subMenuOpen && 'rotate-180'} duration-300`} onClick={() => setSubMenuOpen(!subMenuOpen)} />
														)}
													</Link>
												</li>

												<li>
													{item.submenu && subMenuOpen && (
														<ul>
															{item.submenuItems.map((submenuItem, index) => (
																<li key={index} className="bg-gray-50/10">
																	<Link
																		href={submenuItem.href}
																		className={classNames(
																			router.pathname === submenuItem.href
																				? 'bg-gray-800 text-white'
																				: 'text-gray-400 hover:text-white hover:bg-gray-800',
																			'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
																		)}
																	>
																		<submenuItem.icon className="w-6 h-6 shrink-0" aria-hidden="true" />
																		{submenuItem.name}
																	</Link>
																</li>
															))}
														</ul>
													)}
												</li>
											</Fragment>
										))}
									</ul>
								</li>
								{/* <li>
									<div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
									<ul role="list" className="mt-2 -mx-2 space-y-1">
										{teams.map(team => (
											<li key={team.name}>
												<Link
													href={team.href}
													className={classNames(
														team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
														'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
													)}
												>
													<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
														{team.initial}
													</span>
													<span className="truncate">{team.name}</span>
												</Link>
											</li>
										))}
									</ul>
								</li> */}
								<li className="mt-auto">
									<Link
										href="/account"
										className="flex p-2 -mx-2 text-sm font-semibold leading-6 text-gray-400 rounded-md group gap-x-3 hover:bg-gray-800 hover:text-white"
									>
										<Cog6ToothIcon className="w-6 h-6 shrink-0" aria-hidden="true" />
										הגדרות
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				{/* To Fix */}
				<div className="lg:pr-72">
					{/* Navbar */}
					<div className="sticky top-0 z-40 flex items-center h-16 px-4 bg-white border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8">
						<button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
							<span className="sr-only">Open sidebar</span>
							<Bars3Icon className="w-6 h-6" aria-hidden="true" />
						</button>

						{/* Separator */}
						<div className="w-px h-6 bg-gray-900/10 lg:hidden" aria-hidden="true" />

						<div className="flex self-stretch flex-1 gap-x-4 lg:gap-x-6">
							{/* <form className="relative flex flex-1" action="#" method="GET">
								<label htmlFor="search-field" className="sr-only">
									Search
								</label>
								<MagnifyingGlassIcon className="absolute inset-y-0 left-0 w-5 h-full text-gray-400 pointer-events-none" aria-hidden="true" />
								<input
									id="search-field"
									className="block w-full h-full py-0 pl-8 pr-0 text-gray-900 border-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
									placeholder="Search..."
									type="search"
									name="search"
								/>
							</form> */}
							<div className="flex items-center mr-auto gap-x-4 lg:gap-x-6">
								<button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
									<span className="sr-only">View notifications</span>
									<BellIcon className="w-6 h-6" aria-hidden="true" />
								</button>

								{/* Separator */}
								<div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

								{/* Profile dropdown */}
								<Menu as="div" className="relative">
									<Menu.Button className="-m-1.5 flex items-center p-1.5">
										<span className="sr-only">Open user menu</span>
										<img
											className="w-8 h-8 rounded-full bg-gray-50"
											src="/avatar/avatar.jpg"
											alt={`תמונת פרופיל של ${user && `${user.firstName} ${user.lastName}`}`}
										/>
										<span className="hidden lg:flex lg:items-center">
											<span className="mr-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
												{user && `${user.firstName}  ${user.lastName}`}
											</span>
											<ChevronDownIcon className="w-5 h-5 mr-2 text-gray-400" aria-hidden="true" />
										</span>
									</Menu.Button>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute left-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
											{userNavigation.map(item => (
												<Menu.Item key={item.name}>
													{({ active }) =>
														item.isFunction ? (
															<Link
																href={item.href}
																className={classNames(active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900')}
																onClick={() => LogoutUser()}
															>
																{item.name}
															</Link>
														) : (
															<Link
																href={item.href}
																className={classNames(active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900')}
															>
																{item.name}
															</Link>
														)
													}
												</Menu.Item>
											))}
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
					{/* Navbar END */}

					{/* Children */}
					<main className="py-10">
						<div className="px-4 sm:px-6 lg:px-8">{children}</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default Layout;
