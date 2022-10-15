import * as yup from "yup";

const phoneRegExp = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
	

const schemaForNewContact = yup.object({
		name: yup.string()
			.min(2, 'In the name must be minimum 2 letters')
			.max(15, 'In the name must be maximum 15 letters')
			.required('Name is a required field'),
		number: yup.string()
			.matches(phoneRegExp, 'Invalid number')
		.required('Number is a required field'),
}).required();

const schemaForSignupUser = yup.object({
		name: yup.string()
			.min(2, 'In the name must be minimum 2 letters')
			.max(15, 'In the name must be maximum 15 letters')
			.required('Name is a required field'),
		email: yup.string()
			.email('This Email invalid')
		.required('Email is a required field'),
	password: yup.string()
			.min(8, 'In your password must be minimum 8 symbols')
			.max(15, 'In your password must be maximum 15 symbols')
		.required('Password is a required field'),
}).required();

const schemaForLoginUser = yup.object({
		email: yup.string()
			.email('Invalid Email')
		.required('Email is a required field'),
		password: yup.string()
			.min(8, 'In your password must be minimum 8 symbols')
			.max(15, 'In your password must be maximum 15 symbols')
		.required('Password is a required field'),
}).required();

export {schemaForNewContact, schemaForSignupUser, schemaForLoginUser}