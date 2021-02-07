import {useQuery} from "react-query";
import {getPopularTVShows} from "../../services/TMDB";
import SectionTitle from "../SectionTitle";
import HorizontalScrollingList from "../HorizontalScrollingList";
import TVShowCard from "../Card/TVShowCard";
import CardSkeletonList from "../CardSkeleton/CardSkeletonList";

function PopularTVShows() {
	const {data, status} = useQuery("popularTVShows", () => getPopularTVShows());

	return <div>
		<SectionTitle>
			Popular TV shows
		</SectionTitle>
		{status === "loading" && <CardSkeletonList />}
		{status === "error" &&
		<p>
			Something went wrong...
		</p>}
		{status === "success" &&
		<HorizontalScrollingList>
			{data.results.map((tvShow) => <TVShowCard tvShow={tvShow} />)}
		</HorizontalScrollingList>}
	</div>;
}

export default PopularTVShows;
