import { useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router';

function App() {
  // todo log data here
	const [favorites, setFavorites] = useState([]);
	
		const isFavorite = (hero) => {
			const exist = favorites.find((fav) => fav.id === hero.id)
			if (exist) return true;
			return false;
		}
	
		const removeFavorite = (hero) => {
			const favs = favorites.filter((fav) => fav.id !== hero.id)
			setFavorites(favs);
		}
  
  return (
    <>
			<header>My hero App</header>
			<nav>
				<Link to={"/"}>Accueil</Link>
				<Link to={"/favorites"}>Favoris</Link>
			</nav>
      <Outlet context={{favorites, setFavorites, isFavorite, removeFavorite}} />
			<footer>@copyright 2025 wildcodeschool</footer>
		</>
  )
}

export default App
