function FavoriteButton({hero, favorites, isFavorite, removeFavorite, setFavorites}) {

	return (
		<button
			type="button"
			onClick={() =>
				!isFavorite(hero)
					? setFavorites([...favorites, hero])
					: removeFavorite(hero)
			}
		>
			{!isFavorite(hero) ? "Ajouter au favoris" : "supprimer des favoris"}
		</button>
	);
}

export default FavoriteButton;