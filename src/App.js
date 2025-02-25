import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './features/Home';
import Generator from './features/Generator';
import Guide from './features/Guide';
import Projects from './features/Projects';
import Settings from './features/Settings';
import UnderConstruction from './components/UnderConstruction';

function App() {
	const { theme, showHome, showGenerator } = useSelector((state) => state.app);

	return (
		<div className='app' data-theme={theme}>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							showHome ? (
								<MainLayout children={<Home />} />
							) : !showHome && showGenerator ? (
								<MainLayout children={<Generator />} />
							) : (
								!showHome &&
								!showGenerator && <MainLayout children={<Guide />} />
							)
						}
					/>
					{showHome && (
						<Route
							path='/generator'
							element={<MainLayout children={<Generator />} />}
						/>
					)}
					{(showHome || showGenerator) && (
						<Route
							path='/guides'
							element={<MainLayout children={<Guide />} />}
						/>
					)}
					<Route
						path='/projects'
						element={<MainLayout children={<UnderConstruction />} />}
					/>
					<Route
						path='/settings'
						element={<MainLayout children={<Settings />} />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
