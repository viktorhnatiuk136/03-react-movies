import css from "./MovieGrid.module.css";

import type { Movie } from "../../types/movie";

interface MovieGridParams {
  moviesList: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ moviesList, onSelect }: MovieGridParams) {
  return (
    <ul className={css.grid}>
      {moviesList.map((item) => (
        <li key={item.id} onClick={() => onSelect(item)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
              loading="lazy"
            />
            <h2 className={css.title}>{item.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
