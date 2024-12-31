// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Tooltip from '../../../../../../components/Tooltip';
import './voice-order.scss';

const VoiceOrder = ({ goBack }) => {
	return (
		<div id='voice-order'>
			<h3 className='back-link' onClick={goBack}>
				Back
			</h3>
			<div className='title'>
				<h2>How to Process a Voice Order</h2>
			</div>
			<section>
				<div className='section-title'>1. Order Processing Setup</div>
				<div className='level1'>
					<span className='identifier'>a.</span>
					<p className='level1-txt'>
						When a{' '}
						<Tooltip
							title='Technical Project Coordinator'
							placement='top-start'
							arrow
						>
							TPC
						</Tooltip>{' '}
						is assigned a voice order, they will receive an email with order
						details and a{' '}
						<Tooltip title='Service Order Form' placement='top-start' arrow>
							SOF
						</Tooltip>{' '}
						attached.
					</p>
				</div>
				<div className='level1'>
					<span className='identifier'>b.</span>
					<p className='level1-txt'>
						An order will be assigned to that{' '}
						<Tooltip
							title='Technical Project Coordinator'
							placement='top-start'
							arrow
						>
							TPC
						</Tooltip>{' '}
						in Homir, this will be where the{' '}
						<Tooltip
							title='Technical Project Coordinator'
							placement='top-start'
							arrow
						>
							TPC
						</Tooltip>{' '}
						will keep a record of all notes and dates for the order.
					</p>
				</div>
				<div className='level1'>
					<span className='identifier'>c.</span>
					<p className='level1-txt'>
						Order Processing will create a Public Folder in Outlook where all
						client communications are to be saved by the{' '}
						<Tooltip
							title='Technical Project Coordinator'
							placement='top-start'
							arrow
						>
							TPC
						</Tooltip>
						.
					</p>
				</div>
				<div className='level2'>
					<span className='identifier'>i.</span>
					<p className='level2-txt'>
						Public Folders -> All Public Folders -> Clients -> Current Orders ->
						"TPC Name" -> Folder Name -> = Client Name Listed in Homir
						(Location)
					</p>
				</div>
				<div className='level1'>
					<span className='identifier'>d.</span>
					<p className='level1-txt'>
						Order Processing will create a folder for the client in the
						Operations Drive, this is where all documents and work product for
						the order will be saved.
					</p>
				</div>
				<div className='level1'>
					<span className='identifier'>e.</span>
					<p className='level1-txt'>
						Order Processing will create a Design Worksheet in Google Drive for
						the client and add the sharable link in the Notes section of the
						order page in Homir.
					</p>
				</div>
			</section>
			<section>
				<div className='section-title'>2. Optional Items</div>
			</section>
		</div>
	);
};

export default VoiceOrder;
