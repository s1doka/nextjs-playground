import ky from "ky-universal";
import {AuthenticationTokenRequest, NewsRequest} from "../types/Letterboxd";

const LETTERBOXD_HOST = process.env.NEXT_PUBLIC_LETTERBOXD_HOST;

function createAuthenticationTokenFormData(formValues: object): FormData {
	const formData = new FormData();

	Object.keys(formValues).forEach((key) => formData.append(key, formValues[key]));

	return formData;
}

async function generateAuthenticationToken(
	{grantType, password, username}: AuthenticationTokenRequest,
) {
	const body = createAuthenticationTokenFormData({grantType, password, username});

	try {
		const response = ky.post(`${LETTERBOXD_HOST}/auth/token`, {body});
		return response;
	} catch (error) {
		console.log({error});
	}
}

async function getNews(params?: NewsRequest) {
	try {
		return ky.get(`${LETTERBOXD_HOST}/news`).json();
	} catch (error) {
		console.log({error});
	}
}

export {generateAuthenticationToken, getNews};
