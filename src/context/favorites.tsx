import { createContext, useState } from "react";

const favoriteContext = createContext(null);

function FavoriteProvider({children}) {
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
		<favoriteContext.Provider value={{favorites, setFavorites, isFavorite, removeFavorite}}>
			{children}
		</favoriteContext.Provider>
	)
}

export default favoriteContext;
export { FavoriteProvider };


