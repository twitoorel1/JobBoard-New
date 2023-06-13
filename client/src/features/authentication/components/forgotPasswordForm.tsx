import React from 'react';
import { ForgotPasswordInputs } from '@/types/global';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { forgotPasswordByEmail } from '../redux/authenticationSlice';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import forgotPasswordSchema from '../validations/forgotPasswordSchema.validation';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const forgotPasswordForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ForgotPasswordInputs>({
		resolver: yupResolver(forgotPasswordSchema),
		defaultValues: { email: '' },
		mode: 'onBlur',
		reValidateMode: 'onBlur'
	});
	const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

	const onSubmitForgotPassword: SubmitHandler<ForgotPasswordInputs> = async data => {
		const { email } = data;
		await dispatch(forgotPasswordByEmail(email));
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForgotPassword)}>
			<h2 className="my-10 text-2xl font-bold text-center lg:text-3xl">שחזור סיסמה</h2>

			<Input id="emailInputForgotPassword" type="email" placeholder="אימייל" register={{ ...register('email') }} />
			{errors.email && <span className="mx-5">{errors.email.message}</span>}

			<Button label="שחזור סיסמה" />
		</form>
	);
};

export default forgotPasswordForm;
