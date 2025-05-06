import React from 'react';
import { SopImageBig } from '../../../../../../components/Images';
import Levels from '../../../../../../components/Levels';

const AccountCancellationOrder = () => {
	return (
		<div id='acct-cancel'>
			<div className='title'>
				<h3>How to Process an Account Cancellation Order</h3>
			</div>
			<section>
				<div className='section-title'>1. Deactivate client HOMIR page</div>
				<Levels level='1' identifier='a.'>
					Navigate to client page
				</Levels>
				<Levels level='1' identifier='b.'>
					Click on 'Edit' in the client information section
				</Levels>
				<Levels level='1' identifier='c.'>
					Uncheck 'Active' and save changes
				</Levels>
			</section>
			<section>
				<div className='section-title'>2. Check for DNS</div>
				<Levels level='1' identifier='a.'>
					In HOMIR, navigate to Services ➜ DNS and search for your client's name
				</Levels>
				<Levels level='1' identifier='b.'>
					If all fields show 'None' then you don't need to do anything. If any
					field has something other than what is shown below, stop and notify
					Engineering
				</Levels>
				<SopImageBig imageUrl='dns_closeout.png' />
			</section>
			<section>
				<div className='section-title'>3. Archive Outlook folder</div>
				<Levels level='1' identifier='a.'>
					Navigate to All Public Folders ➜ Clients ➜ Alpha
				</Levels>
				<Levels level='1' identifier='b.'>
					Right-click on the client folder and select ‘Move Folder’ option
				</Levels>
				<Levels level='1' identifier='c.'>
					Navigate to All Public Folders ➜ Clients ➜ Archive and select the
					directory with the current year
				</Levels>
			</section>
			<section>
				<div className='section-title'>
					4. Archive client folder on share drive
				</div>
				<Levels level='1' identifier='a.'>
					Navigate to the client folder in the share drive.
					L:\Operations\Clients
				</Levels>
				<Levels level='1' identifier='b.'>
					Right-click on the client folder and select 'Cut'
				</Levels>
				<Levels level='1' identifier='c.'>
					Navigate to and open the archive folder L:\Operations\Clients\_archive
				</Levels>
				<Levels level='1' identifier='d.'>
					Right-click and paste client folder into the _archive folder
				</Levels>
			</section>
			<section>
				<div className='section-title'>
					5. Closing out account cancellation orders
				</div>
				<Levels level='1' identifier='a.'>
					Update cancellation order status to "Ops Items Complete"
				</Levels>
				<Levels level='1' identifier='b.'>
					Send completion email with the following:
				</Levels>
				<Levels level='2' identifier='i.'>
					Subject: [Order Title] - Ops Items Complete
				</Levels>
				<Levels level='2' identifier='ii.'>
					To: Service Delivery Director
				</Levels>
				<Levels level='2' identifier='iii.'>
					CC: Supervisor
				</Levels>
				<Levels level='2' identifier='iv.'>
					Body: copy and paste link to HOMIR cancellation order
				</Levels>
				<Levels level='1' identifier='c.'>
					Complete order checklist
				</Levels>
			</section>
		</div>
	);
};

export default AccountCancellationOrder;
