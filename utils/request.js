
import axios from "axios";
import { parseCookies } from "nookies";

const request = async (url, params, headers = {}) => {
	let header = { "Content-Type": "application/json; charset=utf-8" };
	let reqestHeaders= { ...headers, ...header };

	const developement = process.env.NODE_ENV !== 'production'
	const baseURL = developement ? 'http://localhost:4400' : 'https://api.mvpilot.com';

	// console.log('params==========',params);
	if(params?.context){
		const cookies = parseCookies(params?.context);
		// console.log('cookies?.PILOT_AUTH',cookies?.PILOT_AUTH);
		if(cookies?.PILOT_AUTH){
			reqestHeaders= {...reqestHeaders, ...{ Authorization: `Bearer ${cookies?.PILOT_AUTH}` }};
		}
	}
	const config = {
		method: (params && params?.method) || "GET",
		url,
		baseURL,
		data: (params && params.data) || {},
		params: (params && params.params) || {},
		// withCredentials:true,
		headers:reqestHeaders
	};
	// console.log('config in request',config);
	try {
		const res = await axios(config);
		return res?.data;
	} catch (error) {
		console.log('error in request',error?.response?.data);
		throw error?.response?.data;
	}
};

export default request;