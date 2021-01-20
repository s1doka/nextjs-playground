import {useStyles} from "./styles";
import {formatReleaseDate} from "../../services/TMDB";
import {Movie} from "../../types/TMDB";

type Props = {
	movie: Movie;
};

function MovieCard({movie}: Props) {
	const classes = useStyles();

	return <div className={classes.root}>
		<img className={classes.media}
		src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
		alt={movie.original_title} />
		<p className={classes.title} data-testid={`movie-title-${movie.id}`}>
			{movie.original_title}
		</p>
		<span className={classes.releaseDate} data-testid={`movie-release-date-${movie.id}`}>
			{formatReleaseDate(movie.release_date)}
		</span>
	</div>;
}

export default MovieCard;
