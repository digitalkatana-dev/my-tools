import React from 'react';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import Tooltip from '../../../../../../components/Tooltip';
import './circuit.scss';
import Level1 from '../../../../../../components/Level-1';
import Level2 from '../../../../../../components/Level-2';
import Level3 from '../../../../../../components/Level-3';
import Level4 from '../../../../../../components/Level-4';

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
				<Level3 image>
					<div className='img-container'>
						<img src='site_survey_circuit.png' alt='' />
					</div>
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
				<Level2 identifier='i.'>
					Schedule carrier installation with client
				</Level2>
				<Level2 identifier='ii.'>
					Schedule network/equipment installation with client
				</Level2>
				<Level2 identifier='iii.'>
					Schedule equipment installation (Internal) via OTRS
				</Level2>
				<Level3 identifier='•'>Submit Dispatch Ticket via OTRS</Level3>
				<Level4 identifier='a.'>Queue - Provisioning</Level4>
				<Level4 identifier='b.'>Owner - Provisioning OTRS</Level4>
				<Level4 identifier='c.'>Responsible - Provisioning OTRS</Level4>
				<Level4 identifier='d.'>Select appropriate text template</Level4>
				<Level3 image>
					<div className='tall-img-container'>
						<img src='install_schedule_circuit.png' alt='' />
					</div>
				</Level3>
				<Level1 identifier='f.'>
					<span className='bold'>
						Order Network Equipment [see{' '}
						<a href='Appendix 12.pdf' target='_blank' rel='noreferrer'>
							Appendix 12 - Equipment Matrix
						</a>
						]
					</span>
				</Level1>
				<Level2 identifier='i.'>Submit equipment order via OTRS</Level2>
				<Level3 identifier='•'>Queue - Provisioning</Level3>
				<Level3 identifier='•'>Owner - Provisioning OTRS</Level3>
				<Level3 identifier='•'>Responsible - Provisioning OTRS</Level3>
				<Level3 identifier='•'>Select appropriate text template</Level3>
				<Level3 image>
					<div className='img-container'>
						<img src='order_equip_circuit.png' alt='' />
					</div>
				</Level3>
				<Level1
					identifier='g.'
					subtitle='Obtain IP Addresses (ENGR/Carrier/Client)'
				/>
				<Level2 identifier='i.'>
					If non-
					<Tooltip
						title='Network-to-network Interface'
						placement='top-start'
						arrow
					>
						NNI
					</Tooltip>
					, obtain IPs from carrier (Depending on the carrier, these can be
					provided before or after installation)
				</Level2>
				<Level2 identifier='ii.'>
					If{' '}
					<Tooltip
						title='Network-to-network Interface'
						placement='top-start'
						arrow
					>
						NNI
					</Tooltip>
					, submit request for IPs via OTRS
				</Level2>
				<Level3 identifier='•'>Queue - Engineering</Level3>
				<Level3 identifier='•'>Owner - NLI Engineering</Level3>
				<Level3 identifier='•'>Responsible - NLI Engineering</Level3>
				<Level3 identifier='•'>Select appropriate text template</Level3>
				<Level3 image>
					<div className='img-container'>
						<img src='obtain_ip_circuit.png' alt='' />
					</div>
				</Level3>
				<Level1 identifier='h.' subtitle='Add IP Details to Circuit Order' />
				<Level3 image>
					<div className='tall-img-container'>
						<img src='add_ip_details.png' alt='' />
					</div>
				</Level3>
				<Level1 identifier='i.'>
					<span className='bold'>Send IPs to Client:</span> Using Homir email
					templates, provide IP information to the client
				</Level1>
				<Level1 identifier='j.' subtitle='(If applicable) Disconnects' />
				<Level2 identifier='i.'>
					If there is a disconnect associated with the order, submit the
					disconnect to Provisioning based on the agreed upon timing with the
					client.
				</Level2>
				<Level2 identifier='ii.'>
					Carriers have different requirements - some we can disconnect
					immediate, and others require 30-day notice [See Circuit Disco Details
					tab of{' '}
					<a href='circuit_matrix.xlsx' target='_blank' rel='noreferrer'>
						Circuit Matrix
					</a>{' '}
					Reference doc]
				</Level2>
				<Level2 identifier='iii.'>
					<span className='bold'>Disconnect Process in OTRS</span>
				</Level2>
				<Level3 identifier='•'>
					Provisioning creates a "Carrier Disconnect" OTRS ticket in the queue:
					Service Delivery::Provisioning::Carrier Disconnects.
				</Level3>
				<Level3 identifier='•'>
					Owner & Responsible is the{' '}
					<Tooltip
						title='Technical Project Coordinator'
						placement='top-start'
						arrow
					>
						TPC
					</Tooltip>
					. It is the{' '}
					<Tooltip
						title='Technical Project Coordinator'
						placement='top-start'
						arrow
					>
						TPC
					</Tooltip>
					's responsibility to communicate and coordinate the disconnect date.
				</Level3>
				<Level3 identifier='•'>
					When the{' '}
					<Tooltip
						title='Technical Project Coordinator'
						placement='top-start'
						arrow
					>
						TPC
					</Tooltip>{' '}
					has the disconnect date approved, assign Provisioning OTRS as Owner &
					Responsible.
				</Level3>
				<Level3 identifier='•'>
					Provisioning Team will disconnect the circuit with the carrier and
					close the ticket.
				</Level3>
			</section>
			<section>
				<div className='section-title'>5. Execution Phase</div>
				<Level1 identifier='a.' subtitle='Configure Equipment' />
				<Level2 identifier='i.'>Create and apply Configuration Template</Level2>
				<Level3 identifier='•'>
					Locate templates in the share drive (Service
					Delivery\Templates\Configurations)
				</Level3>
				<Level4 identifier='a.'>
					Save equipment tempalte(s) to client folder before modifying to ensure
					you do not overwrite the shared template.
				</Level4>
				<Level3 identifier='•'>
					Fill in [bracketed] information in the equipment template(s)
				</Level3>
				<Level3 identifier='•'>Apply configuration to equipment</Level3>
				<Level2 identifier='ii.'>
					Tier 2 Config Review (Optional per Lead/Supervisor)
				</Level2>
				<Level2 identifier='iii.'>Tier 3 Config Review</Level2>
				<Level3 identifier='•'>Create Config Review</Level3>
				<Level3 identifier='•'>Submit via OTRS ticket</Level3>
				<Level4 identifier='a.'>
					Queue - Engineering - Provisioning - Tier 3 Configuration Review
				</Level4>
				<Level4 identifier='b.'>Responsible - NLI Engineering</Level4>
				<Level4 identifier='c.'>Select appropriate text template</Level4>
				<Level3 image>
					<div className='img-container'>
						<img src='config_review.png' alt='' />
					</div>
				</Level3>
				<Level1
					identifier='b.'
					subtitle='Ship Equipment or Stage in S&R Room'
				/>
				<Level2 identifier='i.'>
					(If shipping) Submit via an OTRS ticket - This can be part of the
					equipment order ticket or submitted separately.
				</Level2>
				<Level3 image>
					<div className='img-container'>
						<img src='shipping_circuit.png' alt='' />
					</div>
				</Level3>
				<Level1 identifier='c.' subtitle='Confirm Carrier Installed' />
				<Level2 identifier='i.'>Ping carrier equipment if applicable</Level2>
				<Level2 identifier='ii.'>
					Add Demarc Info in Homir on Circut Page under Notes
				</Level2>
				<Level3 image>
					<div className='tall-img-container'>
						<img src='confirm_carrier_install.png' alt='' />
					</div>
				</Level3>
				<Level1 identifier='d.' subtitle='Complete Installation' />
				<Level2 identifier='i.'>
					If you are disconnecting an existing circuit, Slack support to
					disregard monitoring alerts.
				</Level2>
				<Level2 identifier='ii.'>
					Work with technician to install and test the circuit.
				</Level2>
				<Level3 identifier='•'>Verify remote access to equipment</Level3>
				<Level3 identifier='•'>
					Perform speed tests and save results to client folder
				</Level3>
				<Level3 identifier='•'>
					If carrier modem installed, provide serial of the modem for inventory
					via OTRS ticket
				</Level3>
				<Level3 identifier='a.'>Queue - Provisioning</Level3>
				<Level3 identifier='b.'>Owner - Provisioning OTRS</Level3>
				<Level3 identifier='c.'>Responsible - Provisioning OTRS</Level3>
				<Level3 identifier='d.'>Select appropriate text template</Level3>
				<Level3 image>
					<div className='img-container'>
						<img src='complete_install_circuit.png' alt='' />
					</div>
				</Level3>
				<Level2 identifier='iii.'>
					If a <span className='field-nation'>Field Nation</span> technician
					completes the installation, provide a tech review within 24 hours on
					the OTRS ticket.
				</Level2>
				<Level1 identifier='e.' subtitle='Setup Monitoring' />
				<Level2 identifier='i.'>Add monitoring in Homir</Level2>
				<Level3 identifier='•'>
					<a
						href='http://wiki/index.php/Circuit_monitoring_setup'
						target='_blank'
						rel='noreferrer'
					>
						http://wiki/index.php/Circuit_monitoring_setup
					</a>
				</Level3>
				<Level3 identifier='•'>
					<a
						href='http://wiki/index.php/HOMIR_switchports_and_VLANs'
						target='_blank'
						rel='noreferrer'
					>
						http://wiki/index.php/HOMIR_switchports_and_VLANs
					</a>{' '}
					(
					<Tooltip
						title='Network-to-Network Interface'
						placement='top-start'
						arrorw
					>
						NNI
					</Tooltip>{' '}
					only)
				</Level3>
				<Level2 identifier='ii.'>
					Setup client Graph Access (upon client request only) (
					<Tooltip
						title='Network-to-Network Interface'
						placement='top-start'
						arrorw
					>
						NNI
					</Tooltip>{' '}
					only)
				</Level2>
				<Level3 identifier='•'>
					<a
						href='http://wiki/index.php/Adding_client_MRTG_graph_access'
						target='_blank'
						rel='noreferrer'
					>
						http://wiki/index.php/Adding_client_MRTG_graph_access
					</a>
				</Level3>
				<Level1 identifier='f.' subtitle='Closeout Order' />
				<Level2 identifier='i.'>
					Update Homir with any non-standard configuration information.
				</Level2>
				<Level2 identifier='ii.'>
					Submit billing via OTRS ticket -{' '}
					<span className='underline'>
						This should be submitted ASAP, no more than 5 business days. If the
						end of the month, needs to be immediate.
					</span>
				</Level2>
				<Level3 identifier='•'>Queue - Order Processing</Level3>
				<Level3 identifier='•'>Owner - Order Processing</Level3>
				<Level3 identifier='•'>Responsible - Order Processing</Level3>
				<Level3 identifier='•'>Select appropriate text template</Level3>
				<Level3 image>
					<div className='img-container'>
						<img src='closeout_circuit_order.png' alt='' />
					</div>
				</Level3>
				<Level2 identifier='iii.'>
					Using Homir email templates, submit C-SAT Survey Email
				</Level2>
				<Level2 identifier='iv.'>
					Using Homir email templates, send Activation/Support Handoff email to
					client within 24 hours of install.
				</Level2>
				<Level2 identifier='v.'>
					Verify client folder on the share drive is in order.
				</Level2>
				<Level2 identifier='vi.'>
					Verify modem serial is in inventory (for{' '}
					<Tooltip
						title='Dedicated Internet Access'
						placement='top-start'
						arrow
					>
						DIA
					</Tooltip>{' '}
					circuits)
				</Level2>
				<Level2 identifier='vii.'>
					Verify Homir order information is complete.
				</Level2>
				<Level2 identifier='viii.'>
					Update Homir order status to "
					<span className='bold'>Ops Items Complete</span>"
				</Level2>
				<Level3 identifier='•'>
					If no CSAT being sent due to partner being the contact, update to "
					<span className='bold'>Ops Items Complete, No CSAT</span>"
				</Level3>
				<Level2 identifier='ix.'>
					Move the Outlook Public Folder to the correct alpha folder.
				</Level2>
			</section>
		</div>
	);
};

export default CircuitOrder;
