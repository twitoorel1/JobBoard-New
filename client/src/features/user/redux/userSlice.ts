import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from '@/types/global';
import { setCookie, getCookie, removeCookie } from '@/utils/cookies';
import { editPassword } from '../services/userSlice.service';

export const editPasswordByUserId = createAsyncThunk('user/editPasswordByUserId', async (userId: string, formValue: object) => {
	const data = await editPassword(userId, formValue);
	return data;
});

const initialState: UserState = {
	isLoading: false,
	error: '',
	isError: null,
	msg: '',
	user: null,
	allUsers: null
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
				state.error = action.error.message;
			})
			.addCase(editPasswordByUserId.fulfilled, (state, { payload }: any) => {
				state.isLoading = false;
				state.isError = false;
				state.error = '';
				state.msg = payload.msg;
			});
	}
});

export default userSlice.reducer;
