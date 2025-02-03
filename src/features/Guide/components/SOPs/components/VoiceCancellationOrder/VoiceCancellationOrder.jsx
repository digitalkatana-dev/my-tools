import React from 'react';
import { SopImage, SopImageBig } from '../../../../../../components/Images';
import {
	Level1,
	Level2,
	Level3,
	Level4,
	Level5,
} from '../../../../../../components/Levels';
import Tooltip from '../../../../../../components/Tooltip';

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
			</section>
		</div>
	);
};

export default VoiceCancellationOrder;
