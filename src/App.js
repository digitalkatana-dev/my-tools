import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import Auth from './features/Auth';
import ForgotPassword from './features/ForgotPassword';
import ResetPassword from './features/ResetPassword';
import Home from './features/Home';
import Generator from './features/Generator';
import Guide from './features/Guide';
// import Projects from './features/Projects';
import Settings from './features/Settings';
import UnderConstruction from './components/UnderConstruction';

function App() {
	const { theme, showHome, showGenerator } = useSelector((state) => state.app);
	const { activeUser } = useSelector((state) => state.user);

	return (
		<div className='app' data-theme={theme}>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							activeUser ? (
								<ProtectedRoute
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
							) : (
								<MainLayout children={<Auth />} />
							)
						}
					/>
					<Route
						path='/forgot'
						element={<MainLayout children={<ForgotPassword />} />}
					/>
					<Route
						path='/reset-password/:id'
						element={<MainLayout children={<ResetPassword />} />}
					/>
					{showHome && (
						<Route
							path='/generator'
							element={
								<ProtectedRoute
									element={<MainLayout children={<Generator />} />}
								/>
							}
						/>
					)}
					{(showHome || showGenerator) && (
						<Route
							path='/guides'
							element={
								<ProtectedRoute element={<MainLayout children={<Guide />} />} />
							}
						/>
					)}
					<Route
						path='/projects'
						element={
							<ProtectedRoute
								element={<MainLayout children={<UnderConstruction />} />}
							/>
						}
					/>
					<Route
						path='/settings'
						element={
							<ProtectedRoute
								element={<MainLayout children={<Settings />} />}
							/>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
