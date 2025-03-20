import React from 'react';
import './template.scss';

export const DIA = () => {
	return (
		<form>
			<div className='form-group'>
				<label htmlFor='network'>Network:</label>
				<input type='text' id='network' name='network' />
			</div>
			<div className='form-group'>
				<label htmlFor='router'>Verve Router:</label>
				<input type='text' id='router' name='router' />
			</div>
			<div className='form-group'>
				<label htmlFor='available'>Available IPs:</label>
				<textarea id='available' name='available' rows={1} />
			</div>
			<div className='form-group'>
				<label htmlFor='mask'>Subnet Mask:</label>
				<input type='text' id='mask' name='mask' />
			</div>
			<div className='form-group'>
				<label htmlFor='gateway'>Gateway:</label>
				<input type='text' id='gateway' name='gateway' />
			</div>
			<div className='form-group'>
				<label htmlFor='dnsp'>DNS Primary:</label>
				<input type='text' id='dnsp' name='dnsp' />
			</div>
			<div className='form-group'>
				<label htmlFor='dnss'>DNS Secondary:</label>
				<input type='text' id='dnss' name='dnss' />
			</div>
		</form>
	);
};

export const NNI = () => {
	return (
		<form>
			<div className='form-group'>
				<label htmlFor='nrtwork30'>Network:</label>
				<input type='text' id='network30' name='network30' />
			</div>
			<div className='form-group'>
				<label htmlFor='core'>Core/Verve Gateway:</label>
				<input type='text' id='core' name='core' />
			</div>
			<div className='form-group'>
				<label htmlFor='verve-wan'>Verve Router WAN:</label>
				<input type='text' id='verve-wan' name='verve-wan' />
			</div>
			<div className='form-group'>
				<label htmlFor=''>Subnet Mask:</label>
				<p>255.255.255.252 /30</p>
			</div>
			<br />
			<div className='form-group'>
				<label htmlFor='network29'>Network:</label>
				<input type='text' id='network29' name='network29' />
			</div>
			<div className='form-group'>
				<label htmlFor='client'>Verve Router LAN/Client Gateway:</label>
				<input type='text' id='client' name='client' />
			</div>
			<div className='form-group'>
				<label htmlFor='available'>Available IPs:</label>
				<textarea rows={1} id='available' name='available' />
			</div>
			<div className='form-group'>
				<label htmlFor=''>Subnet Mask:</label>
				<p>255.255.255.248 /29</p>
			</div>
			<div className='form-group'>
				<label htmlFor=''>DNS Primary:</label>
				<p>208.67.222.222</p>
			</div>
			<div className='form-group'>
				<label htmlFor=''>DNS Secondary:</label>
				<p>207.7.100.100</p>
			</div>
		</form>
	);
};

export const SDWAN = () => {
	return (
		<form>
			<div className='form-group'>
				<label htmlFor='client'>SDWAN/Client Gateway:</label>
				<input type='text' id='client' name='client' />
			</div>
			<div className='form-group'>
				<label htmlFor='available'>Available IPs:</label>
				<textarea rows={1} id='available' name='available' />
			</div>
			<div className='form-group'>
				<label htmlFor='mask'>Subnet Mask:</label>
				<input type='text' id='mask' name='mask' />
			</div>
			<div className='form-group'>
				<label htmlFor=''>DNS Primary:</label>
				<p>208.67.222.222</p>
			</div>
			<div className='form-group'>
				<label htmlFor=''>DNS Secondary:</label>
				<p>207.7.100.100</p>
			</div>
		</form>
	);
};

export const Wireless = () => {
	return (
		<form>
			<div className='form-group'>
				<label htmlFor='mask'>IP:</label>
				<input type='text' id='ip' name='ip' />
			</div>
		</form>
	);
};
