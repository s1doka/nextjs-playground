import NoAuthLayout from "../layout/NoAuthLayout";
import PopularMovies from "../components/PopularMovies";
import PopularTVShows from "../components/PopularTVShows";
import TrendingMedia from "../components/TrendingMedia";

function Home() {
	return <div>
		<PopularMovies />
		<PopularTVShows />
		<TrendingMedia />
	</div>;
}

Home.layout = NoAuthLayout;

export default Home;
