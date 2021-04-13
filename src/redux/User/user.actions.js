import { userTypes } from './user.types';

export const googleSignInStart = () => ({
	type: userTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (userCredentials) => ({
	type: userTypes.EMAIL_SIGN_IN_START,
	payload: userCredentials,
});

export const signInSuccess = (payload) => ({
	type: userTypes.SIGN_IN_SUCCESS,
	payload,
});

export const checkUserSession = () => ({ type: userTypes.CHECK_USER_SESSION });

export const signOutUserStart = () => ({ type: userTypes.SIGN_OUT_USER_START });

export const signOutUserSuccess = () => ({
	type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (payload) => ({
	type: userTypes.SIGN_UP_USER_START,
	payload,
});

export const userError = (payload) => ({ type: userTypes.USER_ERROR, payload });

export const resetPasswordStart = (payload) => ({
	type: userTypes.RESET_PASSWORD_START,
	payload,
});

export const resetPasswordSuccess = (payload = true) => ({
	type: userTypes.RESET_PASSWORD_SUCCESS,
	payload,
});

export const resetUserState = () => ({ type: userTypes.RESET_USER_STATE });
