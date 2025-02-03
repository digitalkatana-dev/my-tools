import { useState } from 'react';
import './sop.scss';
import VoiceOrder from './components/VoiceOrder';
import CircuitOrder from './components/CircuitOrder';
import VoiceCancellationOrder from './components/VoiceCancellationOrder';
import CircuitCancellationOrder from './components/CircuitCancellationOrder';

const SOPs = () => {
	const [view, setView] = useState('index');

	const goBack = () => {
		setView('index');
	};

	const handleClick = (sop) => {
		setView(sop);
	};

	return (
		<div id='sop'>
			{view !== 'index' && (
				<h3 className='back-link pressable' onClick={goBack}>
					Back
				</h3>
			)}
			{view === 'vo' ? (
				<VoiceOrder />
			) : view === 'co' ? (
				<CircuitOrder />
			) : view === 'vco' ? (
				<VoiceCancellationOrder />
			) : view === 'cco' ? (
				<CircuitCancellationOrder />
			) : (
				view === 'index' && (
					<div className='sop-list'>
						<h3 onClick={() => handleClick('vo')}>
							How to Process a Voice Order
						</h3>
						<h3 onClick={() => handleClick('co')}>
							How to Process a Circuit Order
						</h3>
						<h3 onClick={() => handleClick('vco')}>
							How to Process a Voice Cancellation Order
						</h3>
						<h3 onClick={() => handleClick('cco')}>
							How to Process a Circuit Cancellation Order
						</h3>
					</div>
				)
			)}
		</div>
	);
};

export default SOPs;
