import React from 'react';

interface Props {}

const menuDynamic = () => {
	return (
		<Fragment key={index}>
			<li>
				<Link
					href={item.href}
					className={classNames(
						router.pathname === item.href ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
						'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
					)}
					onClick={() => toggleSubMenu(index)}
				>
					{item.name}
					{item.submenu && <BsChevronDown className={`${menuOpen === index ? 'rotate-180' : ''} duration-300`} />}
				</Link>
			</li>
			{item.submenu && menuOpen === index && (
				<ul>
					{item.submenuItems.map((submenuItem: any, index: string) => (
						<li key={index} className="bg-gray-50/10">
							<Link
								href={submenuItem.href}
								className={classNames(
									router.pathname === submenuItem.href ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
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
		</Fragment>
	);
};

export default menuDynamic;
