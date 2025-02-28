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

function descendingComparator(a, b, orderBy) {
	if (a[orderBy] === null) {
		return 1;
	}
	if (b[orderBy] === null) {
		return -1;
	}
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}
export function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

export const masterRows = () => {
	const createData = (slash, addresses, hosts, netmask, amount) => {
		return {
			slash,
			addresses,
			hosts,
			netmask,
			amount,
		};
	};

	const options = [
		createData('/30', '4', '2', '255.255.255.252', '1/64'),
		createData('/29', '8', '6	', '255.255.255.248	', '1/32'),
		createData('/28', '16', '14', '255.255.255.240', '1/16'),
		createData('/27', '32', '30', '255.255.255.224	', '1/8'),
		createData('/26', '64', '62', '255.255.255.192', '1/4'),
		createData('/25', '128', '126', '255.255.255.128', '1/2'),
		createData('/24', '256', '254	', '255.255.255.0', '1'),
		createData('/23', '512', '510', '255.255.254.0', '2'),
		createData('/22', '1024', '1022', '255.255.252.0', '4'),
		createData('/21', '2048', '2046', '255.255.248.0', '8'),
		createData('/20', '4096', '4094', '255.255.240.0', '16'),
		createData('/19', '8192', '8190', '255.255.224.0', '32'),
		createData('/18', '16384', '16382', '255.255.192.0', '64'),
		createData('/17', '32768', '32766	', '255.255.128.0', '128'),
		createData('/16', '65536', '65534', '255.255.0.0', '256'),
	];

	return options;
};

export const emptyRows = (page, rowsPerPage, arrayLength) => {
	return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
};
