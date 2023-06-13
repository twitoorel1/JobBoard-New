import { combineReducers } from 'redux';
import authReducer from '@/features/authentication/redux/authenticationSlice';
import userReducer from '@/features/user/redux/userSlice';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
