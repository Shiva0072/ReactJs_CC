import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BASE = "https://image.tmdb.org/t/p/w200/";

function Movie({ id, poster_path, title, overview }) {
  return (
    <div>
      <img src={BASE + poster_path} alt={title}></img>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{overview}</p>
    </div>
  );
}

Movie.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie;
