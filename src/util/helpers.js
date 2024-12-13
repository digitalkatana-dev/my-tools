export const randomPassword = (length) => {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
	let result = '';
	const charactersLength = characters.length;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

export const randomPin = (length) => {
	const characters = '0123456789';
	let result = '';
	const charactersLength = characters.length;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

export const phoneFormatter = (number) => {
	if (number) {
		if (number.length !== 10 || !/^\d{10}$/.test(number)) {
			throw new Error('Input must be a 10-digit number.');
		}
	}

	const areaCode = number?.slice(0, 3);
	const prefix = number?.slice(3, 6);
	const lineNumber = number?.slice(6);

	return `(${areaCode}) ${prefix}-${lineNumber}`;
};
