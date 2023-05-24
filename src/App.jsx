import './App.css';
import Sidenav from './components/Sidebar';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div className="bg-custom-blue w-full h-full flex flex-row">
			<Sidenav />
			<HomePage />
		</div>
	);
}

export default App;
