import React, { useState } from 'react';
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutSidebarReverse, BsPerson } from 'react-icons/bs';
import { AiOutlineFileText, AiOutlineBarChart, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';
import { logoutByToken } from '@/features/authentication/redux/authenticationSlice';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import store from '@/redux/store';

const Sidebar = () => {
	const [open, setOpen] = useState(true);
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
	const { user } = store.getState().auth;

	const LogoutUser = async () => {
		await dispatch(logoutByToken(user?._id));
	};

	const Menus = [
		{ title: 'לוח בקרה' },
		{ title: 'Pages', icon: <AiOutlineFileText /> },
		{ title: 'Media', spacing: true, icon: <BsFillImageFill /> },
		{
			title: 'Pages',
			icon: <BsReverseLayoutSidebarReverse />,
			submenu: true,
			submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 2' }, { title: 'Submenu 3' }]
		},
		{ title: 'Analytics', icon: <AiOutlineBarChart /> },
		{ title: 'Inbox', icon: <AiOutlineMail /> },
		{ title: 'Profile', spacing: true, icon: <BsPerson /> },
		{ title: 'Settings', icon: <AiOutlineSetting /> },
		{
			title: 'התנתק',
			icon: <AiOutlineLogout />,
			customCss: 'bg-[#ca3838] hover:bg-[#d61f1fb1]',
			onClickFunction: LogoutUser
		}
	];

	return (
		<div className="flex">
			<div className={`bg-[#081A51] h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
				<BsArrowLeftShort
					onClick={() => setOpen(!open)}
					className={`bg-white text-[#081A51] text-3xl rounded-full absolute -left-3 top-9 border border-[#081A51] cursor-pointer ${
						open && 'rotate-180'
					}`}
				/>
				<div className="inline-flex">
					<Image
						src={'/favicon.ico'}
						width={30}
						height={30}
						alt={'logo'}
						className={`cursor-pointer block float-left ml-2 duration-300 ${open && 'rotate-[360deg]'}`}
					/>
					<h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>בואינג</h1>
				</div>

				<div className={`flex items-center rounded-md bg-[#ffffff42] mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2`}>
					<BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && 'ml-2'}`} />
					<input type="search" placeholder="לחפש" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`} />
				</div>

				<ul className="pt-2">
					{Menus.map((menu, index) => (
						<>
							<li
								key={index}
								className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 duration-300 text-gray-300 ${
									menu.customCss ? menu.customCss : 'hover:bg-[#ffffff42]'
								} rounded-md ${menu.spacing ? 'mt-9' : 'mt-2'}`}
								onClick={menu.onClickFunction}
							>
								<span className="block float-left text-2xl">{menu.icon ? menu.icon : <RiDashboardFill />}</span>
								<span
									className={`text-base font-medium flex-1 duration-300 ${!open && 'hidden'}`}
									onClick={() => menu.submenu && setSubMenuOpen(!subMenuOpen)}
								>
									{menu.title}
								</span>
								{menu.submenu && open && <BsChevronDown className={`${subMenuOpen && 'rotate-180'}`} onClick={() => setSubMenuOpen(!subMenuOpen)} />}
							</li>

							{menu.submenu && subMenuOpen && open && (
								<ul>
									{menu.submenuItems.map((submenuItem, index) => (
										<li
											key={index}
											className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-[#ffffff42] rounded-md`}
										>
											{submenuItem.title}
										</li>
									))}
								</ul>
							)}
						</>
					))}
				</ul>
			</div>
			<div className="p-7">
				<h1 className="text-2xl font-semibold">Home Page</h1>
			</div>
		</div>
	);
};

export default Sidebar;
