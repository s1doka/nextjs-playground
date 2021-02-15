import {useStyles} from "./styles";
import {buildReleaseImagePath} from "../../services/TMDB";
import {MovieCast} from "../../types/TMDB";

type Props = {
	cast: MovieCast;
};

function MovieCastCard({cast}: Props) {
	const classes = useStyles();

	return <div className={classes.smallCard}>
		<div className={classes.castWrapper}>
			<img className={classes.smallImage}
			src={buildReleaseImagePath(cast.profile_path)}
			alt={cast.name} />
		</div>
		<div className={classes.info}>
			<p className={classes.title} data-testid={`cast-${cast.cast_id}`}>
				{cast.name}
			</p>
			<span className={classes.releaseDate}
			data-testid={`cast-character-${cast.cast_id}`}>
				{cast.character}
			</span>
		</div>
	</div>;
}

export default MovieCastCard;
