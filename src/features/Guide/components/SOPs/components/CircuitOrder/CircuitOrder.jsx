import React from 'react';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import Tooltip from '../../../../../../components/Tooltip';
import './circuit.scss';
import Level1 from '../../../../../../components/Level-1';
import Level2 from '../../../../../../components/Level-2';
import Level3 from '../../../../../../components/Level-3';
import Level4 from '../../../../../../components/Level-4';
import Level5 from '../../../../../../components/Level-5';

const CircuitOrder = ({ goBack }) => {
	const { firstName } = useSelector((state) => state.app);

	return (
		<div id='circuit'>
			<h3 className='back-link' onClick={goBack}>
				Back
			</h3>
			<div className='title'>
				<h2>How to Process a Circuit Order</h2>
			</div>
			<section>
				<div className='section-title'>1. Order Processing Order Setup</div>
				<Level1 identifier='a.'>
					When a{' '}
					<Tooltip
						title='Technical Project Coordinator'
						placement='top-start'
						arrow
					>
						TPC
					</Tooltip>{' '}
					is assigned a circuit order, they will receive an email with order
					details and a{' '}
					<Tooltip title='Service Order Form' placement='top-start' arrow>
						SOF
					</Tooltip>{' '}
					attached.
				</Level1>
				<Level1 identifier='b.'>
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
					will keep a record of all notes and dates for that order.
				</Level1>
				<Level1 identifier='c.'>
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
				</Level1>
				<Level2 identifier='i.'>
					Public Folders ➜ All Public Folders ➜ Clients ➜ Current Orders ➜{' '}
					{firstName ? firstName : '"TPC Name"'} ➜ Folder Name ➜ = Client Name
					Listed in Homir (Location)
				</Level2>
				<Level1 identifier='d.'>
					Order Processing will create a folder for the client in the Operations
					Drive, this is where all documents and work product for the order will
					be saved.
				</Level1>
			</section>
			<section>
				<div className='section-title'>2. Optional Items</div>
				<Level1 identifier='a.'>
					<span className='bold'>Sales Handoff:</span> Channel Sales Manager may
					request a handoff with the new order.
				</Level1>
				<Level2 identifier='i.'>
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
				</Level2>
				<Level1 identifier='b.'>
					<span className='bold'>
						Create{' '}
						<Tooltip title='Statement of Work' placement='top-start' arrow>
							SOW
						</Tooltip>
						:
					</span>
				</Level1>
				<Level2 identifier='i.'>
					A{' '}
					<Tooltip title='Statement of Work' placement='top-start' arrow>
						SOW
					</Tooltip>{' '}
					describing timelines and responsibilities in detail may be helpful for
					complex orders or high touch clients.
				</Level2>
			</section>
			<section>
				<div className='section-title'>3. Initiation Phase</div>
				<Level1 identifier='a.' subtitle='Review your new order!' />
				<Level2 identifier='i.'>
					Note any questions you may have that were not answered from the
					details included in the New Order Email.
				</Level2>
				<Level2 identifier='ii.'>
					Review{' '}
					<Tooltip title='Service Order Form' placement='top-start' arrow>
						SOF
					</Tooltip>{' '}
					for Special Notes (these are found on the signature page)
				</Level2>
				<Level2 identifier='iii.'>
					Reference Homir Order Details for circuit status - check Contract
					Requested, Contract Submitted and Notes for circuit information.
				</Level2>
				<Level3 image>
					<div className='tall-img-container'>
						<img src='circuit_info_check.png' alt='' />
					</div>
				</Level3>
				<Level2 identifier='iv.'>
					Reference{' '}
					<a href='circuit_matrix.xlsx' target='_blank' rel='noreferrer'>
						Circuit Matrix
					</a>
					: This provides details for individual carriers and circuit types.
				</Level2>
			</section>
			<section>
				<div className='section-title'>4. Design & Planning</div>
				<Level1 identifier='a.' subtitle='Send Intro Email' />
				<Level2 identifier='i.'>
					Using Homir email templates, send an intro email to the contact(s)
					that were noted in the New Order email you received within 24 hours of
					assignment.
				</Level2>
				<Level2 identifier='ii.'>
					If you do not receive a response to your intro email within 24 hours,
					attempt to call the contact and document the attempts in the notes
					section of the Homir order page. Escalate after 3 failed contact
					attmepts over a 72 hour peroid.
				</Level2>
				<Level1 identifier='b.' subtitle='Conduct Intro Call' />
				<Level2 identifier='i.'>
					Schedule the Intro Call via an Outlook calendar invitation.
				</Level2>
				<Level3 component identifier='•'>
					<Stack direction='column'>
						<p className='level-3-txt'>
							Title = Client Name | Verve - Project Introduction
						</p>
						<p className='level-3-txt'>
							Provide your conference bridge or add a Teams meeting (add to body
							and location field).
						</p>
					</Stack>
				</Level3>
				<Level2 identifier='ii.'>Before the intro call:</Level2>
				<Level3 identifier='•'>
					Review all details provided by the contact in response to your intro
					email. Note questions and review your calendar for date/time
					availability to conduct survey and design meeting.
				</Level3>
				<Level3 identifier='•'>
					Using Homir email templates, prep Intro Call Follow Up Email template
					(use this during the intro call as an outline for the conversation).
				</Level3>
				<Level2 identifier='iii.'>During intro call:</Level2>
				<Level3 identifier='•'>Review the order and discuss next steps.</Level3>
				<Level3 identifier='•'>
					Review network design with client - schedule follow up discussion with
					client IT as needed
				</Level3>
				<Level2 identifier='iv.'>After the intro call:</Level2>
				<Level3 identifier='•'>Send your drafted follow-up email.</Level3>
				<Level3 identifier='•'>
					Send any applicable calendar invitations.
				</Level3>
				<Level3 identifier='•'>
					Update Homir with dates and notes from call.
				</Level3>
				<Level1 identifier='c.' subtitle='Conduct Verve Site Survey' />
				<Level2>
					We conduct both{' '}
					<span style={{ fontWeight: 'bold', color: 'green' }}>internal</span>{' '}
					and{' '}
					<span style={{ fontWeight: 'bold', color: 'crimson' }}>
						Field Nation
					</span>{' '}
					surveys - verify with a supervisor which method to use. (see{' '}
					<a href='Appendix 11.pdf' target='_blank' rel='noreferrer'>
						Appendix 11 - Dispatching Guidelines
					</a>
					)
				</Level2>
				<Level2 identifier='i.'>
					(If{' '}
					<span style={{ color: 'crimson', fontWeight: 'bold' }}>
						Field Nation
					</span>
					) Create Field Nation Work Order. (see{' '}
					<a href='Appendix 6.pdf' target='_blank' rel='noreferrer'>
						Appendix 6 - Field Nation Directions
					</a>
					)
				</Level2>
				<Level2 identifier='ii.'>
					Complete{' '}
					<a href='Site Survey.pdf' target='_blank' rel='noreferrer'>
						Site Survey Template
					</a>{' '}
					- this will be attached to the OTRS ticket when you submit the
					dispatch request.
				</Level2>
				<Level2 identifier='iii.'>Submit Dispatch Ticket Via OTRS</Level2>
				<Level3 identifier='•'>"Take Phone Call"</Level3>
				<Level3 identifier='•'>Type - Unclassified</Level3>
				<Level3 identifier='•'>
					Customer User - enter the customers OTRS email (found in contacts on
					Client page in Homir)
				</Level3>
				<Level3 identifier='•'>Customer Name - leave blank</Level3>
				<Level3 identifier='•'>Queue - Service Delivery ➜ Provisioning</Level3>
				<Level3 identifier='•'>Owner - Provisioning OTRS</Level3>
				<Level3 identifier='•'>Responsible - Provisioning OTRS</Level3>
				<Level3 identifier='•'>
					Select appropriate Text Template - choose either{' '}
					<span style={{ fontWeight: 'bold', color: 'green' }}>internal</span>{' '}
					or{' '}
					<span style={{ fontWeight: 'bold', color: 'crimson' }}>
						Field Nation
					</span>
				</Level3>
				<Level3 identifier='•'>
					Under the Communication section in the From field, remove the email
					address for the client and add your email address
				</Level3>
				<Level3 identifier='•'>Update Subject line</Level3>
				<Level3 identifier='•'>
					Fill out the information in the Body and attach the Site Survey
					Template to the ticket
				</Level3>
				<Level3 identifier='•'>
					Enter Homir Order URL (this will link the ticket to your order in
					Homir)
				</Level3>
				<Level2 identifier='iv.'>
					Send Calendar Invite to Client for Survey
				</Level2>
				<Level3 identifier='•'>
					Title = Client Name | Verve - Site Survey
				</Level3>
				<Level3 identifier='•'>
					Specify what access will be needed in the body of the calendar invite.
					(<span style={{ fontWeight: 'bold' }}>Suggested:</span> Please make
					sure there is access to your suite's server room and the building's{' '}
					<Tooltip
						title='Main Point of Entry (main telecommunications room where cables enter the building from the street)'
						placement='top-start'
						arrow
					>
						MPOE
					</Tooltip>
					.)
				</Level3>
				<Level2 identifier='v.'>Complete Site Survey</Level2>
				<Level3 identifier='•'>
					Review results of the survey with the tech while they are on site.
				</Level3>
				<Level3 identifier='•'>
					Add photos to the customer folder in "Survey Photos" folder.
				</Level3>
				<Level3 identifier='•'>
					(If{' '}
					<span style={{ fontWeight: 'bold', color: 'crimson' }}>
						Field Nation
					</span>
					) Complete Tech Review in OTRS ticket that was opened for the
					requested dispatch within 24 hours of completed dispatch.
				</Level3>
				<Level2 identifier='vi.'>
					Relay survey results to the client and address any issues/questions.
				</Level2>
				<Level1
					identifier='d.'
					subtitle='(If applicable) Confirm Carrier Site Survey'
				/>
				<Level2 identifier='i.'>
					Ensure to send a calendar invitation and coordinate access as needed.
				</Level2>
				<Level1 identifier='e.'>
					<span className='bold'>
						Once{' '}
						<Tooltip
							title='Firm Order Confirmation'
							placement='top-start'
							arrow
						>
							FOC
						</Tooltip>{' '}
						received, Schedule Installation
					</span>
				</Level1>
				<Level1 identifier='f.'>
					<span className='bold'>
						Order Network Equipment [see{' '}
						<a href='Appendix 12.pdf' target='_blank' rel='noreferrer'>
							Appendix 12 - Equipment Matrix
						</a>
						]
					</span>
				</Level1>
				<Level1
					identifier='g.'
					subtitle='Obtain IP Addresses (ENGR/Carrier/Client)'
				/>
				<Level1 identifier='h.' subtitle='Add IP Details to Circuit Order' />
				<Level1 identifier='i.' subtitle='Send IPs to Client' />
				<Level1 identifier='j.' subtitle='(If applicable) Disconnects' />
			</section>
			<section>
				<div className='section-title'>5. Execution Phase</div>
				<Level1 identifier='a.' subtitle='Configure Equipment' />
				<Level1
					identifier='b.'
					subtitle='Ship Equipment or Stage in S&R Room'
				/>
				<Level1 identifier='c.' subtitle='Confirm Carrier Installed' />
				<Level1 identifier='d.' subtitle='Complete Installation' />
				<Level1 identifier='e.' subtitle='Setup Monitoring' />
				<Level1 identifier='f.' subtitle='Closeout Order' />
			</section>
		</div>
	);
};

export default CircuitOrder;
