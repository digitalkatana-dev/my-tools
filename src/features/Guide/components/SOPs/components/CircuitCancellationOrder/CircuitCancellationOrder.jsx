import React from 'react';
import { SopImageBig } from '../../../../../../components/Images';
import Levels from '../../../../../../components/Levels';

const CircuitCancellationOrder = () => {
	return (
		<div id='circuit-cancel'>
			<div className='title'>
				<h3>How to Process a Circuit Cancellation Order</h3>
			</div>
			<section>
				<div className='section-title'>
					1. Confirm circuit is ready to be cancelled.
				</div>
				<Levels level='1' identifier='a.'>
					Review notes on HOMIR cancellation order
				</Levels>
				<Levels level='1' identifier='b.'>
					Check HOMIR circuit page for bandwidth usage
				</Levels>
			</section>
			<section>
				<div className='section-title'>2. NNI Cancellations</div>
				<Levels level='1' identifier='a.'>
					Determine Core router
				</Levels>
				<Levels level='2' identifier='i.'>
					NLI-LA-CORE-1
				</Levels>
				<Levels level='2' identifier='ii.'>
					NLI-SD-CORE-1
				</Levels>
				<Levels level='2' identifier='iii.'>
					NLI-STL-CORE-1
				</Levels>
				<Levels level='1' identifier='b.'>
					Find client interface on Rancid (
					<a
						className='link'
						href='http://rancid/cgi-bin/cvsweb/'
						target='_blank'
						rel='noreferrer'
					>
						http://rancid/cgi-bin/cvsweb/
					</a>
					)
				</Levels>
				<Levels level='2' identifier='i.'>
					Open Rancid ➜ Select 'castle' for SD, 'los-angeles' for LA, 'St-Louis'
					for St. Louis ➜ Select 'configs/' ➜ Click on the number in the 'Rev.'
					column next to the correct core router. CTRL-F and search for the
					client name or VLAN ID
				</Levels>
				<SopImageBig imageUrl='circuit_cancel_2_b_1.png' />
				<Levels level='2' identifier='ii.'>
					Copy interface configuration to cancellation order notes
				</Levels>
				<Levels level='2' identifier='iii.'>
					Find route statement by adding 1 to the last octet of the IP shown on
					the interface and searching via CTRL-F. Example:
				</Levels>
				<SopImageBig imageUrl='circuit_cancel_2_b_3.png' />
				<Levels level='1' identifier='c.'>
					Locate appropriate core closeout template on share drive:
					L/Operations/Service Delivery/Templates/Configurations/Closeout and
					submit a ticket via OTRS ➜ Engineering ➜ Closeouts ➜ Closeout core
					template.
				</Levels>
			</section>
			<section>
				<div className='section-title'>
					3. NNI, DIA, and wireless broadband cancellations
				</div>
				<Levels level='1' identifier='a.'>
					Remove monitoring
				</Levels>
				<Levels level='2' identifier='i.'>
					HOMIR Graphs (<span className='red'>NNI circuits only</span>)
				</Levels>
				<Levels level='3' identifier='1.'>
					Open client HOMIR page and select 'Graphs' ➜ Edit Graph Availabilities
					➜ Deselect the circuit that is being cancelled ➜ Save Changes
				</Levels>
				<Levels level='2' identifier='ii.'>
					HOMIR circuit monitoring (NNI, DIA, and wireless broadband)
				</Levels>
				<Levels level='3' identifier='1.'>
					Open circuit page, click 'Edit,' and set Active, Pending, and
					Monitored to “False.”
				</Levels>
				<Levels level='3' identifier='2.'>
					Remove IP from 'ICMP Monitored' field and put reason for removal in
					'Removal Reason' field.
				</Levels>
				<Levels level='2' identifier='iii.'>
					Switchport Monitoring (<span className='red'>NNI Only</span>) -{' '}
					<span className='attention'>
						DO NOT REMOVE THE SWITCHPORT!!!!!!!!
					</span>{' '}
					The switchport is a physical device on our core switches and routers
				</Levels>
				<Levels level='3' identifier='1.'>
					In HOMIR, navigate to Co-Lo ➜ Switchports
				</Levels>
				<Levels level='3' identifier='2.'>
					CTRL-F for client name or VLAN ID, click 'edit' to the right and set
					the following:
				</Levels>
				<Levels level='4' identifier='a.'>
					Client - None
				</Levels>
				<Levels level='4' identifier='b.'>
					VLAN - None
				</Levels>
				<Levels level='4' identifier='c.'>
					Save changes
				</Levels>
				<Levels level='2' identifier='iv.'>
					LibreNMS monitoring (<span className='red'>DIA circuits only</span>)
				</Levels>
				<Levels level='3' identifier='1.'>
					Log in to LibreNMS (
					<a
						className='link'
						href='http://libre.nextlevelinternet.com/'
						target='_blank'
						rel='noreferrer'
					>
						http://libre.nextlevelinternet.com/
					</a>
					)
				</Levels>
				<Levels level='3' identifier='2.'>
					Hover of 'Devices' and select 'All Devices'
				</Levels>
				<Levels level='3' identifier='3.'>
					Search for the onsite device IP using the 'Global Search' bar in the
					top right corner
				</Levels>
				<Levels level='3' identifier='4.'>
					To the right of your device, click the Cog icon to edit the device
				</Levels>
				<Levels level='3' identifier='5.'>
					Confirm the IP you see on the screen is the correct one and then click
					'Delete Device'
				</Levels>
				<SopImageBig imageUrl='libre.png' />
			</section>
			<section>
				<div className='section-title'>
					4. Closing out circuit cancellation orders
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

export default CircuitCancellationOrder;
