import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const { exp } = jwtDecode(token);
    return Date.now() >= exp * 1000;
  } catch (e) {}
};

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

const formatCarrier = (str) => {
  if (!str || typeof str !== 'string') return str;

  const trimmed = str.trim();
  const lower = trimmed.toLowerCase();

  if (lower.startsWith('att') || lower.startsWith('at&t'))
    return trimmed.toUpperCase();

  return trimmed
    .toLowerCase()
    .replace(/\b([a-z])/g, (match) => match.toUpperCase());
};

export const processIPs = (data) => {
  const {
    circuitType,
    slash1,
    ipAddress1,
    dnsP,
    dnsS,
    slash2,
    ipAddress2,
    gatewayLocation,
  } = data;

  const maskMap = {
    '/30': '255.255.255.252 /30',
    '/29': '255.255.255.248 /29',
    '/28': '255.255.255.240 /28',
    '/27': '255.255.255.224 /27',
    '/26': '255.255.255.192 /26',
    '/25': '255.255.255.128 /25',
    '/24': '255.255.255.0 /24',
    '/23': '255.255.254.0 /23',
    '/22': '255.255.252.0 /22',
    '/21': '255.255.248.0 /21',
    '/20': '255.255.240.0 /20',
    '/19': '255.255.224.0 /19',
    '/18': '255.255.192.0 /18',
    '/17': '255.255.128.0 /17',
    '/16': '255.255.0.0 /16',
  };

  const parseIP = (ip) => {
    const [a, b, c, d] = ip?.split('.').map(Number);
    return {
      base: `${a}.${b}.${c}.`,
      last: d,
    };
  };

  const usableHosts = (slash) =>
    Math.pow(2, 32 - Number(slash?.replace('/', ''))) - 2;

  const buildRange = (base, start, end) => `${base}${start} - ${base}${end}`;

  if (circuitType === 'dia') {
    const { base, last } = parseIP(ipAddress1);
    const hosts = usableHosts(slash1);

    const firstUsable = last + 1;
    const lastUsable = last + hosts;

    const verveRouter =
      gatewayLocation === 'beg'
        ? `${base}${firstUsable + 1}`
        : `${base}${firstUsable}`;

    const available =
      gatewayLocation === 'beg'
        ? buildRange(base, firstUsable + 2, lastUsable)
        : buildRange(base, firstUsable + 1, lastUsable - 1);
    const gateway =
      gatewayLocation === 'beg'
        ? `${base}${firstUsable}`
        : `${base}${lastUsable}`;

    return {
      network: ipAddress1,
      verveRouter,
      available,
      subnetMask: maskMap[slash1],
      gateway,
      dnsP,
      dnsS,
    };
  }

  if (circuitType === 'nni') {
    const wan = parseIP(ipAddress1);
    const lan = parseIP(ipAddress2);
    const lanHosts = usableHosts(slash2);

    const firstUsable = lan.last + 1;
    const lastUsable = lan.last + lanHosts;

    const clientGateway =
      gatewayLocation === 'beg'
        ? `${lan.base}${firstUsable}`
        : `${lan.base}${lastUsable}`;
    const available =
      gatewayLocation === 'beg'
        ? buildRange(lan.base, firstUsable + 1, lastUsable)
        : buildRange(lan.base, firstUsable, lastUsable - 1);

    return {
      wanNetwork: ipAddress1,
      coreVerveGateway: `${wan.base}${wan.last + 1}`,
      verveRouterWan: `${wan.base}${wan.last + 2}`,
      wanMask: maskMap[slash1] || '255.255.255.252 /30',

      lanNetwork: ipAddress2,
      clientGateway,
      available,
      lanMask: maskMap[slash2],

      dnsP: '208.67.222.222',
      dnsS: '207.7.100.100',
    };
  }

  return null;
};

export const processInterfaceName = (data) => {
  let { carrier, speedDn, measurement } = data;
  carrier = carrier.toUpperCase();

  const nameString = `${carrier} ${speedDn}${measurement}`;

  const interfaceName = nameString?.replaceAll(' ', '_');

  return interfaceName;
};

export const processClientLocation = (data) => {
  const { address_1, address_2, city, state, zipCode } = data;

  const nameString = `${address_1} ${
    address_2 ? address_2 : ''
  } ${city} ${state} ${zipCode}`;

  return nameString;
};

export const processCircuitName = (data) => {
  const { clientName, city, carrier, speedDn, measurement } = data;

  const nameString = `${clientName} ${city} ${carrier} ${speedDn}${measurement}`;

  const circuitName = nameString?.replaceAll(' ', '_').replaceAll('/', '_');

  return circuitName;
};

export const processCircuitSpeed = (data) => {
  const { speedUp, speedDn, measurement } = data;

  let maxLimit;
  if (speedUp) {
    maxLimit = `${speedUp + measurement}/${speedDn + measurement}`;
  } else {
    maxLimit = `${speedDn + measurement}/${speedDn + measurement}`;
  }

  return maxLimit;
};
