import { useState, useEffect } from "react";
import HeroesItem from "../components/HeroesItem";

function HeroesList() {

	const [name, setName] = useState("");
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		const getHeroes = async () => {
			const response = await fetch(
				"https://akabab.github.io/superhero-api/api/all.json",
			);
			const data = await response.json();
			setHeroes(data);
		};

		getHeroes();
	}, []);

	const filteredHeroes = heroes.filter((hero) => hero.name.toLowerCase().includes(name.toLowerCase()));
	
    return (
					<main className="heroes-list">
						<input
							type="text"
							onInput={(event) => setName(event.target.value)}
						/>
						<div>todo : add alignment buttons here</div>
						<section>
							{filteredHeroes.length > 0 ? (
								filteredHeroes.map((hero) => (
									<HeroesItem key={hero.id} hero={hero} />
								))
							) : (
								<p>Aucun résultat trouvée</p>
							)}
						</section>
					</main>
				);
}

export default HeroesList;