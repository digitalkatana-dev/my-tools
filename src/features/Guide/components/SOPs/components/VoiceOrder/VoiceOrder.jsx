import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { SopImage } from '../../../../../../components/Images';
import Levels from '../../../../../../components/Levels';
import Tooltip from '../../../../../../components/Tooltip';

const VoiceOrder = () => {
	const { activeUser } = useSelector((state) => state.user);

	return (
		<div id='voice'>
			<div className='title'>
				<h2>How to Process a Voice Order</h2>
			</div>
			<section>
				<div className='section-title'>1. Order Processing Setup</div>
				<Levels level='1' identifier='a.'>
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
					will keep a record of all notes and dates for the order.
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
				<Levels level='1' identifier='e.'>
					Order Processing will create a Design Worksheet in Google Drive for
					the client and add the sharable link in the Notes section of the order
					page in Homir.
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
				<Levels level='1' identifier='b.'>
					(Optional to frontload) Prepare{' '}
					<a
						className='link'
						href='Billing_2025.xlsx'
						target='_blank'
						rel='noreferrer'
					>
						Billing Closeout
					</a>{' '}
					and save in client folder on the share drive (also found in templates
					folder).
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
				<Levels level='2' identifier='iv.'>
					After the intro call:
				</Levels>
				<Levels level='3' identifier='•'>
					Send your drafted follow-up email.
				</Levels>
				<Levels level='3' identifier='•'>
					Send any applicable calendar invites (i.e. Site Survey, Design
					Meeting, InterOp, Go Live).
				</Levels>
				<Levels level='3' identifier='•'>
					Send applicable doucuments via Docusign.
				</Levels>
				<Levels level='3' identifier='•'>
					Update Homir with dates and notes from call.
				</Levels>
				<Levels level='1' identifier='c.' subtitle>
					Conduct Site Survey
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
					(<span className='bold'>Suggested:</span> Please make sure there is
					access to your suite's server room and the building's{' '}
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
				<div className='level-3'>
					<span className='identifier'>•</span>
					<p className='level-3-txt'>
						Ensure to establish an understanding of the next steps of the order.
					</p>
				</div>
				<Levels level='1' identifier='d.' subtitle>
					Conduct Design Meeting
				</Levels>
				<Levels level='2' identifier='i.'>
					Send Calendar Invite to Client for Design Meeting
				</Levels>
				<Levels level='3' identifier='•'>
					Title = Client Name | Verve - Design Meeting
				</Levels>
				<Levels level='3' identifier='•'>
					Include link to Design Document in body of invitation (Don't forget to
					change display text of link!).
				</Levels>
				<Levels level='3' identifier='•'>
					Provide conference bridge or Teams meeting information.
				</Levels>
				<Levels level='2' identifier='ii.'>
					Complete Design Meeting
				</Levels>
				<Levels level='3' identifier='•'>
					Review & complete design document
				</Levels>
				<Levels level='3' identifier='•'>
					(If applicable) Review the numbers provided on the design document in
					comparison to the numbers provided on the porting documents.
				</Levels>
				<Levels level='3' identifier='•'>
					Review the design to determine any recordings that will be needed,
					ensure this is relayed to the client and propose options for getting
					this completed.
				</Levels>
				<Levels level='3' identifier='•'>
					Schedule follow-up Design Meeting if needed.
				</Levels>
				<Levels level='3' identifier='•'>
					Send summary of any open/pending items and reestablish timeline and
					next steps.
				</Levels>
				<Levels level='1' identifier='e.' subtitle>
					Confirm Agreed Upon Schedule
				</Levels>
				<Levels level='2' identifier='i.'>
					Ensure a schedule has been established and relayed to the client (sent
					via follow-up eamil).
				</Levels>
				<Levels level='2' identifier='ii.'>
					Copy details of this schedule into the Homir order for reference.
				</Levels>
				<Levels level='2' identifier='iii.'>
					Update dates in Homir order page.
				</Levels>
				<Levels level='1' identifier='f.' subtitle>
					Schedule the Installation
				</Levels>
				<Levels level='2' identifier='i.'>
					Ensure calendar invites are sent to the client for all of the
					following dates as applicable:
				</Levels>
				<Levels level='2' identifier='Title:'>
					Verve | Client Name - Scheduled Item
				</Levels>
				<Levels level='3' identifier='•'>
					Interop Test/Hardware Intall
				</Levels>
				<Levels level='3' identifier='•'>
					Voice Training (if desired by client/using portal)
				</Levels>
				<Levels level='3' identifier='•'>
					Voice Install/Porting Date
				</Levels>
				<Levels level='2' identifier='ii.'>
					Schedule dispatch for Testing/Install of Equipment/Phones:
				</Levels>
				<Levels level='3' identifier='•'>
					(If <span className='internal'>internal</span>) Via OTRS ticket
				</Levels>
				<Levels level='3' identifier='•'>
					(If <span className='field-nation'>Field Nation</span>) Create Field
					Nation Work Order (see{' '}
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
				<Levels level='1' identifier='g.' subtitle>
					Create Domain in Homir
				</Levels>
				<Levels level='2' identifier='i.'>
					In Homir, find E911 number for your client and make note of it.
				</Levels>
				<Levels level='3' identifier='•'>
					Voice ➜ Numbers Search ➜ Number Type: E911 ➜ Number Status: Unassigned
					➜ Search
				</Levels>
				<Levels level='2' identifier='ii.'>
					In Homir, navigate to Voice ➜ Domains ➜ Select: Add New Voice Domain
				</Levels>
				<Levels level='2' identifier='iii.'>
					Select the Voice Server you are building voice services on (default is
					nms.myvrv.com) and complete all form fields.
				</Levels>
				<SopImage imageUrl='create_domain.png' />
				<Levels level='3' identifier='•'>
					Domain: - Enter the [clientName] (typically match client email domain)
				</Levels>
				<Levels level='4' identifier='❗'>
					No capital letters, special characters, or spaces allowed.
				</Levels>
				<Levels level='4' identifier='❗'>
					Domain name cannot be changed! - Verify correct spelling.
				</Levels>
				<Levels level='3' identifier='•'>
					Client: - Select client name from drop-down
				</Levels>
				<Levels level='2'>
					<span
						className='bold'
						style={{
							backgroundColor: 'yellow',
							color: 'black',
						}}
					>
						Note: The following are Domain Defaults and can be adjusted per user
						once domain is created in NMS.
					</span>
				</Levels>
				<Levels level='3' identifier='•'>
					Area Code: - Set the area code for the client's main office as default
				</Levels>
				<Levels level='3' identifier='•'>
					Caller Name: - Set the company requested name as caller ID name
				</Levels>
				<Levels level='3' identifier='•'>
					Emergency Caller Number: - Set the E911 number for the client's main
					office number as default
				</Levels>
				<Levels level='3' identifier='•'>
					Caller Number: - Set the client's main office number as default
				</Levels>
				<Levels level='3' identifier='•'>
					Active Call Limit: - 10x the user count
				</Levels>
				<Levels level='3' identifier='•'>
					External Call Limit: - 10x the user count
				</Levels>
				<Levels level='3' identifier='•'>
					Max Users: - user count + 5
				</Levels>
				<Levels level='2' identifier='iv.'>
					Click Create
				</Levels>
				<Levels level='1' identifier='h.'>
					<span className='bold'>
						Create Domain in the NMS Portal{' '}
						<span style={{ color: 'red' }}>
							(ONLY If not building on Verve Servers!)
						</span>
					</span>
				</Levels>
				<Levels level='2' identifier='i.'>
					Navigate to the NMS portal.
				</Levels>
				<Levels level='2' identifier='ii.'>
					Select Domains at top of the screen.
				</Levels>
				<Levels level='2' identifier='iii.'>
					Select Add Domain at top right under navigation bar.
				</Levels>
				<Levels level='2' identifier='iv.'>
					A pop up will open and allow you to set the default settings for the
					domain.
				</Levels>
				<Levels level='2' identifier='v.'>
					Basic Tab
				</Levels>
				<Levels level='3' identifier='•'>
					Name - This is the name of the new domain:{' '}
					<span className='underline'>
						Needs to match what was created in Homir. Recommend copying and
						pasting.
					</span>{' '}
					<span className='bold' style={{ color: 'red' }}>
						This cannot be edited after creation in the portal!
					</span>
				</Levels>
				<Levels level='3' identifier='•'>
					Reseller - Select applicable (typically NextLevel)
				</Levels>
				<Levels level='2' identifier='vi.'>
					Defaults Tab
				</Levels>
				<Levels level='3' identifier='•'>
					Dial Permission - US Canada and Mexico
				</Levels>
				<Levels level='4' identifier='⁃'>
					International requires a specific process to enable (see supervisor)
				</Levels>
				<Levels level='3' identifier='•'>
					Time Zone - Select the time zone for the client's main office as
					default.
				</Levels>
				<Levels level='3' identifier='•'>
					Area Code - Set the area code for the client's main office as default.
				</Levels>
				<Levels level='3' identifier='•'>
					Caller Name - Set the company requested name as caller ID name.
				</Levels>
				<Levels level='3' identifier='•'>
					Caller ID - Set the client's main office number as default.
				</Levels>
				<Levels level='2' identifier='vii.'>
					Limitations
				</Levels>
				<Levels level='3' identifier='•'>
					Active Call Limit - External Call Limit and Max Users should be set to
					10x the user/seat count.
				</Levels>
				<Levels level='2' identifier='viii.'>
					Recording - Levels all as default values.
				</Levels>
				<Levels level='2' identifier='ix.'>
					Emergency - Emergency Caller ID - Set to the E911 number for the
					client's main office number as default.
				</Levels>
				<Levels level='2' identifier='x.'>
					Assign E911 number in HOMIR (after domain is created)
				</Levels>
				<Levels level='3' identifier='•'>
					Voice ➜ Number Search ➜ Number Type: E911 ➜ Number Status: Unassigned
					➜ Search
				</Levels>
				<Levels level='3' identifier='•'>
					Find client name and verify address is correct and address says it is
					provisioned.
				</Levels>
				<Levels level='3' identifier='•'>
					On right side of screen, select Assign.
				</Levels>
				<Levels level='3' identifier='•'>
					Select the recently created domain from the drop-down menu.
				</Levels>
				<Levels level='3' identifier='•'>
					Select Change Assignments
				</Levels>
				<Levels level='1' identifier='i.' subtitle>
					Numbers
				</Levels>
				<Levels level='2' identifier='i.'>
					New numbers
				</Levels>
				<Levels level='3' identifier='•'>
					Submit request for new number(s) via an OTRS ticket.
				</Levels>
				<Levels level='4' identifier='⁃'>
					Queue - Provisioning
				</Levels>
				<Levels level='4' identifier='⁃'>
					Owner/Responsible - Provisioning OTRS
				</Levels>
				<Levels level='4' identifier='⁃'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='new_number.png' />
				<Levels level='2' identifier='ii.'>
					Porting
				</Levels>
				<Levels level='3' identifier='•'>
					Ontain Port Docs, E911 and Phone Bill/CSR (preference for LOA's to be
					completed via DocuSign)
				</Levels>
				<Levels level='4' identifier='a.'>
					LOA's - 3 different types (in Templates folder)
				</Levels>
				<Levels level='5' identifier='i.'>
					TN (verify whether SMS is needed)
				</Levels>
				<Levels level='5' identifier='ii.'>
					Fax
				</Levels>
				<Levels level='5' identifier='iii.'>
					Toll Free
				</Levels>
				<Levels level='4' identifier='b.'>
					E911 - this document needs to be completed for each physical location
					where phones will be placed.
				</Levels>
				<Levels level='4' identifier='c.'>
					CSR - Customer Service Record/Bill (CSR is preferred, rejections can
					be disputed with CSRs)
				</Levels>
				<Levels level='4' identifier='d.'>
					Update date in Homir once all docs have been received.
				</Levels>
				<Levels level='3' identifier='•'>
					Submit Port Request via OTRS
				</Levels>
				<Levels level='4' identifier='a.'>
					Queue - Provisioning
				</Levels>
				<Levels level='4' identifier='b.'>
					Owner/Responsible - Provisioning OTRS
				</Levels>
				<Levels level='4' identifier='c.'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='port_number.png' />
				<Levels level='3' identifier='•'>
					Ports Submitted to Number Vendors (
					<span style={{ color: 'red' }}>Provisioning Team Responsible</span>)
				</Levels>
				<Levels level='4' identifier='a.'>
					Calendar invitation sent for each port by provisioning once sent to
					vendor.
				</Levels>
				<Levels level='4' identifier='b.'>
					A weekly summary is sent via Homir for each{' '}
					<Tooltip
						title='Technical Project Coordinator'
						placement='top-start'
						arrow
					>
						TPC
					</Tooltip>{' '}
					to review active ports.
				</Levels>
				<Levels level='3' identifier='•'>
					Confirm Port{' '}
					<Tooltip title='Firm Order Confirmation' placement='top-start' arrow>
						FOC
					</Tooltip>{' '}
					Received (
					<span className='underline' style={{ color: 'red' }}>
						Critical Date
					</span>
					)
				</Levels>
				<Levels level='4' identifier='a.'>
					Update Homir order page with{' '}
					<Tooltip title='Firm Order Confirmation' placement='top-start' arrow>
						FOC
					</Tooltip>{' '}
					date
				</Levels>
				<Levels level='4' identifier='b.'>
					Communicate{' '}
					<Tooltip title='Firm Order Confirmation' placement='top-start' arrow>
						FOC
					</Tooltip>{' '}
					received to client.
				</Levels>
				<Levels level='4' identifier='c.'>
					If Rejection - address rejection with client and update OTRS ticket
					with new information once received. Use email function on ticket.
				</Levels>
				<Levels level='4' identifier='d.'>
					Advise if schedule adjustments are needed to work through porting
					rejections.
				</Levels>
				<Levels level='5' identifier='i.'>
					Each time a rejection is received, the installation date should be
					adjusted to be no sooner than 9 - 10 business days in the future. This
					will allow 3 - 4 days to push corresponding ports if additional
					rejection is received.
				</Levels>
				<Levels level='1' identifier='j.'>
					<span className='bold'>
						(If applicable) Order Network Equipment [see{' '}
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
					Submit equipment request via OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					Queue - Provisioning
				</Levels>
				<Levels level='3' identifier='•'>
					Owner/Responsibile - Provisioning OTRS
				</Levels>
				<Levels level='3' identifier='•'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='order_equipment.png' />
			</section>
			<section>
				<div className='section-title'>5. Execution</div>
				<Levels level='1' identifier='a.' subtitle>
					(If Applicable) Configure Equipment
				</Levels>
				<Levels level='2' identifier='i.'>
					Create and Apply Configuration Template
				</Levels>
				<Levels level='3' identifier='•'>
					Locate templates in share drive (Service
					Delivery\Templates\Configurations)
				</Levels>
				<Levels level='4' identifier='a.'>
					Save equipment template(s) to client folder before modifying to ensure
					you do not overwrite the shared template.
				</Levels>
				<Levels level='3' identifier='•'>
					Fill in [bracketed] information in equipment template(s)
				</Levels>
				<Levels level='3' identifier='•'>
					Apply configuration to equipment
				</Levels>
				<Levels level='2' identifier='ii.'>
					Tier 2 Config Review (Optional per lead/supervisor)
				</Levels>
				<Levels level='2' identifier='iii.'>
					Tier 3 Config Review
				</Levels>
				<Levels level='3' identifier='•'>
					Create Config Review document based on OTRS template
				</Levels>
				<Levels level='3' identifier='•'>
					Submit via OTRS ticket
				</Levels>
				<Levels level='4' identifier='a.'>
					Queue - Engineering - Provisioning - Tier 3 Configuration Review
				</Levels>
				<Levels level='4' identifier='b.'>
					Owner/Responsible - NLI Engineering
				</Levels>
				<Levels level='4' identifier='c.'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='config_equip.png' />
				<Levels level='1' identifier='b.' subtitle>
					Build Voice Services (Training will be provided)
				</Levels>
				<Levels level='2' identifier='i.'>
					Using the Design Document that you completed with the client, build in
					the NMS portal.
				</Levels>
				<Levels level='3' identifier='•'>
					Preferred Build Order:
				</Levels>
				<Levels level='4' identifier='a.'>
					Users
				</Levels>
				<Levels level='4' identifier='b.'>
					Conference Bridges
				</Levels>
				<Levels level='4' identifier='c.'>
					Call Queues
				</Levels>
				<Levels level='4' identifier='d.'>
					Auto Attendants
				</Levels>
				<Levels level='4' identifier='e.'>
					Timeframes
				</Levels>
				<Levels level='4' identifier='f.'>
					Answering Rules
				</Levels>
				<Levels level='2' identifier='ii.'>
					Point DIDs and verify E911 assignment in Homir
				</Levels>
				<Levels level='3' identifier='❗'>
					E911 is always pointed to an extension that is most likely to be
					answered. If E911 call gets disconnected, emergency services will call
					our E911 number to get the client back.
				</Levels>
				<Levels level='3' identifier='❗'>
					The E911 number should never be pointed to voicemail, an auto
					attendant, or a call queue.
				</Levels>
				<Levels level='2' identifier='iii.'>
					Test - Numbers, Queues, Forwarding, Translations
				</Levels>
				<Levels level='3' identifier='•'>
					You can assign a temp number from the "tempforward" domain to test the
					call flow, reassign to this domain when testing is complete.
				</Levels>
				<Levels level='1' identifier='c.' subtitle>
					Phones
				</Levels>
				<Levels level='2' identifier='i.'>
					(If Rentals and/or Purchase)
				</Levels>
				<Levels level='3' identifier='•'>
					Submit phone order via OTRS
				</Levels>
				<Levels level='4' identifier='a.'>
					Queue - Provisioning
				</Levels>
				<Levels level='4' identifier='b.'>
					Owner/Responsible - Provisioning OTRS
				</Levels>
				<Levels level='4' identifier='c.'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='order_phone.png' />
				<Levels level='3' identifier='•'>
					Provisioning will update the ticket with shipping information once
					received from phone vendor.
				</Levels>
				<Levels level='2' identifier='iv.'>
					(If client owned phones)
				</Levels>
				<Levels level='3' identifier='•'>
					Obtain MAC and Make/Model information
				</Levels>
				<Levels level='3' identifier='•'>
					Ensure phones are supported models.
				</Levels>
				<Levels level='3' identifier='•'>
					Submit list of phones (Make, Model, MAC) for provisioning via an OTRS
					ticket for addition to our provisioning server - include extension
					assignment. (See example below)
				</Levels>
				<Levels level='1' identifier='d.' subtitle>
					Ship Equipment or Stage in S&R Room
				</Levels>
				<Levels level='2' identifier='i.'>
					(If Shipping) Submit via an OTRS ticket
				</Levels>
				<SopImage imageUrl='ship_equip.png' />
				<Levels level='1' identifier='e.' subtitle>
					Test Phones Onsite
				</Levels>
				<Levels level='2' identifier='i.'>
					When installing with Verve network equipment, test when network
					equipment is installed.
				</Levels>
				<Levels level='2' identifier='ii.'>
					If installing on client network, coordinate site visit or onsite
					contact to test in advance (If porting, allow for enough time to
					postpone the port if testing fails.3 - 4 business days minimum,
					ideally 1 week or more in advance)
				</Levels>
				<Levels level='1' identifier='f.' subtitle>
					Installation
				</Levels>
				<Levels level='2' identifier='i.'>
					Work with the technician to install and test all equipment/phones.
				</Levels>
				<Levels level='2' identifier='ii.'>
					Contact provisioning via Slack when ready to activate ports.
				</Levels>
				<Levels level='2' identifier='iii.'>
					Test numbers, E911/Call 933
				</Levels>
				<Levels level='2' identifier='iv.'>
					Using Homir email templates, send Service Activation Email -{' '}
					<span className='underline'>
						This is required to be sent within 24 hours after installation is
						complete.
					</span>
				</Levels>
				<Levels level='2' identifier='v.'>
					Add installation photos to client folder.
				</Levels>
				<Levels level='1' identifier='g.' subtitle>
					Closeout Order
				</Levels>
				<Levels level='2' identifier='i.'>
					Update Homir with any non-standard configuration or call flow
					information.
				</Levels>
				<Levels level='2' identifier='ii.'>
					Submit billing via OTRS ticket -{' '}
					<span className='underline'>
						This should be submitted ASAP, no more than 5 business days. If the
						end of the month, it needs to be immediate.
					</span>{' '}
					Much of the legwork for billings can be done in advance to allow for
					quicker submittal.
				</Levels>
				<Levels level='3' identifier='a.'>
					Queue - Order Processing - TPC Order Completion
				</Levels>
				<Levels level='3' identifier='b.'>
					Owner/Responsible - Order Processing
				</Levels>
				<Levels level='3' identifier='c.'>
					Select appropriate text template
				</Levels>
				<SopImage imageUrl='closeout_order.png' />
				<Levels level='2' identifier='iii.'>
					Clear Billing Discrepancies in Homir
				</Levels>
				<Levels level='2' identifier='iv.'>
					If <span className='field-nation'>Field Nation</span> completed the
					installation, provide a review on the OTRS ticket within 24 hours of
					completed dispatch.
				</Levels>
				<Levels level='2' identifier='v.'>
					Using Homir email templates, submit C-SAT Survey Email
				</Levels>
				<Levels level='2' identifier='vi.'>
					Using Homir email templates, submit Support Handoff email to client
					after Go-Live support phase completes
				</Levels>
				<Levels level='2' identifier='vii.'>
					(Optional) Send High Touch Support Handoff email to support team (in
					Email Templates folder)
				</Levels>
				<Levels level='2' identifier='viii.'>
					Verify L: drive client folder is in order.
				</Levels>
				<Levels level='2' identifier='ix.'>
					Verify Homir order information is complete.
				</Levels>
				<Levels level='3' identifier='1.'>
					Ops Contact
				</Levels>
				<Levels level='3' identifier='2.'>
					Billing Contact
				</Levels>
				<Levels level='3' identifier='3.'>
					IP field (Type <span className='bold'>N/A</span> if not applicable)
				</Levels>
				<Levels level='3' identifier='4.'>
					Update Homir Order Status to "
					<span className='bold'>Ops Items Complete</span>"
				</Levels>
				<Levels level='4' identifier='i.'>
					If no C-SAT is being sent due to partner being the contact, update to
					"<span className='bold'>Ops Items Complete, No CSAT</span>"
				</Levels>
				<Levels level='3' identifier='5.'>
					Order dates
				</Levels>
				<Levels level='2' identifier='x.'>
					Move the Outlook Public folder to the correct alpha folder.
				</Levels>
			</section>
		</div>
	);
};

export default VoiceOrder;
