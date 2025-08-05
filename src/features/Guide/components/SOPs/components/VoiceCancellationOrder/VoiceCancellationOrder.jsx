import React from 'react';
import { SopImage, SopImageBig } from '../../../../../../components/Images';
import Levels from '../../../../../../components/Levels';
import NumberFormatter from '../../../../../../components/NumberFormatter';

const VoiceCancellationOrder = () => {
	return (
		<div id='voice-cancel'>
			<div className='title'>
				<h2>How to Process a Voice Disconnect/Closeout/Cancellation Order</h2>
			</div>
			<section>
				<div className='section-title'>1. Research/Check for Usage</div>
				<Levels level='1' identifier='a.'>
					<span className='attention'>
						Before you start, confirm that the cancellation is ready to process
						by checking call history/current phone registration in NMS and notes
						in HOMIR.
					</span>
				</Levels>
				<Levels level='2' identifier='i.'>
					If there is usage, lock the domain (unless it is dependant on other
					domains dial translations) and email Client Services with Joel CC'd to
					determine if the closeout is valid.
				</Levels>
				<Levels level='3' identifer='•'>
					Follow directions of Client Services.
				</Levels>
				<Levels level='2' identifier='ii.'>
					If there is no response within 2 business days, proceed with the
					closeout.
				</Levels>
				<Levels level='1' identifier='b.'>
					Pay careful attention to the domain name and be sure you are canceling
					the correct domain. Some customer domains are very similar, i.e.
					bluewater.myvrv vs. bluepoint.myvrv
				</Levels>
			</section>
			<section>
				<div className='section-title'>
					2. Removal of Specific Configuration Items
				</div>
				<Levels level='1' identifier='a.'>
					NMS admin -
				</Levels>
				<Levels level='2' identifier='i.'>
					Delete all UI configs in System ➜ Settings ➜ Advanced ➜ UI Config ➜
					filter by domain ➜ Edit ➜ Delete
				</Levels>
				<Levels level='2' identifier='ii.'>
					(<span className='red'>SIP trunk cancellations only</span>) Delete all
					connections for your domain under Connections ➜ Connections ➜ filter
					by domain
				</Levels>
				<Levels level='1' identifier='b.'>
					NDP -
				</Levels>
				<Levels level='2' identifier='i.'>
					Configurations ➜ Gateways ➜ Analog ➜ filter by domain and delete any
					device entries (Click on the device model number, select 'Delete' and
					then confirm deletion)
				</Levels>
				<Levels level='2' identifier='ii.'>
					Configurations ➜ Directory Designer ➜ filter by domain and delete any
					custom directories
				</Levels>
				<Levels level='2' identifier='iii.'>
					Configurations ➜ Defaults ➜ Domain Specific ➜ scroll through the list
					to find your domain, click on the domain name, and then delete domain
					specific overrides
				</Levels>
				<Levels level='1' identifier='c.'>
					HOMIR -
				</Levels>
				<Levels level='2' identifier='i.'>
					(
					<span className='red'>
						OITC, Bluelabel, Nexogy, Skynet toll free, and FaxBack numbers only
					</span>
					) Submit an OTRS ticket to remove any phone numbers from Sansay switch
				</Levels>
				<Levels level='3' identifier='•'>
					<strong>Queue</strong> - Carrier Services
				</Levels>
				<Levels level='3' identifier='•'>
					<strong>Owner</strong> - Carrier Services
				</Levels>
				<Levels level='3' identifier='•'>
					<strong>Responsible</strong> - Carrier Services
				</Levels>
				<Levels level='3' identifier='•'>
					<strong>Text Template</strong> - Number Deprovisioning Request
				</Levels>
				<SopImageBig imageUrl='sansay_number_removal.png' />
				<NumberFormatter />
				<Levels level='2' identifier='ii.'>
					Reassign all numbers on domain:
				</Levels>
				<Levels level='3'>
					<span className='attention'>
						Note: DO NOT <span className='underline'>UNASSIGN</span> CLIENT
						NUMBERS OTHER THAN E911! This will cause a sync issue between HOMIR
						and NMS phone number inventory.
					</span>
				</Levels>
				<Levels level='3' identifier='•'>
					<span className='bold'>Unassign</span> E911 number(s) (note field is
					deleted when unassigned)
				</Levels>
				<Levels level='3' identifier='•'>
					<span className='bold'>Reassign</span> all client numbers (TN, TF,
					Fax)
				</Levels>
				<Levels level='4' identifier='a.'>
					Select the appropriate 'tobecancelled' domain based on voice server
				</Levels>
				<Levels level='4' identifier='b.'>
					Assign to ext. 2000
				</Levels>
				<Levels level='4' identifier='c.'>
					Add a note 'Removed from [client name] on [date]'
				</Levels>
				<Levels level='2' identifier='iii.'>
					Check 'Voice' section on client page to confirm no numbers are
					present.
				</Levels>
				<SopImage imageUrl='number_check.png' />
				<Levels level='2' identifier='iv.'>
					If numbers are present, please search in HOMIR under Voice ➜ Number
					Search ➜ Search by Client for numbers assigned:
				</Levels>
				<Levels level='3' identifier='•'>
					<span className='bold'>Reassign</span> all client numbers (TN, TF,
					Fax)
				</Levels>
				<Levels level='4' identifier='a.'>
					Select the appropriate 'tobecancelled' domain based on voice server
				</Levels>
				<Levels level='4' identifier='b.'>
					Assign to ext. 2000
				</Levels>
				<Levels level='4' identifier='c.'>
					Add a note 'Removed from [client name] on [date]'
				</Levels>
				<Levels level='2' identifier='v.'>
					Decommission of CRM, SMS, Fax
				</Levels>
				<Levels level='3' identifier='•'>
					Check on the client page to see if there is information about any of
					the following services present:
				</Levels>
				<SopImage imageUrl='services_check.png' />
				<Levels level='3'>
					If yes, submit OTRS ticket to cancel services.
				</Levels>
				<Levels level='4' identifier='a.'>
					Owner - Provisioning OTRS
				</Levels>
				<Levels level='4' identifier='b.'>
					Responsible - Provisioning OTRS
				</Levels>
				<SopImage imageUrl='service_cancel_otrs.png' />
				<Levels level='2' identifier='vi.'>
					Deactivate Domain
				</Levels>
				<Levels level='3' identifier='1.'>
					Voice ➜ Domains
				</Levels>
				<Levels level='3' identifier='2.'>
					CTRL+F and search for the domain name
				</Levels>
				<Levels level='3' identifier='3.'>
					Click 'Edit' to the right of the domain name
				</Levels>
				<Levels level='3' identifier='4.'>
					Uncheck 'Active'
				</Levels>
				<Levels level='3' identifier='5.'>
					Click 'Save Changes'
				</Levels>
				<SopImage imageUrl='deactivate_domain.png' />
				<Levels level='1' identifier='d.'>
					NMS Portal -
				</Levels>
				<Levels level='2' identifier='i.'>
					Search for the voice domain and click on it
				</Levels>
				<Levels level='2' identifier='ii.'>
					Delete each <span className='bold'>Call Queue</span>
				</Levels>
				<Levels level='2' identifier='iii.'>
					On the Home tab, check the box for{' '}
					<span className='bold'>Users and Applications</span> on the right hand
					side of the screen - look at the{' '}
					<span className='bold'>Phone numbers</span> and that number should be
					zero.
				</Levels>
				<Levels level='3' identifier='•'>
					If not (
					<span className='red'>
						Nexogy specifically has this as a common occurrence
					</span>
					), click on View ALL Domains ➜ Click on Inventory ➜ filter by domain
				</Levels>
				<Levels level='3' identifier='•'>
					<span className='bold'>Reassign</span> all client numbers to the
					appropriate 'tobecancelled' domain based on the voice server, assign
					to ext. 2000 and add a note 'Removed from [client name] on [date]'
				</Levels>
				<Levels level='3' identifier='•'>
					Check '<span className='bold'>Inventory</span>' tab for the domain in
					NMS to verify no numbers are present.
				</Levels>
				<Levels level='1' identifier='e.'>
					<span className='bold'>Delete Domain in NMS Portal</span> (
					<span className='red'>Once All steps are complete</span>)
				</Levels>
				<Levels level='2' identifier='i.'>
					Navigate to the main domain tab, search for domain
				</Levels>
				<Levels level='2' identifier='ii.'>
					Need to make sure to set the Phone numbers, SMS numbers, and Phone
					Hardware options all to Delete instead of unassign. These options
					default to Unassign, so this must be updated during the process (see
					screenshot below):
				</Levels>
				<SopImage imageUrl='delete_domain_nms.png' />
			</section>
			<section>
				<div className='section-title'>3. Closeout Order in HOMIR</div>
				<Levels level='1' identifier='a.'>
					Make sure to switch to Checklist View so you can check off the
					Operations items
				</Levels>
				<SopImage imageUrl='voice_cancel_closeout.png' />
				<Levels level='1' identifier='b.'>
					Update Cancellation order status to '
					<span className='bold'>Ops Items Complete</span>'
				</Levels>
				<Levels level='1' identifier='c.'>
					Send email in the following format:
				</Levels>
				<Levels level='2' identifier='i.'>
					To: Director of Service Delivery
				</Levels>
				<Levels level='2' identifier='ii.'>
					CC: Supervisor/Manager
				</Levels>
				<Levels level='2' identifier='iii.'>
					Subject: [Cancellation Order Title] - Ops Items Complete
				</Levels>
				<Levels level='2' identifier='iv.'>
					Body: Link to cancellation order
				</Levels>
				<Levels level='1' identifier='d.'>
					Complete order checklist
				</Levels>
				<Levels level='2' identifier='i.'>
					If this is also an Account Closeout - ensure to follow the SOP to
					close the account.
				</Levels>
			</section>
		</div>
	);
};

export default VoiceCancellationOrder;
