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
						{firstName ? firstName : '"TPC Name"'} ➜ Folder Name ➜ = Client Name
						Listed in Homir (Location)
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
					<p className='section-subtitle'>Conduct Intro Call</p>
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
					<p className='section-subtitle'>Conduct Site Survey</p>
				</div>
				<div className='level-2'>
					<p className='level-2-txt'>
						We conduct both internal and Field Nation surveys - verify with a
						supervisor which method to use. (see{' '}
						<a
							href='https://my-tools-nvxu.onrender.com/Appendix 11.pdf'
							target='_blank'
							rel='noreferrer'
						>
							Appendix 11 - Dispatching Guidelines
						</a>
						)
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>i.</span>
					<p className='level-2-txt'>
						(If{' '}
						<span style={{ color: 'crimson', fontWeight: 'bold' }}>
							Field Nation
						</span>
						) Create Field Nation Work Order. (see{' '}
						<a
							href='https://my-tools-nvxu.onrender.com/Appendix 6.pdf'
							target='_blank'
							rel='noreferrer'
						>
							Appendix 6 - Field Nation Directions
						</a>
						)
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>ii.</span>
					<p className='level-2-txt'>
						<a
							href='https://my-tools-nvxu.onrender.com/Site Survey.pdf'
							target='_blank'
							rel='noreferrer'
						>
							Complete Site Survey Template
						</a>{' '}
						- this will be attached to the OTRS ticket when you submit the
						dispatch request.
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>iii.</span>
					<p className='level-2-txt'>Submit Dispatch Ticket Via OTRS</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>"Take Phone Call"</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>Type - Unclassified</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Customer User - enter the customers OTRS email (found in contacts on
						Client page in Homir)
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>Customer Name - leave blank</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>Queue - Service Delivery ➜ Provisioning</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Owner and Responsible - Provisioning OTRS
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Select appropriate Text Template - choose either Internal or Field
						Nation
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Under the Communication section in the From field, remove the email
						address for the client and add your email address
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>Update Subject line</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Fill out the information in the Body and attach the Site Survey
						Template to the ticket
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Enter Homir Order URL (this will link the ticket to your order in
						Homir)
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>iv.</span>
					<p className='level-2-txt'>
						Send Calendar Invite to Client for Survey
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Title = Client Name | Verve - Site Survey
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Specify what access will be needed in the body of the calendar
						invite. (<span style={{ fontWeight: 'bold' }}>Suggested:</span>{' '}
						Please make sure there is access to your suite's server room and the
						building's{' '}
						<Tooltip
							title='Main Point of Entry (main telecommunications room where cables enter the building from the street)'
							placement='top-start'
							arrow
						>
							MPOE
						</Tooltip>
						.)
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>v.</span>
					<p className='level-2-txt'>Complete Site Survey</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Review results of the survey with the tech while they are on site.
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Add photos to the customer folder in "Survey Photos" folder.
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						(If{' '}
						<span style={{ fontWeight: 'bold', color: 'crimson' }}>
							Field Nation
						</span>
						) Complete Tech Review in OTRS ticket that was opened for the
						requested dispatch within 24 hours of completed dispatch.
					</p>
				</div>
				<div className='level-2'>
					<span className='identifier'>vi.</span>
					<p className='level-2-txt'>
						Relay survey results to the client and address any issues/questions.
					</p>
				</div>
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Ensure to establish an understanding of the next steps of the order.
					</p>
				</div>
				<div className='level-1'>
					<span className='identifier'>d.</span>
				</div>
			</section>
		</div>
	);
};

export default VoiceOrder;
