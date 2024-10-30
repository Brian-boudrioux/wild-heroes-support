import { useNavigate, useParams } from 'react-router-dom';
import heroes from '../data.json';

function HeroesDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const heroe = heroes.find((heroe) => heroe.id === Number(id));

  return (
    <article className="hero-detail">
      <button onClick={() => navigate("/")}>back to the list</button>
      <h3>
        {heroe.name}
      </h3>
      {heroe?.images?.sm && <img src={heroe?.images?.lg} />}
      <p>{heroe.biography?.alignment}</p>
    </article>
  );
}

export default HeroesDetail;
