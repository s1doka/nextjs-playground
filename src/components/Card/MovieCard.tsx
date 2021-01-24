import {useStyles} from "./styles";
import {
	buildReleaseImagePath,
	formatRating,
	formatReleaseDate,
} from "../../services/TMDB";
import {Movie} from "../../types/TMDB";

type Props = {
	movie: Movie;
};

function MovieCard({movie}: Props) {
	const classes = useStyles();

	return <div className={classes.root}>
		<div className={classes.mediaWrapper}>
			<img className={classes.media}
			src={buildReleaseImagePath(movie.poster_path)}
			alt={movie.original_title} />
			<div className={classes.rating}>
				{formatRating(movie.vote_average)}
				<span className={classes.ratingPercentage}>
					%
				</span>
			</div>
		</div>
		<div className={classes.info}>
			<p className={classes.title} data-testid={`movie-title-${movie.id}`}>
				{movie.title}
			</p>
			<span className={classes.releaseDate}
			data-testid={`movie-release-date-${movie.id}`}>
				{formatReleaseDate(movie.release_date)}
			</span>
		</div>
	</div>;
}

export default MovieCard;
