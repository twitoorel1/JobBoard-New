import * as Yup from 'yup';

const EditPasswordValidationSchema = Yup.object().shape({
	oldPassword: Yup.string().required(),
	newPassword: Yup.string().required(),
	confirmPassword: Yup.string().required()
});

export default EditPasswordValidationSchema;
