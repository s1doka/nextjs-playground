import Typography from "@material-ui/core/Typography";
import {useQuery} from "react-query";
import {getPopularTVShows} from "../../services/TMDB";
import SectionTitle from "../SectionTitle";
import ReleasesList from "../ReleasesList";
import TVShowCard from "../Card/TVShowCard";

function PopularTVShows() {
	const {data, status} = useQuery("popularTVShows", () => getPopularTVShows());

	return <div>
		<SectionTitle>
			Popular TV shows
		</SectionTitle>
		{status === "loading" &&
		<Typography variant="caption" gutterBottom={true}>
			Loading...
		</Typography>}
		{status === "error" && <p>Something went wrong...</p>}
		{status === "success" &&
		<ReleasesList>
			{data.results.map((tvShow) => <TVShowCard tvShow={tvShow} />)}
		</ReleasesList>}
	</div>;
}

export default PopularTVShows;
