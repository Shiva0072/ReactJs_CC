import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

const BASE_1 = "https://api.themoviedb.org/3/movie/";
const BASE_2 = "?api_key=990728523c6a2d4c8a6268a170acff8e&language=en-US";
const BASE_3 = "https://image.tmdb.org/t/p/w500/";

function Details() {
  const [loading, setLoading] = useState(true);
  const [mov, setMov] = useState({});

  const { id } = useParams();
  console.log(id);
  useEffect(async () => {
    const detail = await (await fetch(`${BASE_1}${id}${BASE_2}`)).json();
    setMov(detail);
    setLoading(false);
  }, []);
  console.log(mov);
  return (
    <div>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        <div>
          <h1>{mov.title}</h1>
          <img src={`${BASE_3}${mov.poster_path}`} />
          <div>
            <h2>Overview</h2>
            <div>{mov.overview}</div>
          </div>
          <h3>
            <div>
              <a href={mov.homepage}>Watch here</a>
            </div>
          </h3>
          <div>
            Genres
            <br />
            {mov.genres.map((gen) => (
              <span key={gen.id}> {gen.name} ,</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
