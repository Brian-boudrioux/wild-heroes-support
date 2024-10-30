import { useState } from "react"
import HeroesItem from "./HeroesItem"

export interface Hero {
    id: number,
    name: string,
    slug: string,
    biography?: {
        alignment: string
    }
    images?: {
        xs: string,
        sm: string,
        md: string,
        lg: string
    }
}

interface HeroesListProps {
    heroes: Hero[]
}

function HeroesList({heroes} : HeroesListProps) {

    const [alignment, setAlignment] = useState("all");
    const [search, setSearch] = useState("");

    const heroesByAlignment = heroes.filter((hero) => hero?.biography?.alignment === alignment || alignment === "all");
    const filteredHeroes = heroesByAlignment.filter((hero) => hero.name.toLowerCase().includes(search));

    return (
      <main className="heroes-list">
        <input
          type="text"
          placeholder="Recherchez"
          value={search}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <div>
          <button onClick={() => setAlignment("all")}>All</button>
          <button onClick={() => setAlignment("bad")}>Bad</button>
          <button onClick={() => setAlignment("good")}>Good</button>
        </div>
        <section>
          {filteredHeroes.length > 0 ? filteredHeroes.map((hero) => (
            <HeroesItem hero={hero} key={hero.id} />
          )) : <p>Aucun résultat trouvée</p>}
        </section>
      </main>
    );
}

export default HeroesList;