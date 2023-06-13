import * as Yup from 'yup';

const ResetPasswordSchema = Yup.object().shape({
	password: Yup.string().required()
});

export default ResetPasswordSchema;
