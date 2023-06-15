import * as Yup from 'yup';
import { passwordRegex } from '@/features/constants/regex.constant';

const EditPasswordValidationSchema = Yup.object().shape({
	oldPassword: Yup.string().required('הסיסמה הנוכחית היא חובה'),
	newPassword: Yup.string().required('הסיסמה החדשה היא חובה').matches(passwordRegex, 'הסיסמה שהזנת לא תקינה'),
	confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'הסיסמה חייבת להיות זהה לסיסמה החדשה')
});

export default EditPasswordValidationSchema;
