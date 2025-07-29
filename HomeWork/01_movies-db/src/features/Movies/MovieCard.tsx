import { Link } from "react-router-dom";

interface Props {
    id: number;
    title: string;
    popularity: number;
    overview: string;
    vote_average: number;
    release_date: string;
    poster_path: string;
}

function MovieCard({ id, title, overview, popularity, vote_average, release_date, poster_path }: Props) {
    return (
        <div className="Movies-card">
            <div>
                <Link to={`/movies/${id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title} poster`} />
                    {title}
                </Link>
            </div>
            <span className="Movies-card-oveview">{overview}</span>
            <div className="Movies-card-pop">Popularity: {popularity}</div>
            <div className="Movies-card-vote">Rating: {vote_average}</div>
            <div className="Movies-card-release">Release Date: {release_date}</div>
        </div>
    );
}

export default MovieCard;
