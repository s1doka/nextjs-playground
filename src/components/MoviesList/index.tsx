import MovieCard from "../MovieCard";
import {Movie} from "../../types/TMDB";
import {useStyles} from "./styles";

type Props = {
	movies: Array<Movie>;
};

function MoviesList({movies}: Props) {
	const classes = useStyles();

	return <div className={classes.root}>
		{movies?.map?.((movie) => <MovieCard movie={movie} />)}
	</div>;
}

export default MoviesList;
