import NoAuthLayout from "../../layout/NoAuthLayout";
import {useQuery} from "react-query";
import {buildReleaseImagePath, getMovieDetail} from "../../services/TMDB";
import {useRouter} from "next/router";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Keywords from "../../components/Keywords";
import MovieFacts from "../../components/MovieFacts";
import MovieCast from "../../components/MovieCast";
import MovieMedia from "../../components/MovieMedia";
import Recommendations from "../../components/Recommendations";

const useStyles = makeStyles((theme) => ({
	layoutGrid: {
		display: "grid",
		gridTemplateColumns: "1fr",
		gap: 16,
		[theme.breakpoints.up("md")]: {
			gridTemplateColumns: "75% 1fr",
		},
	},
}));

function LayoutGrid({children}) {
	const classes = useStyles();

	return <div className={classes.layoutGrid}>
		{children}
	</div>;
}

function MovieDetailPage() {
	const {query} = useRouter();
	const movieId = query.id ? query.id.toString() : "";
	const {data: movie, status} = useQuery(
		`movie-${query.id}`,
		() => getMovieDetail(movieId),
	);

	function MovieBanner() {
		return <>
			<img src={buildReleaseImagePath(movie.poster_path)} />
			<Typography variant="h4">
				{movie.title}
			</Typography>
			<div>
				<Typography variant="subtitle1">
					{movie.tagline}
				</Typography>
				<Typography variant="body1">
					Overview
				</Typography>
				<Typography variant="body2">
					{movie.overview}
				</Typography>
			</div>
		</>;
	}

	return <div>
		<LayoutGrid>
			<div>
				<MovieCast id={movieId} />
				<MovieMedia id={movieId} />
				<Recommendations id={movieId} />
			</div>
			<div>
				{status === "success" && <MovieFacts movie={movie} />}
				<Keywords id={movieId} />
			</div>
		</LayoutGrid>
	</div>;
}

MovieDetailPage.layout = NoAuthLayout;

export default MovieDetailPage;
