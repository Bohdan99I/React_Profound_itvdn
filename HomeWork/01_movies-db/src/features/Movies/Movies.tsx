import "./Movies.css";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Movie } from "../../reducers/movies";
import MovieCard from "./MovieCard";

interface Props {
    movies: Movie[];
}

function Movies({ movies }: Props) {
    return (
        <section>
            <div className="Movies-list">
                {movies.map(m => (
                    <MovieCard
                        key={m.id}
                        id={m.id}
                        title={m.title}
                        overview={m.overview}
                        popularity={m.popularity}
                        vote_average={m.vote_average}
                        release_date={m.release_date}
                        poster_path={m.poster_path}
                    />
                ))}
            </div>
        </section>
    );
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top
});

const connector = connect(mapStateToProps);

export default connector(Movies);
