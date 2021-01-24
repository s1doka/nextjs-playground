import {useQuery} from "react-query";
import {getTrendingMedia} from "../../services/TMDB";
import SectionTitle from "../SectionTitle";
import ReleasesList from "../ReleasesList";
import TVShowCard from "../Card/TVShowCard";
import CardSkeletonList from "../CardSkeleton/CardSkeletonList";
import MovieCard from "../Card/MovieCard";

function TrendingMedia() {
	const {data, status} = useQuery(
		"trendingMedia",
		() => getTrendingMedia("all", "day"),
	);

	return <div>
		<SectionTitle>
			Trending
		</SectionTitle>
		{status === "loading" && <CardSkeletonList />}
		{status === "error" &&
		<p>
			Something went wrong...
		</p>}
		{status === "success" &&
		<ReleasesList>
			{data.results.map((release) => {
				if ("original_title" in release) {
					return <MovieCard movie={release} />;
				}
				return <TVShowCard tvShow={release} />;
			})}
		</ReleasesList>}
	</div>;
}

export default TrendingMedia;
