import * as Yup from 'yup';

const editProfileValidationSchema = Yup.object().shape({
	firstName: Yup.string(),
	lastName: Yup.string(),
	email: Yup.string().email(),
	username: Yup.string()
});

export default editProfileValidationSchema;
