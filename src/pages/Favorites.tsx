import favoriteContext from "../context/favorites";
import { useContext } from "react";
import HeroesItem from "../components/HeroesItem";

function Favorites() {
	const {favorites} = useContext(favoriteContext);

	return (
		<section>
			{favorites.map((hero) => (
				<HeroesItem key={hero.id}  hero={hero} />
			))}
		</section>
	);
}

export default Favorites;