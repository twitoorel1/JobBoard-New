import React from 'react';
import AuthLayout from '@/layouts/AuthLayout';
import Link from 'next/link';
import ForgotPasswordForm from '@/features/authentication/components/forgotPasswordForm';

const forgotPassword = () => {
	return (
		<AuthLayout>
			<div className="text-[#333333]">
				<ForgotPasswordForm />
				<p className="mt-8 mb-2 text-sm text-center">
					יש לי חשבון <Link href="/authentication/login">התחבר</Link>
				</p>
			</div>
		</AuthLayout>
	);
};

export default forgotPassword;
