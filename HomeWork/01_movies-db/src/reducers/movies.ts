import { Action, Reducer } from "redux";

export interface Movie {
    id: number;
    title: string;
    overview: string;
    popularity: number;
    vote_average: number;  // Додано
    release_date: string;  // Додано
    poster_path: string;   // Додано
    genre_ids: number[];   // Додано
}

interface MoviesState {
    top: Movie[]
}

const initialState: MoviesState = {
    top: [
        {
            id: 1,
            title: "The Shawshank Redemption",
            overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            popularity: 98,
            vote_average: 9.3,
            release_date: "1994-09-23",
            poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            genre_ids: [18, 80]
        },
        {
            id: 2,
            title: "The Godfather",
            overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            popularity: 97,
            vote_average: 9.2,
            release_date: "1972-03-14",
            poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            genre_ids: [18, 80]
        },
        {
            id: 3,
            title: "The Dark Knight",
            overview: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
            popularity: 96.5,
            vote_average: 9.0,
            release_date: "2008-07-16",
            poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            genre_ids: [28, 18, 80]
        },
        {
            id: 4,
            title: "The Godfather Part II",
            overview: "The early life and career of Vito Corleone in 1920s New York is portrayed, while his son, Michael, expands and tightens his grip on his crime syndicate.",
            popularity: 96,
            vote_average: 9.0,
            release_date: "1974-12-20",
            poster_path: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
            genre_ids: [18, 80]
        },
        {
            id: 5,
            title: "12 Angry Men",
            overview: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            popularity: 94,
            vote_average: 9.0,
            release_date: "1957-04-10",
            poster_path: "/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
            genre_ids: [18]
        }

    ]
}

const moviesReducer: Reducer<MoviesState, Action> = (state, action) => {
    return initialState;
}

export default moviesReducer;