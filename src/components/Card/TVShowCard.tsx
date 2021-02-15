import {useStyles} from "./styles";
import {
	buildReleaseImagePath,
	formatRating,
	formatReleaseDate,
} from "../../services/TMDB";
import {TVShow} from "../../types/TMDB";

type Props = {
	tvShow: TVShow;
};

function TVShowCard({tvShow}: Props) {
	const classes = useStyles();

	return <div className={classes.largeCard}>
		<div className={classes.mediaWrapper}>
			<img className={classes.largeImage}
			src={buildReleaseImagePath(tvShow.poster_path)}
			alt={tvShow.original_name} />
			<div className={classes.rating}>
				{formatRating(tvShow.vote_average)}
				<span className={classes.ratingPercentage}>
					%
				</span>
			</div>
		</div>
		<div className={classes.info}>
			<p className={classes.title}>
				{tvShow.original_name}
			</p>
			<span className={classes.releaseDate}>
				{formatReleaseDate(tvShow.first_air_date)}
			</span>
		</div>
	</div>;
}

export default TVShowCard;
