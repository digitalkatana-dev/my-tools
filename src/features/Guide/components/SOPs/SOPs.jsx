import { useState } from 'react';
import './sop.scss';
import VoiceOrder from './components/VoiceOrder';
import CircuitOrder from './components/CircuitOrder';

const SOPs = () => {
	const [view, setView] = useState('index');

	const handleClick = (sop) => {
		setView(sop);
	};

	return (
		<div id='sop'>
			{view === 'vo' ? (
				<VoiceOrder goBack={() => setView('index')} />
			) : view === 'co' ? (
				<CircuitOrder goBack={() => setView('index')} />
			) : (
				view === 'index' && (
					<div className='sop-list'>
						<h3 onClick={() => handleClick('vo')}>
							How to Process a Voice Order
						</h3>
						<h3 onClick={() => handleClick('co')}>
							How to Process a Circuit Order
						</h3>
					</div>
				)
			)}
		</div>
	);
};

export default SOPs;
