import React from 'react';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { SopImage, SopImageBig } from '../../../../../../components/Images';
import Levels from '../../../../../../components/Levels';
import Tooltip from '../../../../../../components/Tooltip';

const CircuitOrder = () => {
	const { activeUser } = useSelector((state) => state.user);

	return (
		<div id='circuit'>
			<div className='title'>
				<h2>How to Process a Circuit Order</h2>
			</div>
			<section>
				<div className='section-title'>1. Order Processing Order Setup</div>
				<Levels level='1' identifier='a.'>
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
				</Levels>
				<Levels level='1' identifier='b.'>
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
				</Levels>
				<Levels level='1' identifier='c.'>
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
				</Levels>
				<Levels level='2' identifier='i.'>
					Public Folders ➜ All Public Folders ➜ Clients ➜ Current Orders ➜{' '}
					{activeUser?.firstName ? activeUser?.firstName : '"TPC Name"'} ➜
					Folder Name ➜ = Client Name Listed in Homir (Location)
				</Levels>
				<Levels level='1' identifier='d.'>
					Order Processing will create a folder for the client in the Operations
					Drive, this is where all documents and work product for the order will
					be saved.
				</Levels>
			</section>
			<section>
				<div className='section-title'>2. Optional Items</div>
				<Levels level='1' identifier='a.'>
					<span className='bold'>Sales Handoff:</span> Channel Sales Manager may
					request a handoff with the new order.
				</Levels>
				<Levels level='2' identifier='i.'>
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
				</Levels>
				<Levels level='1' identifier='b.'>
					<span className='bold'>
						Create{' '}
						<Tooltip title='Statement of Work' placement='top-start' arrow>
							SOW
						</Tooltip>
						:
					</span>
				</Levels>
				<Levels level='2' identifier='i.'>
					A{' '}
					<Tooltip title='Statement of Work' placement='top-start' arrow>
						SOW
					</Tooltip>{' '}
					describing timelines and responsibilities in detail may be helpful for
					complex orders or high touch clients.
				</Levels>
			</section>
			<section>
				<div className='section-title'>3. Initiation Phase</div>
				<Levels level='1' identifier='a.' subtitle>
					Review your new order!
				</Levels>
				<Levels level='2' identifier='i.'>
					Note any questions you may have that were not answered from the
					details included in the New Order Email.
				</Levels>
				<Levels level='2' identifier='ii.'>
					Review{' '}
					<Tooltip title='Service Order Form' placement='top-start' arrow>
						SOF
					</Tooltip>{' '}
					for Special Notes (these are found on the signature page)
				</Levels>
				<Levels level='2' identifier='iii.'>
					Reference Homir Order Details for circuit status - check Contract
					Requested, Contract Submitted and Notes for circuit information.
				</Levels>
				<SopImageBig imageUrl='circuit_info_check.png' />
				<Levels level='2' identifier='iv.'>
					Reference{' '}
					<a
						className='link'
						href='circuit_matrix.xlsx'
						target='_blank'
						rel='noreferrer'
					>
						Circuit Matrix
					</a>
					: This provides details for individual carriers and circuit types.
				</Levels>
			</section>
			<section>
				<div className='section-title'>4. Design & Planning</div>
				<Levels level='1' identifier='a.' subtitle>
					Send Intro Email
				</Levels>
				<Levels level='2' identifier='i.'>
					Using Homir email templates, send an intro email to the contact(s)
					that were noted in the New Order email you received within 24 hours of
					assignment.
				</Levels>
				<Levels level='2' identifier='ii.'>
					If you do not receive a response to your intro email within 24 hours,
					attempt to call the contact and document the attempts in the notes
					section of the Homir order page. Escalate after 3 failed contact
					attmepts over a 72 hour peroid.
				</Levels>
				<Levels level='1' identifier='b.' subtitle>
					Conduct Intro Call
				</Levels>
				<Levels level='2' identifier='i.'>
					Schedule the Intro Call via an Outlook calendar invitation.
				</Levels>
				<Levels level='3' component identifier='•'>
					<Stack direction='column'>
						<p className='level-3-txt'>
							Title = Client Name | Verve - Project Introduction
						</p>
						<p className='level-3-txt'>
							Provide your conference bridge or add a Teams meeting (add to body
							and location field).
						</p>
					</Stack>
				</Levels>
				<Levels level='2' identifier='ii.'>
					Before the intro call:
				</Levels>
				<Levels level='3' identifier='•'>
					Review all details provided by the contact in response to your intro
					email. Note questions and review your calendar for date/time
					availability to conduct survey and design meeting.
				</Levels>
				<Levels level='3' identifier='•'>
					Using Homir email templates, prep Intro Call Follow Up Email template
					(use this during the intro call as an outline for the conversation).
				</Levels>
				<Levels level='2' identifier='iii.'>
					During intro call:
				</Levels>
				<Levels level='3' identifier='•'>
					Review the order and discuss next steps.
				</Levels>
				<Levels level='3' identifier='•'>
					Review network design with client - schedule follow up discussion with
					client IT as needed
				</Levels>
				<Levels level='2' identifier='iv.'>
					After the intro call:
				</Levels>
				<Levels level='3' identifier='•'>
					Send your drafted follow-up email.
				</Levels>
				<Levels level='3' identifier='•'>
					Send any applicable calendar invitations.
				</Levels>
				<Levels level='3' identifier='•'>
					Update Homir with dates and notes from call.
				</Levels>
				<Levels level='1' identifier='c.' subtitle>
					Conduct Verve Site Survey
				</Levels>
				<Levels level='2'>
					We conduct both <span className='internal'>internal</span> and{' '}
					<span className='field-nation'>Field Nation</span> surveys - verify
					with a supervisor which method to use. (see{' '}
					<a
						className='link'
						href='Appendix 11.pdf'
						target='_blank'
						rel='noreferrer'
					>
						Appendix 11 - Dispatching Guidelines
					</a>
					)
				</Levels>
				<Levels level='2' identifier='i.'>
					(If <span className='field-nation'>Field Nation</span>) Create Field
					Nation Work Order. (see{' '}
					<a
						className='link'
						href='Appendix 6.pdf'
						target='_blank'
						rel='noreferrer'
					>
						Appendix 6 - Field Nation Directions
					</a>
					)
				</Levels>
				<Levels level='2' identifier='ii.'>
					Complete{' '}
					<a
						className='link'
						href='Site Survey.pdf'
						target='_blank'
						rel='noreferrer'
					>
						Site Survey Template
					</a>{' '}
					- this will be attached to the OTRS ticket when you submit the
					dispatch request.
				</Levels>
				<Levels level='2' identifier='iii.'>
					Submit Dispatch Ticket Via OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					"Take Phone Call"
				</Levels>
				<Levels level='3' identifier='•'>
					Type - Unclassified
				</Levels>
				<Levels level='3' identifier='•'>
					Customer User - enter the customers OTRS email (found in contacts on
					Client page in Homir)
				</Levels>
				<Levels level='3' identifier='•'>
					Customer Name - leave blank
				</Levels>
				<Levels level='3' identifier='•'>
					Queue - Service Delivery ➜ Provisioning
				</Levels>
				<Levels level='3' identifier='•'>
					Owner - Provisioning OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					Responsible - Provisioning OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					Select appropriate Text Template - choose either{' '}
					<span className='internal'>internal</span> or{' '}
					<span className='field-nation'>Field Nation</span>
				</Levels>
				<SopImage imageUrl='site_survey_circuit.png' />
				<Levels level='3' identifier='•'>
					Under the Communication section in the From field, remove the email
					address for the client and add your email address
				</Levels>
				<Levels level='3' identifier='•'>
					Update Subject line
				</Levels>
				<Levels level='3' identifier='•'>
					Fill out the information in the Body and attach the Site Survey
					Template to the ticket
				</Levels>
				<Levels level='3' identifier='•'>
					Enter Homir Order URL (this will link the ticket to your order in
					Homir)
				</Levels>
				<Levels level='2' identifier='iv.'>
					Send Calendar Invite to Client for Survey
				</Levels>
				<Levels level='3' identifier='•'>
					Title = Client Name | Verve - Site Survey
				</Levels>
				<Levels level='3' identifier='•'>
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
				</Levels>
				<Levels level='2' identifier='v.'>
					Complete Site Survey
				</Levels>
				<Levels level='3' identifier='•'>
					Review results of the survey with the tech while they are on site.
				</Levels>
				<Levels level='3' identifier='•'>
					Add photos to the customer folder in "Survey Photos" folder.
				</Levels>
				<Levels level='3' identifier='•'>
					(If <span className='field-nation'>Field Nation</span>) Complete Tech
					Review in OTRS ticket that was opened for the requested dispatch
					within 24 hours of completed dispatch.
				</Levels>
				<Levels level='2' identifier='vi.'>
					Relay survey results to the client and address any issues/questions.
				</Levels>
				<Levels level='1' identifier='d.' subtitle>
					(If applicable) Confirm Carrier Site Survey
				</Levels>
				<Levels level='2' identifier='i.'>
					Ensure to send a calendar invitation and coordinate access as needed.
				</Levels>
				<Levels level='1' identifier='e.'>
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
				</Levels>
				<Levels level='2' identifier='i.'>
					Schedule carrier installation with client
				</Levels>
				<Levels level='2' identifier='ii.'>
					Schedule network/equipment installation with client
				</Levels>
				<Levels level='2' identifier='iii.'>
					Schedule equipment installation (Internal) via OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					Submit Dispatch Ticket via OTRS
				</Levels>
				<Levels level='4' identifier='a.'>
					Queue - Provisioning
				</Levels>
				<Levels level='4' identifier='b.'>
					Owner - Provisioning OTRS
				</Levels>
				<Levels level='4' identifier='c.'>
					Responsible - Provisioning OTRS
				</Levels>
				<Levels level='4' identifier='d.'>
					Select appropriate text template
				</Levels>
				<SopImageBig imageUrl='install_schedule_circuit.png' />
				<Levels level='1' identifier='f.'>
					<span className='bold'>
						Order Network Equipment [see{' '}
						<a
							className='link'
							href='Appendix 12.pdf'
							target='_blank'
							rel='noreferrer'
						>
							Appendix 12 - Equipment Matrix
						</a>
						]
					</span>
				</Levels>
				<Levels level='2' identifier='i.'>
					Submit equipment order via OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					Queue - Provisioning
				</Levels>
				<Levels level='3' identifier='•'>
					Owner - Provisioning OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					Responsible - Provisioning OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='order_equip_circuit.png' />
				<Levels level='1' identifier='g.' subtitle>
					Obtain IP Addresses (ENGR/Carrier/Client)
				</Levels>
				<Levels level='2' identifier='i.'>
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
				</Levels>
				<Levels level='2' identifier='ii.'>
					If{' '}
					<Tooltip
						title='Network-to-network Interface'
						placement='top-start'
						arrow
					>
						NNI
					</Tooltip>
					, submit request for IPs via OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					Queue - Engineering | Provisioning | Core Build
				</Levels>
				<Levels level='3' identifier='•'>
					Owner - Verve Network-ENG
				</Levels>
				<Levels level='3' identifier='•'>
					Responsible - Verve Network-ENG
				</Levels>
				<Levels level='3' identifier='•'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='obtain_ip_circuit.png' />
				<Levels level='1' identifier='h.' subtitle>
					Add IP Details to Circuit Order
				</Levels>
				<SopImageBig imageUrl='add_ip_details.png' />
				<Levels level='1' identifier='i.'>
					<span className='bold'>Send IPs to Client:</span> Using Homir email
					templates, provide IP information to the client
				</Levels>
				<Levels level='1' identifier='j.' subtitle>
					(If applicable) Disconnects
				</Levels>
				<Levels level='2' identifier='i.'>
					If there is a disconnect associated with the order, submit the
					disconnect to Provisioning based on the agreed upon timing with the
					client.
				</Levels>
				<Levels level='2' identifier='ii.'>
					Carriers have different requirements - some we can disconnect
					immediate, and others require 30-day notice [See Circuit Disco Details
					tab of{' '}
					<a
						className='link'
						href='circuit_matrix.xlsx'
						target='_blank'
						rel='noreferrer'
					>
						Circuit Matrix
					</a>{' '}
					Reference doc]
				</Levels>
				<Levels level='2' identifier='iii.'>
					<span className='bold'>Disconnect Process in OTRS</span>
				</Levels>
				<Levels level='3' identifier='•'>
					Provisioning creates a "Carrier Disconnect" OTRS ticket in the queue:
					Service Delivery::Provisioning::Carrier Disconnects.
				</Levels>
				<Levels level='3' identifier='•'>
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
				</Levels>
				<Levels level='3' identifier='•'>
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
				</Levels>
				<Levels level='3' identifier='•'>
					Provisioning Team will disconnect the circuit with the carrier and
					close the ticket.
				</Levels>
			</section>
			<section>
				<div className='section-title'>5. Execution Phase</div>
				<Levels level='1' identifier='a.' subtitle>
					Configure Equipment
				</Levels>
				<Levels level='2' identifier='i.'>
					Create and apply Configuration Template
				</Levels>
				<Levels level='3' identifier='•'>
					Locate templates in the share drive (Service
					Delivery\Templates\Configurations)
				</Levels>
				<Levels level='4' identifier='a.'>
					Save equipment tempalte(s) to client folder before modifying to ensure
					you do not overwrite the shared template.
				</Levels>
				<Levels level='3' identifier='•'>
					Fill in [bracketed] information in the equipment template(s)
				</Levels>
				<Levels level='3' identifier='•'>
					Apply configuration to equipment
				</Levels>
				<Levels level='2' identifier='ii.'>
					Tier 2 Config Review (Optional per Lead/Supervisor)
				</Levels>
				<Levels level='2' identifier='iii.'>
					Tier 3 Config Review
				</Levels>
				<Levels level='3' identifier='•'>
					Create Config Review
				</Levels>
				<Levels level='3' identifier='•'>
					Submit via OTRS ticket
				</Levels>
				<Levels level='4' identifier='a.'>
					Queue - Engineering | Provisioning | Tier 3 Configuration Review
				</Levels>
				<Levels level='4' identifier='b.'>
					Owner - Verve Network-ENG
				</Levels>
				<Levels level='4' identifier='c.'>
					Responsible - Verve Network-ENG
				</Levels>
				<Levels level='4' identifier='d.'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='config_review.png' />
				<Levels level='1' identifier='b.' subtitle>
					Ship Equipment or Stage in S&R Room
				</Levels>
				<Levels level='2' identifier='i.'>
					(If shipping) Submit via an OTRS ticket - This can be part of the
					equipment order ticket or submitted separately.
				</Levels>
				<SopImage imageUrl='shipping_circuit.png' />
				<Levels level='1' identifier='c.' subtitle>
					Confirm Carrier Installed
				</Levels>
				<Levels level='2' identifier='i.'>
					Ping carrier equipment if applicable
				</Levels>
				<Levels level='2' identifier='ii.'>
					Add Demarc Info in Homir on Circut Page under Notes
				</Levels>
				<SopImageBig imageUrl='confirm_carrier_install.png' />
				<Levels level='1' identifier='d.' subtitle>
					Complete Installation
				</Levels>
				<Levels level='2' identifier='i.'>
					If you are disconnecting an existing circuit, Slack support to
					disregard monitoring alerts.
				</Levels>
				<Levels level='2' identifier='ii.'>
					Work with technician to install and test the circuit.
				</Levels>
				<Levels level='3' identifier='•'>
					Verify remote access to equipment
				</Levels>
				<Levels level='3' identifier='•'>
					Perform speed tests and save results to client folder
				</Levels>
				<Levels level='3' identifier='•'>
					If carrier modem installed, provide serial of the modem for inventory
					via OTRS ticket
				</Levels>
				<Levels level='3' identifier='a.'>
					Queue - Provisioning
				</Levels>
				<Levels level='3' identifier='b.'>
					Owner - Provisioning OTRS
				</Levels>
				<Levels level='3' identifier='c.'>
					Responsible - Provisioning OTRS
				</Levels>
				<Levels level='3' identifier='d.'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='complete_install_circuit.png' />
				<Levels level='2' identifier='iii.'>
					If a <span className='field-nation'>Field Nation</span> technician
					completes the installation, provide a tech review within 24 hours on
					the OTRS ticket.
				</Levels>
				<Levels level='1' identifier='e.' subtitle>
					Setup Monitoring
				</Levels>
				<Levels level='2' identifier='i.'>
					Add monitoring in Homir
				</Levels>
				<Levels level='3' identifier='•'>
					<a
						className='link'
						href='http://wiki/index.php/Circuit_monitoring_setup'
						target='_blank'
						rel='noreferrer'
					>
						http://wiki/index.php/Circuit_monitoring_setup
					</a>
				</Levels>
				<Levels level='3' identifier='•'>
					<a
						className='link'
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
				</Levels>
				<Levels level='2' identifier='ii.'>
					Setup client Graph Access (upon client request only) (
					<Tooltip
						title='Network-to-Network Interface'
						placement='top-start'
						arrorw
					>
						NNI
					</Tooltip>{' '}
					only)
				</Levels>
				<Levels level='3' identifier='•'>
					<a
						className='link'
						href='http://wiki/index.php/Adding_client_MRTG_graph_access'
						target='_blank'
						rel='noreferrer'
					>
						http://wiki/index.php/Adding_client_MRTG_graph_access
					</a>
				</Levels>
				<Levels level='1' identifier='f.' subtitle>
					Closeout Order
				</Levels>
				<Levels level='2' identifier='i.'>
					Update Homir with any non-standard configuration information.
				</Levels>
				<Levels level='2' identifier='ii.'>
					Submit billing via OTRS ticket -{' '}
					<span className='underline'>
						This should be submitted ASAP, no more than 5 business days. If the
						end of the month, needs to be immediate.
					</span>
				</Levels>
				<Levels level='3' identifier='•'>
					Queue - Order Processing
				</Levels>
				<Levels level='3' identifier='•'>
					Owner - Order Processing
				</Levels>
				<Levels level='3' identifier='•'>
					Responsible - Order Processing
				</Levels>
				<Levels level='3' identifier='•'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='closeout_circuit_order.png' />
				<Levels level='2' identifier='iii.'>
					Using Homir email templates, submit C-SAT Survey Email
				</Levels>
				<Levels level='2' identifier='iv.'>
					Using Homir email templates, send Activation/Support Handoff email to
					client within 24 hours of install.
				</Levels>
				<Levels level='2' identifier='v.'>
					Verify client folder on the share drive is in order.
				</Levels>
				<Levels level='2' identifier='vi.'>
					Verify modem serial is in inventory (for{' '}
					<Tooltip
						title='Dedicated Internet Access'
						placement='top-start'
						arrow
					>
						DIA
					</Tooltip>{' '}
					circuits)
				</Levels>
				<Levels level='2' identifier='vii.'>
					Verify Homir order information is complete.
				</Levels>
				<Levels level='2' identifier='viii.'>
					Update Homir order status to "
					<span className='bold'>Ops Items Complete</span>"
				</Levels>
				<Levels level='3' identifier='•'>
					If no CSAT being sent due to partner being the contact, update to "
					<span className='bold'>Ops Items Complete, No CSAT</span>"
				</Levels>
				<Levels level='2' identifier='ix.'>
					Move the Outlook Public Folder to the correct alpha folder.
				</Levels>
			</section>
		</div>
	);
};

export default CircuitOrder;
