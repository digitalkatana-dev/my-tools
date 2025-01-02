import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import Tooltip from '../../../../../../components/Tooltip';
import './voice-order.scss';

const VoiceOrder = ({ goBack }) => {
	const { firstName } = useSelector((state) => state.app);

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
				<div className='level-1'>
					<span className='identifier'>a.</span>
					<p className='level-1-txt'>
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
				<div className='level-1'>
					<span className='identifier'>b.</span>
					<p className='level-1-txt'>
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
				<div className='level-1'>
					<span className='identifier'>c.</span>
					<p className='level-1-txt'>
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
				<div className='level-2'>
					<span className='identifier'>i.</span>
					<p className='level-2-txt'>
						Public Folders ➜ All Public Folders ➜ Clients ➜ Current Orders ➜
						{firstName ? firstName : '"TPC Name"'} ➜ Folder Name ➜ = Client
						Name Listed in Homir (Location)
					</p>
				</div>
				<div className='level-1'>
					<span className='identifier'>d.</span>
					<p className='level-1-txt'>
						Order Processing will create a folder for the client in the
						Operations Drive, this is where all documents and work product for
						the order will be saved.
					</p>
				</div>
				<div className='level-1'>
					<span className='identifier'>e.</span>
					<p className='level-1-txt'>
						Order Processing will create a Design Worksheet in Google Drive for
						the client and add the sharable link in the Notes section of the
						order page in Homir.
					</p>
				</div>
			</section>
			<section>
				<div className='section-title'>2. Optional Items</div>
				<div className='level-1'>
					<span className='identifier'>a.</span>
					<p className='level-1-txt'>
						<span className='section-subtitle'>Sales Handoff:</span> Channel
						Sales Manager may request a handoff with the new order.
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>i.</span>
					<p className='level-2-txt'>
						If a sales handoff is requested with a new order submittal, Order
						Processing will schedule the handoff when the order is processed and
						assigned to the{' '}
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
			</section>
			<section>
				<div className='section-title'>3. Initiation Phase</div>
				<div className='level-1'>
					<span className='identifier'>a.</span>
					<p className='level-1-txt'>
						<span className='section-subtitle'>Review your new order!</span>
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>i.</span>
					<p className='level-2-txt'>
						Note any questions you may have that were not answered from the
						details included in the New Order Email.
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>ii.</span>
					<p className='level-2-txt'>
						Review{' '}
						<Tooltip title='Service Order Form' placement='top-start' arrow>
							SOF
						</Tooltip>{' '}
						for Special Notes (these are found on the signature page)
					</p>
				</div>
				<div className='level-1'>
					<span className='identifier'>b.</span>
					<p className='level-1-txt'>
						(Optional to frontload) Prepare Billing Closeout and save in client
						folder on the share drive (found in templates folder).
					</p>
				</div>
			</section>
			<section>
				<div className='section-title'>4. Design & Planning</div>
				<div className='level-1'>
					<span className='identifier'>a.</span>
					<p className='level-1-txt'>
						<span className='section-subtitle'>Send Intro Email</span>
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>i.</span>
					<p className='level-2-txt'>
						Using Homir email templates, send an intro email to the contact(s)
						that were noted in the New Order email you received within 24 hours
						of assignment.
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>ii.</span>
					<p className='level-2-txt'>
						If you do not receive a response to your intro email within 24
						hours, attempt to call the contact and document the attempts in the
						notes section of the Homir order page. Escalate after 3 failed
						contact attmepts over a 72 hour peroid.
					</p>
				</div>
				<div className='level-1'>
					<span className='identifier'>b.</span>
					<p className='level-1-txt'>Conduct Intro Call</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>i.</span>
					<p className='level-2-txt'>
						Schedule the Intro Call via an Outlook calendar invitation.
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<Stack direction='column'>
						<p className='level-3-txt'>
							Title = Client Name | Verve - Project Introduction
						</p>
						<p className='level-3-txt'>
							Provide your conference bridge or add a Teams meeting (add to body
							and location field).
						</p>
					</Stack>
				</div>
				<div className='level-2'>
					<span className='identifier'>ii.</span>
					<p className='level-2-txt'>Before the intro call:</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Review all details provided by the contact in response to your intro
						email. Note questions and review your calendar for date/time
						availability to conduct survey and design meeting.
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Using Homir email templates, prep Intro Call Follow Up Email
						template (use this during the intro call as an outline for the
						conversation).
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>iii.</span>
					<p className='level-2-txt'>During intro call:</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Review the order and discuss next steps.
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>iv.</span>
					<p className='level-2-txt'>After the intro call:</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>Send your drafted follow-up email.</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Send any applicable calendar invites (i.e. Site Survey, Design
						Meeting, InterOp, Go Live).
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Send applicable doucuments via Docusign.
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Update Homir with dates and notes from call.
					</p>
				</div>
				<div className='level-1'>
					<span className='identifier'>c.</span>
					<p className='level-1-txt'>Conduct Site Survey</p>
				</div>
				<div className='level-2'>
					<p className='level-2-txt'>
						We conduct both internal and Field Nation surveys - verify with a
						supervisor which method to use. (see Appendix 11 - Dispatching
						Guidelines)
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>i.</span>
					<p className='level-2-txt'>
						(If <span style={{ color: 'crimson' }}>Field Nation</span>) Create
						Field Nation Work Order. (see Appendix 6 - Field Nation Directions)
					</p>
				</div>
			</section>
		</div>
	);
};

export default VoiceOrder;
