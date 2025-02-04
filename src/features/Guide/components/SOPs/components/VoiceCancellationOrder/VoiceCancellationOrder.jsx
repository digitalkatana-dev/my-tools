import React from 'react';
import { SopImage, SopImageBig } from '../../../../../../components/Images';
import {
	Level1,
	Level2,
	Level3,
	Level4,
} from '../../../../../../components/Levels';

const VoiceCancellationOrder = () => {
	return (
		<div id='voice-cancel'>
			<div className='title'>
				<h2>How to Process a Voice Disconnect/Closeout/Cancellation Order</h2>
			</div>
			<section>
				<div className='section-title'>1. Research/Check for Usage</div>
				<Level1 identifier='a.'>
					<span className='attention'>
						Before you start, confirm that the cancellation is ready to process
						by checking call history/current phone registration in NMS and notes
						in HOMIR.
					</span>
				</Level1>
				<Level1 identifier='b.'>
					Pay careful attention to the domain name and be sure you are canceling
					the correct domain. Some customer domains are very similar, i.e.
					bluewater.myvrv vs. bluepoint.myvrv
				</Level1>
			</section>
			<section>
				<div className='section-title'>
					2. Removal of Specific Configuration Items
				</div>
				<Level1 identifier='a'>NMS admin -</Level1>
				<Level2 identifier='i.'>
					Delete all UI configs in System ➜ Settings ➜ Advanced ➜ UI Config ➜
					filter by domain ➜ Edit ➜ Delete
				</Level2>
				<Level2 identifier='ii.'>
					(<span className='red'>SIP trunk cancellations only</span>) Delete all
					connections for your domain under Connections ➜ Connections ➜ filter
					by domain
				</Level2>
				<Level1 identifier='b.'>NDP -</Level1>
				<Level2 identifier='i.'>
					Configurations ➜ Gateways ➜ Analog ➜ filter by domain and delete any
					device entries (Click on the device model number, select 'Delete' and
					then confirm deletion)
				</Level2>
				<Level2 identifier='ii.'>
					Configurations ➜ Directory Designer ➜ filter by domain and delete any
					custom directories
				</Level2>
				<Level2 identifier='iii.'>
					Configurations ➜ Defaults ➜ Domain Specific ➜ scroll through the list
					to find your domain, click on the domain name, and then delete domain
					specific overrides
				</Level2>
				<Level1 identifier='c.'>HOMIR -</Level1>
				<Level2 identifier='i.'>
					(
					<span className='red'>
						OITC, Bluelabel, Nexogy, Skynet toll free, and FaxBack numbers only
					</span>
					) Submit an OTRS ticket to remove any phone numbers from Sansay switch
				</Level2>
				<SopImageBig imageUrl='sansay_number_removal.png' />
				<Level2 identifier='ii.'>Reassign all numbers on domain:</Level2>
				<Level3>
					<span className='attention'>
						Note: DO NOT <span className='underline'>UNASSIGN</span> CLIENT
						NUMBERS OTHER THAN E911! This will cause a sync issue between HOMIR
						and NMS phone number inventory.
					</span>
				</Level3>
				<Level3 identifier='•'>
					<span className='bold'>Unassign</span> E911 number(s) (note field is
					deleted when unassigned)
				</Level3>
				<Level3 identifier='•'>
					<span className='bold'>Reassign</span> all client numbers (TN, TF,
					Fax)
				</Level3>
				<Level4 identifier='a.'>
					Select the appropriate 'tobecancelled' domain based on voice server
				</Level4>
				<Level4 identifier='b.'>Assign to ext. 2000</Level4>
				<Level4 identifier='c.'>
					Add a note 'Removed from [client name] on [date]'
				</Level4>
				<Level2 identifier='iii.'>
					Check 'Voice' section on client page to confirm no numbers are
					present. If numbers are present, submit ticket to engineering to
					remove.
				</Level2>
				<SopImage imageUrl='number_check.png' />
				<Level2 identifier='iv.'>Decommission of CRM, SMS, Fax</Level2>
				<Level3 identifier='•'>
					Check on the client page to see if there is information about any of
					the following services present:
				</Level3>
				<SopImage imageUrl='services_check.png' />
				<Level3>If yes, submit OTRS ticket to cancel services.</Level3>
				<Level4 identifier='a.'>Owner - Provisioning OTRS</Level4>
				<Level4 identifier='b.'>Responsible - Provisioning OTRS</Level4>
				<SopImage imageUrl='service_cancel_otrs.png' />
				<Level2 identifier='v.'>Deactivate Domain</Level2>
				<Level3 identifier='1.'>Voice ➜ Domains</Level3>
				<Level3 identifier='2.'>CTRL+F and search for the domain name</Level3>
				<Level3 identifier='3.'>
					Click 'Edit' to the right of the domain name
				</Level3>
				<Level3 identifier='4.'>Uncheck 'Active'</Level3>
				<Level3 identifier='5.'>Click 'Save Changes'</Level3>
				<SopImage imageUrl='deactivate_domain.png' />
				<Level1 identifier='d.'>NMS Portal -</Level1>
				<Level2 identifier='i.'>
					Search for the voice domain and click on it
				</Level2>
				<Level2 identifier='ii.'>
					Delete each <span className='bold'>Call Queue</span>
				</Level2>
				<Level2 identifier='iii.'>
					On the Home tab, check the box for{' '}
					<span className='bold'>Users and Applications</span> on the right hand
					side of the screen - look at the{' '}
					<span className='bold'>Phone numbers</span> and that number should be
					zero.
				</Level2>
				<Level3 identifier='•'>
					If not (
					<span className='red'>
						Nexogy specifically has this as a common occurrence
					</span>
					), click on View ALL Domains ➜ Click on Inventory ➜ filter by domain
				</Level3>
				<Level3 identifier='•'>
					<span className='bold'>Reassign</span> all client numbers to the
					appropriate 'tobecancelled' domain based on the voice server, assign
					to ext. 2000 and add a note 'Removed from [client name] on [date]'
				</Level3>
				<Level3 identifier='•'>
					Check '<span className='bold'>Inventory</span>' tab for the domain in
					NMS to verify no numbers are present.
				</Level3>
				<Level1 identifier='e.'>
					<span className='bold'>Delete Domain in NMS Portal</span> (
					<span className='red'>Once All steps are complete</span>)
				</Level1>
				<Level2 identifier='i.'>
					Navigate to the main domain tab, search for domain
				</Level2>
				<Level2 identifier='ii.'>
					Need to make sure to set the Phone numbers, SMS numbers, and Phone
					Hardware options all to Delete instead of unassign. These options
					default to Unassign, so this must be updated during the process (see
					screenshot below):
				</Level2>
				<SopImage imageUrl='delete_domain_nms.png' />
			</section>
			<section>
				<div className='section-title'>3. Closeout Order in HOMIR</div>
				<Level1 identifier='a.'>
					Make sure to switch to Checklist View so you can check off the
					Operations items
				</Level1>
				<SopImage imageUrl='voice_cancel_closeout.png' />
				<Level1 identifier='b.'>
					Update Cancellation order status to '
					<span className='bold'>Ops Items Complete</span>'
				</Level1>
				<Level1 identifier='c.'>Send email in the following format:</Level1>
				<Level2 identifier='i.'>To: Director of Service Delivery</Level2>
				<Level2 identifier='ii.'>CC: Supervisor/Manager</Level2>
				<Level2 identifier='iii.'>
					Subject: [Cancellation Order Title] - Ops Items Complete
				</Level2>
				<Level2 identifier='iv.'>Body: Link to cancellation order</Level2>
				<Level1 identifier='d.'>Complete order checklist</Level1>
				<Level2 identifier='i.'>
					If this is also an Account Closeout - ensure to follow the SOP to
					close the account.
				</Level2>
			</section>
		</div>
	);
};

export default VoiceCancellationOrder;
