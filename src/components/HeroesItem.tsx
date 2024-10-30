import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Hero } from "./HeroesList";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroesItemProps {
  hero: Hero
}

function HeroesItem({hero} : HeroesItemProps) {

  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <article className='hero-card' onClick={() => navigate(`/${hero.id}`)}>
      <h3>
        {hero.name} <FontAwesomeIcon onClick={() => setFavorite(!favorite)} style={favorite ? {color: 'red'} : {}} icon={faHeart} />
      </h3>
      {hero?.images?.sm && <img src={hero?.images?.sm} />}
      <p>{hero.biography?.alignment}</p>
    </article>
  );
}

export default HeroesItem;
