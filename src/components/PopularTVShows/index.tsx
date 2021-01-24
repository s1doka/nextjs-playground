import {useQuery} from "react-query";
import {getPopularTVShows} from "../../services/TMDB";
import SectionTitle from "../SectionTitle";
import ReleasesList from "../ReleasesList";
import TVShowCard from "../Card/TVShowCard";
import CardSkeleton from "../CardSkeleton";

function PopularTVShows() {
	const {data, status} = useQuery("popularTVShows", () => getPopularTVShows());

	return <div>
		<SectionTitle>
			Popular TV shows
		</SectionTitle>
		{status === "loading" &&
		<ReleasesList>
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
		</ReleasesList>}
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
