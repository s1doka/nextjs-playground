import NoAuthLayout from "../layout/NoAuthLayout";
import PopularMovies from "../components/PopularMovies";
import PopularTVShows from "../components/PopularTVShows";
import TrendingMedia from "../components/TrendingMedia";

function Homepage() {
	return <div>
		<PopularMovies />
		<PopularTVShows />
		<TrendingMedia />
	</div>;
}

Homepage.layout = NoAuthLayout;

export default Homepage;
