import React from 'react';
import AuthLayout from '@/layouts/AuthLayout';
import Link from 'next/link';
import LoginForm from '@/features/authentication/components/LoginForm';

const login = () => {
	return (
		<AuthLayout>
			<div className="text-[#333333]">
				<LoginForm />
				<p className="mt-8 mb-2 text-sm text-center">
					אין לך חשבון? <Link href="/authentication/register">יצירת חשבון חדש</Link>
				</p>
				<p className="text-sm text-center">
					מתקשה בכניסה? <Link href="tel:0543034727">נא ליצור קשר</Link>
				</p>
			</div>
		</AuthLayout>
	);
};

export default login;
