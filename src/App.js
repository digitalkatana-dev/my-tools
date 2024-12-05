import { useState } from 'react';
import { randomPassword } from './util/helpers';
import './App.css';

function App() {
	const [show, setShow] = useState(false);
	const [length, setLength] = useState('');
	const [password, setPassword] = useState('');
	const current = localStorage.getItem('current');

	const handleReveal = () => {
		setShow(!show);
	};

	const handleClick = () => {
		localStorage.setItem('current', password);
		setShow(true);
		setLength('');
		setPassword('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// setPassword(randomPassword(length));
		setPassword('haYLE3LiNdaB76');
	};

	return (
		<div className='App'>
			<button className='reveal-btn' onClick={handleReveal} />
			{show && (
				<div>
					<h3>Windows:</h3>
					<h4>{current}</h4>
				</div>
			)}
			<form onSubmit={handleSubmit}>
				<input
					type='number'
					placeholder='Enter length'
					value={length}
					onChange={(e) => setLength(e.target.value)}
				/>
				<button type='submit'>Generate</button>
			</form>
			{password && <h3 onClick={handleClick}>{password}</h3>}
		</div>
	);
}

export default App;
