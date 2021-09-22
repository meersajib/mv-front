
import axios from "axios";

const request = async (url, params, headers = {}) => {
	let header = { "Content-Type": "application/json; charset=utf-8" };
	headers && (headers = { ...headers, ...header });

	const developement = process.env.NODE_ENV !== 'production'
	const baseURL = developement ? 'http://localhost:4400' : 'https://api.mvpilot.com';

	const config = {
		method: (params && params?.method) || "GET",
		url,
		baseURL,
		data: (params && params.data) || {},
		params: (params && params.params) || {},
		withCredentials:true
	};

	try {
		const res = await axios(config);
		return res?.data;
	} catch (error) {
		throw error?.response?.data;
	}
};

export default request;