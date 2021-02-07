import {useQuery} from "react-query";
import {getTrendingMedia} from "../../services/TMDB";
import SectionTitle from "../SectionTitle";
import HorizontalScrollingList from "../HorizontalScrollingList";
import TVShowCard from "../Card/TVShowCard";
import CardSkeletonList from "../CardSkeleton/CardSkeletonList";
import MovieCard from "../Card/MovieCard";
import {Movie, TVShow} from "../../types/TMDB";

function renderMovieCardOrTVShowCard(release: Movie & TVShow) {
	const isMovie = ("original_title" in release);

	if (isMovie) {
		return <MovieCard movie={release} />;
	}

	return <TVShowCard tvShow={release} />;
}

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
		<HorizontalScrollingList>
			{data.results.map(renderMovieCardOrTVShowCard)}
		</HorizontalScrollingList>}
	</div>;
}

export default TrendingMedia;
