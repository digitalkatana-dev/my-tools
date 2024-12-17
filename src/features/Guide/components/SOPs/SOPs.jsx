import { useState } from 'react';
import './sop.scss';
import VoiceOrder from './components/VoiceOrder';

const SOPs = () => {
	const [view, setView] = useState('index');

	const handleClick = (sop) => {
		setView(sop);
	};

	return (
		<div id='sop'>
			{view === 'vo' ? (
				<VoiceOrder goBack={() => setView('index')} />
			) : (
				view === 'index' && (
					<div className='sop-list'>
						<h3 onClick={() => handleClick('vo')}>
							How to Process a Voice Order
						</h3>
					</div>
				)
			)}
		</div>
	);
};

export default SOPs;
