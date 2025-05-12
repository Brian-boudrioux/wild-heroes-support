import { useParams } from "react-router";
import { useState, useEffect } from "react";

function HeroesDetail() {

	const { id } = useParams();
	const [heroDetails, setHeroDetails] = useState(null);

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
					</article>
				)}
			</>
		);
}

export default HeroesDetail;
