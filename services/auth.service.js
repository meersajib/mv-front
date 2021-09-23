import request from '../utils/request'

export const sendOtp = async (emailOrPhone) => {
	return await request('/user/otp/send', { data: { emailOrPhone }, method: 'POST' });
}

export const signup = async (data) => {
	return await request('/user/signup', { data, method: 'POST' });
}

export const signin = async (data) => {
	return await request('/user/login', { data, method: 'POST' });
}

export const getProfile = async (context = null) => {
	return await request('/user/profile', { context });
}

export const userUpdate = async (data) => {
	return await request('/user/update', { data, method:'POST' });
}

export const changePassword = async (data) => {
	return await request('/user/changePassword', { data, method:'POST' });
}
