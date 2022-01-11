import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const data = await (
      await fetch(
        "https://api.themoviedb.org/3/discover/movie?minimum_rating=8.5&api_key=990728523c6a2d4c8a6268a170acff8e"
      )
    ).json();
    setMovies(data.results);
    setLoading(false);
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <strong>Loading Movies ...</strong>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
          />
        ))
      )}
    </div>
  );
}

export default Home;
