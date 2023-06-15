import React, { useEffect } from 'react';
import { EditProfileInputs } from '@/types/global';
import store from '@/redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { editProfileByUserId } from '../redux/userSlice';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import EditProfileValidationSchema from '../validations/EditProfileValidationSchema';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const EditProfileForm = () => {
	const { user } = store.getState().auth;
	const { msg } = store.getState().user;
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful }
	} = useForm<EditProfileInputs>({
		resolver: yupResolver(EditProfileValidationSchema),
		defaultValues: {
			firstName: user?.firstName,
			lastName: user?.lastName,
			email: user?.email,
			username: user?.username
		},
		mode: 'onBlur',
		reValidateMode: 'onChange'
	});

	const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

	const onSubmitEditProfile = async (data: EditProfileInputs) => {
		await dispatch(editProfileByUserId(data));
	};

	// useEffect(() => {
	// 	if (isSubmitSuccessful) {
	// 		setTimeout(() => {
	// 			dispatch(resetMessage());
	// 		}, 2000);
	// 	}
	// }, [isSubmitSuccessful, dispatch]);

	return (
		<form onSubmit={handleSubmit(onSubmitEditProfile)}>
			<div className="mb-[1.375rem] flex flex-col gap-[1.375rem] sm:flex-row">
				<div className="w-full sm:w-1/2">
					<Input
						id="editProfileFirstNameInput"
						type="text"
						defaultValue={user?.firstName}
						placeholder={user?.firstName}
						showLabel
						label="שם פרטי"
						required={false}
						register={{ ...register('firstName') }}
					/>
					{errors.firstName && <span className="mx-5">{errors.firstName.message}</span>}
				</div>
				<div className="w-full sm:w-1/2">
					<Input
						id="editProfileLastNameInput"
						type="text"
						defaultValue={user?.lastName}
						placeholder={user?.lastName}
						showLabel
						label="שם משפחה"
						required={false}
						register={{ ...register('lastName') }}
					/>
					{errors.lastName && <span className="mx-5">{errors.lastName.message}</span>}
				</div>
			</div>

			<div className="mb-[1.375rem]">
				<Input
					id="editProfileEmailInput"
					type="email"
					defaultValue={user?.email}
					placeholder={user?.email}
					showLabel
					label="כתובת אימייל"
					required={false}
					register={{ ...register('email') }}
				/>
				{errors.email && <span className="mx-5">{errors.email.message}</span>}
			</div>

			<div className="mb-[1.375rem]">
				<Input
					id="editProfileUsernameInput"
					type="text"
					defaultValue={user?.username}
					placeholder={user?.username}
					showLabel
					label="שם משתמש"
					required={false}
					register={{ ...register('username') }}
				/>
				{errors.username && <span className="mx-5">{errors.username.message}</span>}
			</div>

			<Button label="לשמור" className="rounded-md" />
			{/* {isSubmitSuccessful && <span>{msg}</span>} */}
		</form>
	);
};

export default EditProfileForm;
