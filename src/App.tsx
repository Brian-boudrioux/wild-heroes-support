import './App.css';
import { Outlet } from 'react-router';

function App() {
  // todo log data here
  
  return (
    <>
			<header>My hero App</header>
      <Outlet />
			<footer>@copyright 2025 wildcodeschool</footer>
		</>
  )
}

export default App
