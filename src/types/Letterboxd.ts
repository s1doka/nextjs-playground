// A cursor is a string value provided by the API. It should be treated as an opaque value — don’t change it.
export type Cursor = string;

export type AuthenticationTokenGrantType = "password";

export type AuthenticationTokenRequest = {
	grantType: AuthenticationTokenGrantType;
	username: string;
	password: string;
};

export type Image = {
	sizes: Array<ImageSize>;
};

export type ImageSize = {
	width: number;
	height: number;
	url: string;
};

export type NewsItem = {
	title: string;
	image: Image;
	url: string;
	shortDescription: string;
	longDescription: string;
};

export type NewsRequest = {
	cursor: Cursor;
	perPage: number;
};
