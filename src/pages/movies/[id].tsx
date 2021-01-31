import NoAuthLayout from "../../layout/NoAuthLayout";
import {useQuery} from "react-query";
import {buildReleaseImagePath, getMovieDetail} from "../../services/TMDB";
import {useRouter} from "next/router";
import Typography from "@material-ui/core/Typography";

function MovieDetailPage() {
	const {query} = useRouter();
	const {data, status} = useQuery(
		`movie-${query.id}`,
		() => getMovieDetail(query.id.toString()),
	);

	function WorkInProgress() {
		return <>
			<img src={buildReleaseImagePath(data.poster_path)} />
			<Typography variant="h4">
				{data.title}
			</Typography>
			<div>
				<Typography variant="subtitle1">
					{data.tagline}
				</Typography>
				<Typography variant="body1">
					Overview
				</Typography>
				<Typography variant="body2">
					{data.overview}
				</Typography>
			</div>
		</>;
	}

	return <p>
		Coming soon...
	</p>;
}

MovieDetailPage.layout = NoAuthLayout;

export default MovieDetailPage;
