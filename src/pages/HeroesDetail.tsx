import { useParams } from "react-router";
import { useState, useEffect } from "react";
import favoriteContext from "../context/favorites";
import { useContext } from "react";
import FavoriteButton from "../components/FavoriteButton";

function HeroesDetail() {

	const { id } = useParams();
	const [heroDetails, setHeroDetails] = useState(null);
	const {favorites, setFavorites, isFavorite, removeFavorite} = useContext(favoriteContext);

	useEffect(() => {
		const getHeroDetails = async () => {
			const response = await fetch(
				`https://akabab.github.io/superhero-api/api/id/${id}.json`,
			);
			const data = await response.json();			
			setHeroDetails(data);
		}

		getHeroDetails();
	}, [id]);
	
  return (
			<>
				{heroDetails && (
					<article>
						<img src={heroDetails.images.lg} alt="heroimage" />
						<p>{heroDetails.name}</p>
						{heroDetails.biography.aliases.map((alias) => (
							<p>{alias}</p>
						))}
						<FavoriteButton
							favorites={favorites}
							setFavorites={setFavorites}
							isFavorite={isFavorite}
							removeFavorite={removeFavorite}
							hero={heroDetails}
						/>
					</article>
				)}
			</>
		);
}

export default HeroesDetail;
