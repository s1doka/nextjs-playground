import {useQuery} from "react-query";
import {
	buildReleaseImagePath,
	getMovieRecommendations,
} from "../../services/TMDB";
import HorizontalScrollingList from "../HorizontalScrollingList";
import {useStyles} from "./styles";

type Props = {
	id: string;
};

function Recommendations({id}: Props) {
	const {data, status} = useQuery(
		`recommendations-${id}`,
		() => getMovieRecommendations(id),
	);
	const classes = useStyles();

	if (status === "loading") {
		return null;
	}

	return <div>
		<h3>
			Recommendations
		</h3>
		<HorizontalScrollingList>
			{data.results.map((recommendation) =>
				<div>
					<img className={classes.image}
					src={buildReleaseImagePath(recommendation.backdrop_path)}
					alt={recommendation.title} />
					<span>
						{recommendation.title}
					</span>
				</div>
			)}
		</HorizontalScrollingList>
	</div>;
}

export default Recommendations;
