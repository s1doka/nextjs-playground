import {useStyles} from "./styles";
import {formatReleaseDate} from "../../services/TMDB";
import {TVShow} from "../../types/TMDB";

type Props = {
	tvShow: TVShow;
};

function MovieCard({tvShow}: Props) {
	const classes = useStyles();

	return <div className={classes.root}>
		<img className={classes.media}
		src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
		alt={tvShow.original_name} />
		<p className={classes.title}>
			{tvShow.original_name}
		</p>
		<span className={classes.releaseDate}>
			{formatReleaseDate(tvShow.first_air_date)}
		</span>
	</div>;
}

export default MovieCard;
