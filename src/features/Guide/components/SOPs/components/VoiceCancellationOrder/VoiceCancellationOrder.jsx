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
		</div>
	);
};

export default VoiceCancellationOrder;
