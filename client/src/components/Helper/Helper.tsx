import React, { useState, FormEvent } from 'react';
import { ChatBubbleLeftEllipsisIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Input from '@/components/common/Input';
import Button from '../common/Button';
import { SendEmail } from '@/utils/general';
import store from '@/redux/store';

interface IFormValues {
	subject: string;
	textArea: string;
}

interface Inputs {
	[key: string]: string;
}

const Helper: React.FC = () => {
	const [openHelper, setOpenHelper] = useState(true);
	const { user } = store.getState().auth;

	const [inputs, setInputs] = useState<Inputs>({});

	const onChangeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitEmailHelper = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// SendEmail({ form: 'orel', client: 'nirlat', subject: 'Subject', body: 'Text' });
		SendEmail({
			from: 'twitoorel1@gmail.com',
			client: 'nirlat',
			subject: 'Subject',
			body: 'Text'
		});
	};

	return (
		<div className="relative">
			<span
				onClick={() => setOpenHelper(!openHelper)}
				className="fixed bottom-0 left-0 z-50 p-3 m-3 border rounded-full cursor-pointer shadow-default border-gray-900/80 hover:border-gray-900/90"
			>
				<ChatBubbleLeftEllipsisIcon className="text-gray-900/80 h-14 w-14 hover:text-gray-900/90 " />
			</span>

			{openHelper && (
				<div className="fixed z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[2px] border-[#E2E8F0] rounded-md shadow-default top-1/2 left-1/2 w-3/4 xl:w-2/5">
					<div className="grid grid-cols-5">
						<div className="col-span-5">
							<div className="rounded-sm border-[#E2E8F0] bg-white shadow-default">
								<div className="border-b border-[#E2E8F0] py-4 px-7 flex items-center justify-between">
									<h3 className="font-medium text-black">תמיכה טכנית</h3>
									<XCircleIcon onClick={() => setOpenHelper(false)} className="w-6 h-6 cursor-pointer text-gray-900/80 hover:text-gray-900/90 " />
								</div>

								<form onSubmit={onSubmitEmailHelper} className="w-4/5 mx-auto p-7">
									<Input
										type="text"
										placeholder={`${user?.firstName} ${user?.lastName}`}
										defaultValue={`${user?.firstName} ${user?.lastName}`}
										showLabel
										label="שם מלא"
										disabled
									/>
									<Input type="text" placeholder={user?.company.name} defaultValue={user?.company.name} showLabel label="שם הלקוח" disabled />
									<input type="text" placeholder="נושא התקלה" name="subject" value={inputs['subject'] || ''} onChange={onChangeHandler} required />

									<label htmlFor="helperTextareaInput" className={`block mb-2 text-sm min-w-fit font-medium text-gray-900 dark:text-white`}>
										הסבר על התקלה
									</label>
									{/* <textarea
										required
										id="helperTextareaInput"
										className="w-full mb-3 rounded-md resize-none"
										name="textArea"
										onChange={onChangeHandler}
									></textarea> */}

									<textarea
										className="w-full mb-3 rounded-md resize-none"
										name="textBug"
										value={inputs['textBug'] || ''}
										onChange={onChangeHandler}
									/>

									<div className="grid grid-cols-3">
										<Button type="submit" label="שליחת תקלה" className="font-semibold rounded-md shadow-default" />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Helper;
