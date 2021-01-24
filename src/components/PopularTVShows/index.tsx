import {useQuery} from "react-query";
import {getPopularTVShows} from "../../services/TMDB";
import SectionTitle from "../SectionTitle";
import ReleasesList from "../ReleasesList";
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
		<ReleasesList>
			{data.results.map((tvShow) => <TVShowCard tvShow={tvShow} />)}
		</ReleasesList>}
	</div>;
}

export default PopularTVShows;
