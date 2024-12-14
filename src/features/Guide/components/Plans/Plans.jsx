import { useState } from 'react';
import BusinessEssentials from './components/BusinessEssentials';
import BusinessComplete from './components/BusinessComplete';
import EnterpriseComplete from './components/EnterpriseComplete';
import './plans.scss';

const Plans = () => {
	const [view, setView] = useState('index');

	const handleClick = (plan) => {
		setView(plan);
	};

	return (
		<div id='plans'>
			{view === 'be' ? (
				<BusinessEssentials goBack={() => setView('index')} />
			) : view === 'bc' ? (
				<BusinessComplete goBack={() => setView('index')} />
			) : view === 'ec' ? (
				<EnterpriseComplete goBack={() => setView('index')} />
			) : (
				view === 'index' && (
					<div className='plan-list'>
						<h3 className='be' onClick={() => handleClick('be')}>
							Business Communications Essentials
						</h3>
						<h3 className='bc' onClick={() => handleClick('bc')}>
							Business Communications Complete
						</h3>
						<h3 className='ec' onClick={() => handleClick('ec')}>
							Enterprise Communications Complete
						</h3>
					</div>
				)
			)}
		</div>
	);
};

export default Plans;
