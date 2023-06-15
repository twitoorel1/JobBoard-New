import React from 'react';
import { EditPasswordInputs } from '@/types/global';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { editPasswordByUserId } from '../redux/userSlice';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import EditPasswordValidationSchema from '../validations/EditPasswordValidationSchema';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const EditPasswordForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditPasswordInputs>({
		resolver: yupResolver(EditPasswordValidationSchema),
		defaultValues: {
			oldPassword: '',
			newPassword: '',
			confirmPassword: ''
		},
		mode: 'onBlur',
		reValidateMode: 'onChange'
	});

	const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

	const onSubmitEditPassword = async (data: EditPasswordInputs) => {
		await dispatch(editPasswordByUserId(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmitEditPassword)}>
			<div className="mb-[1.375rem]">
				<Input
					id="editPasswordCurrentPasswordInput"
					type="password"
					placeholder="******"
					showLabel
					label="סיסמה נוכחית"
					register={{ ...register('oldPassword') }}
				/>
				{errors.oldPassword && <span className="mx-5">{errors.oldPassword.message}</span>}
			</div>

			<div className="flex flex-col gap-3 mb-3 sm:flex-row">
				<div className="w-full sm:w-1/2">
					<Input
						id="editPasswordNewPasswordInput"
						type="password"
						placeholder="******"
						showLabel
						label="סיסמה חדשה"
						register={{ ...register('newPassword') }}
					/>
					{errors.newPassword && <span className="mx-5">{errors.newPassword.message}</span>}
				</div>
				<div className="w-full sm:w-1/2">
					<Input
						id="editPasswordNewPasswordTwoInput"
						type="password"
						placeholder="******"
						showLabel
						label="אימות סיסמה חדשה"
						register={{ ...register('confirmPassword') }}
					/>
					{errors.confirmPassword && <span className="mx-5">{errors.confirmPassword.message}</span>}
				</div>
			</div>

			<Button label="לשמור" className="rounded-md" />
		</form>
	);
};

export default EditPasswordForm;
