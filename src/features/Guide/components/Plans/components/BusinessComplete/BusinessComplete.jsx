import { Divider } from '@mui/material';
import './complete.scss';

const BusinessComplete = ({ goBack }) => {
	return (
		<div id='complete'>
			<h3 className='back-link' onClick={goBack}>
				Back
			</h3>
			<div className='title'>
				<h1>Business Communications Complete</h1>
				<p>Bundled Services</p>
				<h2>
					$23.95 <span>user/month</span>
				</h2>
			</div>
			<div className='cost1'>
				<h2>
					$25.95 <span>user/month</span>
				</h2>
				<p>With Standard VOIP Handset</p>
			</div>
			<div className='cost2'>
				<h2>
					$26.95 <span>user/month</span>
				</h2>
				<p>With Enhanced VOIP Handset</p>
			</div>
			<div className='details'>
				<div className='txt-box'>
					<h3>Full Feature Voice Service</h3>
					<p>Unlimited Calling to U.S., Canada, & Mexico</p>
				</div>
				<Divider />
				<div className='txt-box'>
					<h3>Free DID & Toll-Free Number</h3>
					<p>Includes 1,000 Toll-Free Minutes</p>
				</div>
				<Divider />
				<div className='txt-box'>
					<h3>Mobile App</h3>
				</div>
				<Divider />
				<div className='txt-box'>
					<h3>Unlimited SMS Messaging</h3>
				</div>
				<Divider />
				<div className='txt-box'>
					<h3>Unlimited Audio Conferencing</h3>
				</div>
				<Divider />
				<div className='txt-box'>
					<h3>Voicemail Transcription</h3>
				</div>
				<Divider />
				<div className='txt-box'>
					<h3>Internet Fax</h3>
					<p>Includes 100 Pages</p>
				</div>
				<Divider />
				<div className='txt-box'>
					<h3>CRM Integration</h3>
				</div>
				<Divider />
				<div className='txt-box'>
					<h3>Call Center</h3>
				</div>
			</div>
		</div>
	);
};

export default BusinessComplete;
