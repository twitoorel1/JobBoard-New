import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from '@/types/global';
import { setCookie, getCookie, removeCookie } from '@/utils/cookies';
import { editPassword, updateUser } from '../services/userSlice.service';
import { UpdateProfileSuccess, UpdatePasswordSuccess, UpdatePasswordError, UpdateProfileError } from '@/features/constants/lang';

export const editPasswordByUserId = createAsyncThunk('user/editPasswordByUserId', async (formValue: object) => {
	const data = await editPassword(formValue);
	return data;
});

export const editProfileByUserId = createAsyncThunk('user/editProfileByUserId', async (formValue: object) => {
	const data = await updateUser(formValue);
	return data;
});

const initialState: UserState = {
	isLoading: false,
	error: '',
	isError: null,
	msg: '',
	errorCode: null
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// Handle Edit Password By User Id
			.addCase(editPasswordByUserId.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(editPasswordByUserId.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = UpdatePasswordError;
				state.errorCode = 'U-200';
			})
			.addCase(editPasswordByUserId.fulfilled, (state, { payload }: any) => {
				state.isLoading = false;
				state.isError = false;
				state.error = '';
				state.msg = UpdatePasswordSuccess;
			})
			// Handle Edit Profile By User Id
			.addCase(editProfileByUserId.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(editProfileByUserId.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = UpdateProfileError;
				state.errorCode = 'U-201';
			})
			.addCase(editProfileByUserId.fulfilled, (state, { payload }: any) => {
				state.isLoading = false;
				state.isError = false;
				state.error = '';
				state.msg = UpdateProfileSuccess;
			});
	}
});

export default userSlice.reducer;
