import React from 'react';
import { FormLoginInputs } from '@/types/global';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { loginByPayload } from '../redux/authenticationSlice';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginValidationSchema from '../validations/loginSchema.validation';

import Input from '@/components/common/Input';
import Link from '@/components/common/Link';
import Button from '@/components/common/Button';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormLoginInputs>({
		resolver: yupResolver(loginValidationSchema),
		defaultValues: {
			username: '',
			password: ''
		},
		mode: 'onBlur',
		reValidateMode: 'onChange'
	});

	const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

	const onSubmitLogin = async (data: FormLoginInputs) => {
		await dispatch(loginByPayload(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmitLogin)}>
			<h2 className="my-10 text-2xl font-bold text-center lg:text-3xl">התחברות</h2>

			<Input id="loginUsernameInput" type="text" placeholder="שם משתמש" register={{ ...register('username') }} />
			{errors.username && <span className="mx-5">{errors.username.message}</span>}

			<Input id="loginPasswordInput" type="password" placeholder="סיסמה" register={{ ...register('password') }} />
			{errors.password && <span className="mx-5">{errors.password.message}</span>}

			<div className="my-5">
				<Link className="my-5" href="/authentication/forgotPassword" label="שכחת את הסיסמא?" />
			</div>

			<Button label="התחבר" />
		</form>
	);
};

export default LoginForm;
