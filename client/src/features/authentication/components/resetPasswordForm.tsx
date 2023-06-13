import React from 'react';
import { ResetPasswordInputs } from '@/types/global';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { resetPasswordByResetToken } from '../redux/authenticationSlice';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ResetPasswordSchema from '../validations/resetSchema.validation';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const resetPasswordForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ResetPasswordInputs>({
		resolver: yupResolver(ResetPasswordSchema),
		defaultValues: { password: '' },
		mode: 'onBlur',
		reValidateMode: 'onBlur'
	});
	const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

	const onSubmitResetPassword: SubmitHandler<ResetPasswordInputs> = async data => {
		const { password } = data;
		await dispatch(resetPasswordByResetToken(password));
	};

	return (
		<form onSubmit={handleSubmit(onSubmitResetPassword)}>
			<h2 className="my-10 text-2xl font-bold text-center lg:text-3xl">שחזור סיסמה</h2>

			<Input id="passwordInputResetPassword" type="password" placeholder="סיסמה חדשה" register={{ ...register('password') }} />
			{errors.password && <span className="mx-5">{errors.password.message}</span>}

			<Button label="עדכון סיסמה" />
		</form>
	);
};

export default resetPasswordForm;
