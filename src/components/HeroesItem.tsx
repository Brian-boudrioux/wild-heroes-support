import { useNavigate } from "react-router";

function HeroesItem({hero}) {

	const navigate = useNavigate();

  return (
    <article className='hero-card' onClick={() => navigate(`/heroes/${hero.id}`)}>
      <img src={hero.images.sm} alt='heroimg' />
			<p>{hero.name}</p>
    </article>
  );
}

export default HeroesItem;
