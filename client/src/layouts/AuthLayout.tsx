import React, { useEffect } from 'react';
import { LayoutProps } from '@/types/global';
import { useRouter } from 'next/router';
import store from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import useLoader from '@/hooks/useLoader';
import SkeletonLoader from '@/components/common/SkeletonLoader';

const AuthLayout = ({ children }: LayoutProps) => {
	const router = useRouter();
	const isLoading = useLoader(800);

	const { isAuthenticated } = store.getState().auth;
	useEffect(() => {
		if (isAuthenticated === true) {
			// Redirect the user to the login page if they are not authenticated
			router
				.replace('/')
				.then(data => data)
				.catch(err => err);
		}
	}, [isAuthenticated]);

	return (
		<section>
			{/* Navbar Here */}
			<main className="flex flex-col justify-center min-h-full px-5 mx-auto lg:w-1/4 lg:p-8">
				{isLoading ? <SkeletonLoader isLoading={isLoading} /> : children}
			</main>

			<div className="absolute bottom-0 items-end justify-between hidden w-full h-0 mt-10 md:flex">
				<Image className="" width={360} height={360} src="/left.svg" alt="" />
				<div className="flex gap-4 my-5 text-sm text-gray-300">
					<Link className="text-gray-500" href={'/'}>
						<span className="text-gray-500">Privacy Policy</span>
					</Link>
					|
					<Link className="text-gray-500" href={'/'}>
						<span className="text-gray-500">Terms Of Use</span>
					</Link>
					|
					<Link className="text-gray-500" href={'/'}>
						<span className="text-gray-500">User Manual</span>
					</Link>
					|
				</div>
				<Image className="hidden md:block" width={360} height={360} src="/right.svg" alt="" />
			</div>
		</section>
	);
};

export default AuthLayout;
