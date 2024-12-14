import { Divider } from '@mui/material';
import './essentials.scss';

const BusinessEssentials = ({ goBack }) => {
	return (
		<div id='essentials'>
			<h3 className='back-link' onClick={goBack}>
				Back
			</h3>
			<div className='title'>
				<h1>Business Communications Essentials</h1>
				<p>FULL FEATURE VOICE</p>
				<h2>
					$19.95 <span>user/month</span>
				</h2>
			</div>
			<div className='cost1'>
				<h2>
					$21.95 <span>user/month</span>
				</h2>
				<p>With Standard VOIP Handset</p>
			</div>
			<div className='cost2'>
				<h2>
					$22.95 <span>user/month</span>
				</h2>
				<p>With Enhanced VOIP Handset</p>
			</div>
			<div className='details'>
				<div className='txt-box'>
					<h3>Full Feature Voice Service</h3>
					<p>Unlimited Calling to U.S., Canada, & Mexico </p>
				</div>
				<Divider />
				<div className='txt-box'>
					<h3>Free DID & Toll-Free Number</h3>
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
			</div>
		</div>
	);
};

export default BusinessEssentials;
