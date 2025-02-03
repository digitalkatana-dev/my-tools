import React from 'react';
import { SopImage } from '../../../../../../components/Images';
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
					<span className='attention'>Before you start, confirm that the cancellation is ready to process by checking call history/current phone registration in NMS and notes in HOMIR.</span>
				</Level1>
				<Level1 identifier='b.'>Pay careful attention to the domain name and be sure you are canceling the correct domain. Some customer domains are very similar, i.e. bluewater.myvrv vs. bluepoint.myvrv</Level1>
			</section>
			<section>
				<div className='section-title'>2. Removal of Specific Configuration Items</div>
				<Level1 identifier='a'>
				NMS admin - 
				</Level1>
				<Level2 identifier='i.'>Delete all UI configs in System ➜ Settings ➜ Advanced ➜ UI Config ➜ filter by domain ➜ Edit ➜ Delete</Level2>
				<Level2 identifier='ii.'>(<span className='red'>SIP trunk cancellations only</span>) Delete all connections for your domain under Connections ➜ Connections ➜ filter by domain</Level2>
			</section>
		</div>
	);
};

export default VoiceCancellationOrder;
