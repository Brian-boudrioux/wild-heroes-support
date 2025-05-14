import { useNavigate, useOutletContext } from "react-router";
import favoriteContext from "../context/favorites";
import { useContext } from "react";
import FavoriteButton from "./FavoriteButton";

function HeroesItem({hero}) {

	const navigate = useNavigate();
	const {favorites, setFavorites, isFavorite, removeFavorite} = useOutletContext()

  return (
			<article className="hero-card">
				<img src={hero.images.sm} alt="heroimg" />
				<p>{hero.name}</p>
				<button type="button" onClick={() => navigate(`/heroes/${hero.id}`)}>
					Voir le détail
				</button>
				<FavoriteButton
					favorites={favorites}
					setFavorites={setFavorites}
					isFavorite={isFavorite}
					removeFavorite={removeFavorite}
					hero={hero}
				/>
			</article>
		);
}

export default HeroesItem;
