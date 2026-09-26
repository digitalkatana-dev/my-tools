import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { getProfile } from './userSlice';
import toolsApi from '../../api/toolsApi';

export const getTimeZone = createAsyncThunk(
  'config/get_time_zone',
  async (data, { rejectWithValue }) => {
    try {
      const res = await toolsApi.get(`/config/timezone/${data}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const saveConfig = createAsyncThunk(
  'config/save_config',
  async (data, { dispatch, rejectWithValue }) => {
    const { user } = data;
    try {
      const res = await toolsApi.post('/config', data);
      const { success } = res.data;
      if (success) dispatch(getProfile(user));
      return success;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const updateConfig = createAsyncThunk(
  'config/update_config',
  async (data, { dispatch, rejectWithValue }) => {
    const { _id, user } = data;
    try {
      const res = await toolsApi.put(`/config/${_id}`, data);
      const { success } = res.data;
      if (success) dispatch(getProfile(user));
      return success;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const deleteConfig = createAsyncThunk(
  'config/delete_config',
  async (data, { dispatch, rejectWithValue }) => {
    const { activeUser, configId } = data;
    try {
      const res = await toolsApi.delete(`/config/${configId}`);
      const { success } = res.data;
      if (success) {
        dispatch(getProfile(activeUser));
      }
      return success;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const circuitAdapter = createEntityAdapter();
const initialState = circuitAdapter.getInitialState({
  loading: false,
  tabValue: 0,
  view: 'form',
  update: false,
  circuitType: '',
  entryType: '',
  carrier: '',
  handoffType: 'copper',
  isSymmetrical: 'yes',
  speedUp: '',
  speedDn: '',
  measurement: '',
  isTagged: 'no',
  vlanId: '',
  ipAddress_1: '',
  cidr_1: '',
  coreVerveGateway: '',
  verveRouterWan: '',
  wanMask: '',
  ipAddress_2: '',
  cidr_2: '',
  clientGateway: '',
  available: '',
  lanMask: '',
  dnsP: '',
  dnsS: '',
  homeIP: '',
  gatewayLocation: 'beg',
  tpLink: 'no',
  clientName: '',
  address_1: '',
  address_2: '',
  city: '',
  state: '',
  zipCode: '',
  timeZone: '',
  verveRouter: '',
  subnetMask: '',
  gateway: '',
  ipTemplate: null,
  selectedConfig: null,
  circuitSuccess: null,
  circuitErrors: null,
});

export const circuitSlice = createSlice({
  name: 'circuit',
  initialState,
  reducers: {
    setCircuitTabValue: (state, action) => {
      state.tabValue = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
    toggleUpdate: (state, action) => {
      state.update = action.payload;
    },
    setClientName: (state, action) => {
      state.clientName = action.payload;
    },
    setAddress1: (state, action) => {
      state.address_1 = action.payload;
    },
    setAddress2: (state, action) => {
      state.address_2 = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
    setTimeZone: (state, action) => {
      state.timeZone = action.payload;
    },
    setCarrier: (state, action) => {
      state.carrier = action.payload;
    },
    setHandoffType: (state, action) => {
      state.handoffType = action.payload;
    },
    setIsSymmetrical: (state, action) => {
      state.isSymmetrical = action.payload;
      if (action.payload === 'yes') state.speedUp = '';
    },
    setSpeedUp: (state, action) => {
      state.speedUp = action.payload;
    },
    setSpeedDn: (state, action) => {
      state.speedDn = action.payload;
    },
    setMeasurement: (state, action) => {
      state.measurement = action.payload;
    },
    setEntryType: (state, action) => {
      state.entryType = action.payload;
    },
    setCircuitType: (state, action) => {
      state.circuitType = action.payload;
      if (action.payload === 'nni') state.cidr_1 = '/30';
    },
    setIsTagged: (state, action) => {
      state.isTagged = action.payload;
      if (action.payload === 'no') state.vlanId = '';
    },
    setVlanId: (state, action) => {
      state.vlanId = action.payload;
    },
    setIPAddress1: (state, action) => {
      state.ipAddress_1 = action.payload;
    },
    setIPAddress2: (state, action) => {
      state.ipAddress_2 = action.payload;
    },
    setCidr1: (state, action) => {
      state.cidr_1 = action.payload;
    },
    setCidr2: (state, action) => {
      state.cidr_2 = action.payload;
    },
    setHomeIP: (state, action) => {
      state.homeIP = action.payload;
    },
    setVerveRouter: (state, action) => {
      state.verveRouter = action.payload;
    },
    setAvailable: (state, action) => {
      state.available = action.payload;
    },
    setSubnetMask: (state, action) => {
      state.subnetMask = action.payload;
    },
    setGateway: (state, action) => {
      state.gateway = action.payload;
    },
    setCoreVerveGateway: (state, action) => {
      state.coreVerveGateway = action.payload;
    },
    setVerveRouterWan: (state, action) => {
      state.verveRouterWan = action.payload;
    },
    setWanMask: (state, action) => {
      state.wanMask = action.payload;
    },
    setClientGateway: (state, action) => {
      state.clientGateway = action.payload;
    },
    setLanMask: (state, action) => {
      state.lanMask = action.payload;
    },
    setGatewayLocation: (state, action) => {
      state.gatewayLocation = action.payload;
    },
    setDNSp: (state, action) => {
      state.dnsP = action.payload;
    },
    setDNSs: (state, action) => {
      state.dnsS = action.payload;
    },
    setTPLink: (state, action) => {
      state.tpLink = action.payload;
    },
    setIPTemplate: (state, action) => {
      state.ipTemplate = action.payload;
    },
    populateForm: (state, action) => {
      state.update = true;
      state.clientName = action.payload.clientName;
      state.address_1 = action.payload.address_1;
      state.address_2 = action.payload.address_2;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zipCode = action.payload.zipCode;
      state.timeZone = action.payload.timeZone;
      state.carrier = action.payload.carrier;
      state.handoffType = action.payload.handoffType;
      state.isSymmetrical = action.payload.isSymmetrical;
      state.speedUp = action.payload.speedUp;
      state.speedDn = action.payload.speedDn;
      state.measurement = action.payload.measurement;
      state.entryType = action.payload.entryType;
      state.circuitType = action.payload.circuitType;
      state.isTagged = action.payload.isTagged;
      state.vlanId = action.payload.vlanId;
      state.ipAddress_1 = action.payload.ipAddress_1;
      state.ipAddress_2 = action.payload.ipAddress_2;
      state.cidr_1 = action.payload.cidr_1;
      state.cidr_2 = action.payload.cidr_2;
      state.homeIP = action.payload.homeIP;
      state.verveRouter = action.payload.verveRouter;
      state.available = action.payload.available;
      state.subnetMask = action.payload.subnetMask;
      state.gateway = action.payload.gateway;
      state.coreVerveGateway = action.payload.coreVerveGateway;
      state.verveRouterWan = action.payload.verveRouterWan;
      state.wanMask = action.payload.wanMask;
      state.clientGateway = action.payload.clientGateway;
      state.lanMask = action.payload.lanMask;
      state.gatewayLocation = action.payload.gatewayLocation;
      state.dnsP = action.payload.dnsP;
      state.dnsS = action.payload.dnsS;
      state.tpLink = action.payload.tpLink;
      state.selectedConfig = action.payload;
    },
    setCircuitErrors: (state, action) => {
      state.circuitErrors = action.payload;
    },
    clearForm: (state) => {
      state.update = false;
      state.clientName = '';
      state.address_1 = '';
      state.address_2 = '';
      state.city = '';
      state.state = '';
      state.zipCode = '';
      state.timeZone = '';
      state.carrier = '';
      state.handoffType = 'copper';
      state.isSymmetrical = 'yes';
      state.speedUp = '';
      state.speedDn = '';
      state.measurement = '';
      state.entryType = '';
      state.circuitType = '';
      state.isTagged = 'no';
      state.vlanId = '';
      state.ipAddress_1 = '';
      state.ipAddress_2 = '';
      state.cidr_1 = '';
      state.cidr_2 = '';
      state.homeIP = '';
      state.verveRouter = '';
      state.available = '';
      state.subnetMask = '';
      state.gateway = '';
      state.coreVerveGateway = '';
      state.verveRouterWan = '';
      state.wanMask = '';
      state.clientGateway = '';
      state.lanMask = '';
      state.gatewayLocation = 'beg';
      state.dnsP = '';
      state.dnsS = '';
      state.tpLink = 'no';
      state.ipTemplate = null;
      state.selectedConfig = null;
    },
    clearCircuitSuccess: (state) => {
      state.circuitSuccess = null;
    },
    clearCircuitErrors: (state) => {
      state.circuitErrors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTimeZone.pending, (state) => {
        state.loading = true;
        state.circuitErrors = null;
      })
      .addCase(getTimeZone.fulfilled, (state, action) => {
        state.loading = false;
        state.timeZone = action.payload;
      })
      .addCase(getTimeZone.rejected, (state, action) => {
        state.loading = false;
        state.circuitErrors = action.payload;
      })
      .addCase(saveConfig.pending, (state) => {
        state.loading = true;
        state.circuitErrors = null;
      })
      .addCase(saveConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.circuitSuccess = action.payload;
        state.circuitErrors = null;
      })
      .addCase(saveConfig.rejected, (state, action) => {
        state.loading = false;
        state.circuitErrors = action.payload ?? null;
      })
      .addCase(updateConfig.pending, (state) => {
        state.loading = true;
        state.circuitErrors = null;
      })
      .addCase(updateConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.circuitSuccess = action.payload;
        state.circuitErrors = null;
      })
      .addCase(updateConfig.rejected, (state, action) => {
        state.loading = false;
        state.circuitErrors = action.payload;
      })
      .addCase(deleteConfig.pending, (state) => {
        state.loading = true;
        state.circuitErrors = null;
      })
      .addCase(deleteConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.circuitSuccess = action.payload;
        state.circuitErrors = null;
      })
      .addCase(deleteConfig.rejected, (state, action) => {
        state.loading = false;
        state.circuitErrors = action.payload;
      });
  },
});

export const {
  setCircuitTabValue,
  setView,
  toggleUpdate,
  setClientName,
  setAddress1,
  setAddress2,
  setCity,
  setState,
  setZipCode,
  setTimeZone,
  setCarrier,
  setHandoffType,
  setIsSymmetrical,
  setSpeedUp,
  setSpeedDn,
  setMeasurement,
  setEntryType,
  setCircuitType,
  setIsTagged,
  setVlanId,
  setIPAddress1,
  setIPAddress2,
  setCidr1,
  setCidr2,
  setHomeIP,
  setVerveRouter,
  setAvailable,
  setSubnetMask,
  setGateway,
  setCoreVerveGateway,
  setVerveRouterWan,
  setWanMask,
  setClientGateway,
  setLanMask,
  setGatewayLocation,
  setDNSp,
  setDNSs,
  setTPLink,
  setIPTemplate,
  populateForm,
  setCircuitErrors,
  clearForm,
  clearCircuitSuccess,
  clearCircuitErrors,
} = circuitSlice.actions;

export default circuitSlice.reducer;
