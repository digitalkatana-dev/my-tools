import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Paper, Stack } from '@mui/material';
import {
  setView,
  toggleUpdate,
  setClientName,
  setAddress1,
  setAddress2,
  setCity,
  setState,
  setZipCode,
  getTimeZone,
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
  saveConfig,
  updateConfig,
  setCircuitErrors,
  clearCircuitErrors,
} from '../../../../../../redux/slices/circuitSlice';
import { processIPs } from '../../../../../../util/helpers';
import { validateConfigData } from '../../../../../../util/validator';
import {
  states,
  speedMeasurements,
  entryTypes,
  carriers,
  circuitTypes,
  taggedOptions,
  handoffOptions,
  cidrOptions,
  gwayLocOptions,
} from '../../../../../../util/data';
import TextInput from '../../../../../../components/TextInput';
import Select from '../../../../../../components/Select';
import RadioGroup from '../../../../../../components/RadioGroup';
import Button from '../../../../../../components/Button';
import './form.scss';

const ConfigForm = () => {
  const { theme } = useSelector((state) => state.app);
  const { activeUser } = useSelector((state) => state.user);
  const {
    update,
    clientName,
    address_1,
    address_2,
    city,
    state,
    zipCode,
    carrier,
    handoffType,
    isSymmetrical,
    speedUp,
    speedDn,
    measurement,
    entryType,
    timeZone,
    circuitType,
    isTagged,
    vlanId,
    ipAddress_1,
    ipAddress_2,
    cidr_1,
    cidr_2,
    homeIP,
    verveRouter,
    available,
    subnetMask,
    gateway,
    coreVerveGateway,
    verveRouterWan,
    wanMask,
    clientGateway,
    lanMask,
    gatewayLocation,
    dnsP,
    dnsS,
    tpLink,
    selectedConfig,
    circuitErrors,
  } = useSelector((state) => state.circuit);
  const dispatch = useDispatch();

  const handleIP = () => {
    const data = {
      circuitType,
      ipAddress1: ipAddress_1,
      gatewayLocation,
      ...(cidr_1 && { slash1: cidr_1 }),
      ...(dnsP && { dnsP }),
      ...(dnsS && { dnsS }),
      ...(ipAddress_2 && { ipAddress2: ipAddress_2 }),
      ...(cidr_2 && { slash2: cidr_2 }),
    };

    dispatch(setIPTemplate(processIPs(data)));
  };

  const handleFocus = () => {
    dispatch(clearCircuitErrors());
  };

  const handleChange = (input, value) => {
    const actionMap = {
      name: setClientName,
      add1: setAddress1,
      add2: setAddress2,
      city: setCity,
      state: setState,
      zip: setZipCode,
      carrier: setCarrier,
      handoff: setHandoffType,
      symm: setIsSymmetrical,
      up: setSpeedUp,
      dn: setSpeedDn,
      measure: setMeasurement,
      entry: setEntryType,
      circuit: setCircuitType,
      tag: setIsTagged,
      vlan: setVlanId,
      ip1: setIPAddress1,
      ip2: setIPAddress2,
      cidr1: setCidr1,
      cidr2: setCidr2,
      home: setHomeIP,
      vrvRtr: setVerveRouter,
      avail: setAvailable,
      sub: setSubnetMask,
      gate: setGateway,
      vrvGtwy: setCoreVerveGateway,
      vrvRtrW: setVerveRouterWan,
      wanM: setWanMask,
      cgtwy: setClientGateway,
      lanM: setLanMask,
      gwayLoc: setGatewayLocation,
      dns1: setDNSp,
      dns2: setDNSs,
      tp: setTPLink,
    };

    const action = actionMap[input];

    action && dispatch(action(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data;
    let configData;

    if (entryType === 'auto') {
      data = {
        circuitType,
        carrier,
        isSymmetrical,
        speedDn,
        measurement,
        ipAddress_1,
        cidr_1,
        gatewayLocation,
        clientName,
        address_1,
        city,
        state,
        zipCode,
        entryType,
        timeZone,
        isTagged,
        ...(speedUp && { speedUp }),
        ...(dnsP && { dnsP }),
        ...(dnsS && { dnsS }),
        ...(ipAddress_2 && { ipAddress_2 }),
        ...(cidr_2 && { cidr_2 }),
        ...(vlanId && { vlanId }),
      };

      ipAddress_1 && handleIP();
    } else if (entryType === 'manual') {
      if (circuitType === 'dia') {
        data = {
          network: ipAddress_1,
          verveRouter,
          available,
          subnetMask: `${subnetMask} ${cidr_1}`,
          gateway,
          dnsP,
          dnsS,
        };
      } else if (circuitType === 'nni') {
        data = {
          wanNetwork: ipAddress_1,
          coreVerveGateway,
          verveRouterWan,
          wanMask: `${wanMask} ${cidr_1}`,
          lanNetwork: ipAddress_2,
          clientGateway,
          available,
          lanMask: `${lanMask} ${cidr_2}`,
          dnsP,
          dnsS,
        };
      }

      dispatch(setIPTemplate(data));
    }

    if (update === true) {
      configData = {
        _id: selectedConfig?._id,
        ...(circuitType !== selectedConfig.circuitType && { circuitType }),
        ...(entryType !== selectedConfig.entryType && { entryType }),
        ...(carrier !== selectedConfig.carrier && { carrier }),
        ...(handoffType !== selectedConfig.handoffType && { handoffType }),
        ...(isSymmetrical !== selectedConfig.isSymmetrical && {
          isSymmetrical,
        }),
        ...(speedUp && speedUp !== selectedConfig.speedUp && { speedUp }),
        ...(speedDn !== selectedConfig.speedDn && { speedDn }),
        ...(measurement !== selectedConfig.measurement && { measurement }),
        ...(isTagged !== selectedConfig.isTagged && { isTagged }),
        ...(vlanId && vlanId !== selectedConfig.vlanId && { vlanId }),
        ...(ipAddress_1 !== selectedConfig.ipAddress_1 && { ipAddress_1 }),
        ...(cidr_1 !== selectedConfig.cidr_1 && { cidr_1 }),
        ...(coreVerveGateway &&
          coreVerveGateway !== selectedConfig.coreVerveGateway && {
            coreVerveGateway,
          }),
        ...(verveRouterWan &&
          verveRouterWan !== selectedConfig.verveRouterWan && {
            verveRouterWan,
          }),
        ...(wanMask && wanMask !== selectedConfig.wanMask && { wanMask }),
        ...(verveRouter &&
          verveRouter !== selectedConfig.verveRouter && { verveRouter }),
        ...(available &&
          available !== selectedConfig.available && { available }),
        ...(subnetMask &&
          subnetMask !== selectedConfig.subnetMask && { subnetMask }),
        ...(gateway && gateway !== selectedConfig.gateway && { gateway }),
        ...(ipAddress_2 &&
          ipAddress_2 !== selectedConfig.ipAddress_2 && { ipAddress_2 }),
        ...(cidr_2 && cidr_2 !== selectedConfig.cidr_2 && { cidr_2 }),
        ...(clientGateway &&
          clientGateway !== selectedConfig.clientGateway && { clientGateway }),
        ...(lanMask && lanMask !== selectedConfig.lanMask && { lanMask }),
        ...(dnsP && dnsP !== selectedConfig.dnsP && { dnsP }),
        ...(dnsS && dnsS !== selectedConfig.dnsS && { dnsS }),
        ...(homeIP && homeIP !== selectedConfig.homeIP && { homeIP }),
        ...(gatewayLocation !== selectedConfig.gatewayLocation && {
          gatewayLocation,
        }),
        ...(tpLink !== selectedConfig.tplink && { tpLink }),
        ...(clientName !== selectedConfig.clientName && { clientName }),
        ...(address_1 !== selectedConfig.address_1 && { address_1 }),
        ...(address_2 &&
          address_2 !== selectedConfig.address_2 && { address_2 }),
        ...(city !== selectedConfig.city && { city }),
        ...(state !== selectedConfig.state && { state }),
        ...(zipCode !== selectedConfig.zipCode && { zipCode }),
        ...(timeZone !== selectedConfig.timeZone && { timeZone }),
        user: selectedConfig?.user,
      };

      const { valid, errors } = validateConfigData(configData);

      if (!valid) {
        dispatch(setCircuitErrors(errors));
        return;
      }

      dispatch(updateConfig(configData));
      dispatch(setView('review'));
    } else {
      configData = {
        circuitType,
        entryType,
        carrier,
        handoffType,
        isSymmetrical,
        ...(speedUp && { speedUp }),
        speedDn,
        measurement,
        isTagged,
        ...(vlanId && { vlanId }),
        ipAddress_1,
        cidr_1,
        ...(coreVerveGateway && { coreVerveGateway }),
        ...(verveRouterWan && { verveRouterWan }),
        ...(wanMask && { wanMask }),
        ...(verveRouter && { verveRouter }),
        ...(available && { available }),
        ...(subnetMask && { subnetMask }),
        ...(gateway && { gateway }),
        ...(ipAddress_2 && { ipAddress_2 }),
        ...(cidr_2 && { cidr_2 }),
        ...(clientGateway && { clientGateway }),
        ...(lanMask && { lanMask }),
        ...(dnsP && { dnsP }),
        ...(dnsS && { dnsS }),
        ...(homeIP && { homeIP }),
        gatewayLocation,
        tpLink,
        clientName,
        address_1,
        ...(address_2 && { address_2 }),
        city,
        state,
        zipCode,
        timeZone,
        user: activeUser?._id,
      };

      const { valid, errors } = validateConfigData(configData);

      if (!valid) {
        dispatch(setCircuitErrors(errors));
        return;
      }

      dispatch(saveConfig(configData));
      dispatch(setView('review'));
    }
  };

  const DNSInputDisplay = () => {
    if (
      circuitType === 'dia' ||
      (circuitType === 'nni' && entryType === 'manual')
    ) {
      return (
        <div className='q-row'>
          <TextInput
            placeholder='Primary DNS'
            value={dnsP}
            onFocus={handleFocus}
            onChange={(e) => handleChange('dns1', e.target.value)}
            error={circuitErrors?.dnsP}
          />
          <TextInput
            placeholder='Secondary DNS'
            value={dnsS}
            onFocus={handleFocus}
            onChange={(e) => handleChange('dns2', e.target.value)}
            error={circuitErrors?.dnsS}
          />
        </div>
      );
    }
  };

  const handleTimeZone = useCallback(() => {
    dispatch(zipCode?.length === 5 ? getTimeZone(zipCode) : setTimeZone(''));
  }, [dispatch, zipCode]);

  useEffect(() => {
    handleTimeZone();
  }, [handleTimeZone]);

  return (
    <div id='config-form'>
      <Paper className={`${theme === 'dark' ? theme : ''}`} elevation={5}>
        <form onSubmit={handleSubmit}>
          <section>
            <Select
              fullWidth
              label='Circuit Type'
              options={circuitTypes}
              value={circuitType}
              onChange={(e) => handleChange('circuit', e.target.value)}
              onFocus={handleFocus}
              error={circuitErrors?.circuitType}
            />
            <Select
              fullWidth
              label='Entry Type'
              options={entryTypes}
              value={entryType}
              onChange={(e) => handleChange('entry', e.target.value)}
              onFocus={handleFocus}
              error={circuitErrors?.entryType}
            />
            <div className='q-row'>
              <div className='txt'>
                <Select
                  fullWidth
                  label='Carrier'
                  options={carriers}
                  value={carrier}
                  onChange={(e) => handleChange('carrier', e.target.value)}
                  onFocus={handleFocus}
                  error={circuitErrors?.carrier}
                />
              </div>
              <div className='radio'>
                <RadioGroup
                  row
                  label='Handoff'
                  value={handoffType}
                  onChange={(e) => handleChange('handoff', e.target.value)}
                  options={handoffOptions}
                />
              </div>
            </div>
          </section>
          <section>
            <RadioGroup
              row
              label='Symmetrical?'
              value={isSymmetrical}
              onChange={(e) => handleChange('symm', e.target.value)}
              options={taggedOptions}
            />
            <div className='q-row'>
              {isSymmetrical === 'no' && (
                <TextInput
                  placeholder='Speed Up'
                  value={speedUp}
                  onFocus={handleFocus}
                  onChange={(e) => handleChange('up', e.target.value)}
                />
              )}
              <TextInput
                placeholder='Speed Down'
                value={speedDn}
                onFocus={handleFocus}
                onChange={(e) => handleChange('dn', e.target.value)}
                error={circuitErrors?.speedDn}
              />
              <Select
                fullWidth
                label='Measure'
                options={speedMeasurements}
                value={measurement}
                onChange={(e) => handleChange('measure', e.target.value)}
                onFocus={handleFocus}
                error={circuitErrors?.measurement}
              />
            </div>
            {circuitType === 'nni' && (
              <div className='q-row'>
                <div className='radio'>
                  <RadioGroup
                    row
                    label='Tagged?'
                    value={isTagged}
                    onChange={(e) => handleChange('tag', e.target.value)}
                    options={taggedOptions}
                  />
                </div>
                {isTagged === 'yes' && (
                  <div className='txt'>
                    <TextInput
                      placeholder='VLAN'
                      value={vlanId}
                      onFocus={handleFocus}
                      onChange={(e) => handleChange('vlan', e.target.value)}
                      error={circuitErrors?.vlanId}
                    />
                  </div>
                )}
              </div>
            )}
            <div className='q-row'>
              <TextInput
                placeholder='IP Address 1'
                value={ipAddress_1}
                onFocus={handleFocus}
                onChange={(e) => handleChange('ip1', e.target.value)}
                error={circuitErrors?.ipAddress_1}
              />
              <Select
                style={{ width: '30%' }}
                label='Subnet'
                options={cidrOptions}
                value={cidr_1}
                onChange={(e) => handleChange('cidr1', e.target.value)}
                error={circuitErrors?.cidr_1}
              />
            </div>
            {circuitType === 'nni' && entryType === 'manual' && (
              <>
                <TextInput
                  placeholder='Core/Verve Gateway'
                  value={coreVerveGateway}
                  onFocus={handleFocus}
                  onChange={(e) => handleChange('vrvGtwy', e.target.value)}
                />
                <TextInput
                  placeholder='Verve Router Wan'
                  value={verveRouterWan}
                  onFocus={handleFocus}
                  onChange={(e) => handleChange('vrvRtrW', e.target.value)}
                />
                <TextInput
                  placeholder='Subnet Mask'
                  value={wanMask}
                  onFocus={handleFocus}
                  onChange={(e) => handleChange('wanM', e.target.value)}
                />
              </>
            )}
            {circuitType === 'nni' && (
              <div className='q-row'>
                <TextInput
                  placeholder='IP Address 2'
                  value={ipAddress_2}
                  onFocus={handleFocus}
                  onChange={(e) => handleChange('ip2', e.target.value)}
                  error={circuitErrors?.ipAddress_2}
                />
                <Select
                  style={{ width: '30%' }}
                  label='Subnet'
                  options={cidrOptions}
                  value={cidr_2}
                  onFocus={handleFocus}
                  onChange={(e) => handleChange('cidr2', e.target.value)}
                  error={circuitErrors?.cidr_2}
                />
              </div>
            )}
            {circuitType === 'dia' && entryType === 'manual' && (
              <TextInput
                placeholder='Verve Router'
                value={verveRouter}
                onFocus={handleFocus}
                onChange={(e) => handleChange('vrvRtr', e.target.value)}
              />
            )}
            {circuitType === 'nni' && entryType === 'manual' && (
              <TextInput
                placeholder='Verve Router Lan/Client Gateway'
                value={clientGateway}
                onFocus={handleFocus}
                onChange={(e) => handleChange('cgtwy', e.target.value)}
              />
            )}
            {circuitType !== '' && entryType === 'manual' && (
              <TextInput
                placeholder='Available IPs'
                value={available}
                onFocus={handleFocus}
                onChange={(e) => handleChange('avail', e.target.value)}
              />
            )}
            {circuitType === 'dia' && entryType === 'manual' && (
              <TextInput
                placeholder='Subnet Mask'
                value={subnetMask}
                onFocus={handleFocus}
                onChange={(e) => handleChange('sub', e.target.value)}
              />
            )}
            {circuitType === 'dia' && entryType === 'manual' && (
              <TextInput
                placeholder='Gateway'
                value={gateway}
                onFocus={handleFocus}
                onChange={(e) => handleChange('gate', e.target.value)}
              />
            )}
            {circuitType === 'nni' && entryType === 'manual' && (
              <TextInput
                placeholder='Subnet Mask'
                value={lanMask}
                onFocus={handleFocus}
                onChange={(e) => handleChange('lanM', e.target.value)}
              />
            )}
            {DNSInputDisplay()}
          </section>
          <TextInput
            placeholder='Home IP (for Winbox)'
            value={homeIP}
            onFocus={handleFocus}
            onChange={(e) => handleChange('home', e.target.value)}
          />
          {entryType === 'auto' && (
            <section>
              <RadioGroup
                row
                label='Gateway Location'
                value={gatewayLocation}
                onChange={(e) => handleChange('gwayLoc', e.target.value)}
                options={gwayLocOptions}
              />
            </section>
          )}
          <section>
            <RadioGroup
              row
              label='TP-Link?'
              value={tpLink}
              onChange={(e) => handleChange('tp', e.target.value)}
              options={taggedOptions}
            />
          </section>
          <section>
            <TextInput
              placeholder='Client Name'
              value={clientName}
              onFocus={handleFocus}
              onChange={(e) => handleChange('name', e.target.value)}
              error={circuitErrors?.clientName}
            />
            <div className='address'>
              <TextInput
                placeholder='Address 1'
                value={address_1}
                onFocus={handleFocus}
                onChange={(e) => handleChange('add1', e.target.value)}
                error={circuitErrors?.address_1}
              />
              <TextInput
                placeholder='Address 2'
                value={address_2}
                onFocus={handleFocus}
                onChange={(e) => handleChange('add2', e.target.value)}
              />
              <div className='q-row'>
                <TextInput
                  placeholder='City'
                  value={city}
                  onFocus={handleFocus}
                  onChange={(e) => handleChange('city', e.target.value)}
                  error={circuitErrors?.city}
                />
                <Select
                  fullWidth
                  label='State'
                  options={states}
                  value={state}
                  onFocus={handleFocus}
                  onChange={(e) => handleChange('state', e.target.value)}
                  error={circuitErrors?.state}
                />
                <TextInput
                  placeholder='Zip Code'
                  value={zipCode}
                  onFocus={handleFocus}
                  onChange={(e) => handleChange('zip', e.target.value)}
                  error={circuitErrors?.zipCode}
                />
              </div>
            </div>
          </section>
          <Button type='submit'>Submit</Button>
        </form>
      </Paper>
    </div>
  );
};

export default ConfigForm;
