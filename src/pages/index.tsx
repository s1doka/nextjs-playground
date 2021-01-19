import NoAuthLayout from "../layout/NoAuthLayout";
import PopularMovies from "../components/PopularMovies";
import PopularTVShows from "../components/PopularTVShows";

function Home() {
	return <div>
		<PopularMovies />
		<PopularTVShows />
	</div>;
}

Home.layout = NoAuthLayout;

export default Home;
