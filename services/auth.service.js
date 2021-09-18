import request from '../utils/request'

const sendOtp = async(emailOrPhone)=>{
	return await request('/user/otp/send',{data:{emailOrPhone},method:'POST'});
}

const signup = async(data)=>{
	return await request('/user/signup',{data,method:'POST'});
}

const signin = async(data)=>{
	return await request('/user/login',{data,method:'POST'});
}


export {
	sendOtp,signup,signin
}