import React from 'react';
import Layout from '@/layouts/Layout';
import Breadcrumb from '@/components/common/Breadcrumb';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

import EditPassword from '@/features/user/components/EditPasswordForm';

const editPassword = () => {
	return (
		<Layout>
			<div className="mx-auto max-w-[67.5rem]">
				<Breadcrumb pageName="שינוי סיסמה" />

				<div className="grid grid-cols-5 gap-8">
					<div className="col-span-5 xl:col-span-3 xl:col-start-2">
						<div className="rounded-sm border-[#E2E8F0] bg-white shadow-default">
							<div className="border-b border-[#E2E8F0] py-4 px-7">
								<h3 className="font-medium text-black">הגדרות הסיסמה שלך</h3>
							</div>

							<div className="p-7">
								<EditPassword />
								{/* <form>
									<div className="mb-[1.375rem] flex flex-col gap-[1.375rem] sm:flex-row">
										<div className="w-full sm:w-1/2">
											<Input type="password" placeholder="******" showLabel label="סיסמה חדשה" />
										</div>
										<div className="w-full sm:w-1/2">
											<Input type="password" placeholder="******" showLabel label="אימות סיסמה חדשה" />
										</div>
									</div>

									<div className="mb-[1.375rem]">
										<Input type="password" placeholder="******" showLabel label="סיסמה נוכחית" />
									</div>

									<Button label="לשמור" className="rounded-md" />
								</form> */}
							</div>
						</div>
					</div>
					{/* <div className="col-span-5 xl:col-span-2 bg-red-300">333</div> */}
				</div>
			</div>
		</Layout>
	);
};

export default editPassword;
