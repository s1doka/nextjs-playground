import NoAuthLayout from "../layout/NoAuthLayout";
import PopularMovies from "../components/PopularMovies";

function Home() {
	return <div>
		<PopularMovies />
	</div>;
}

Home.layout = NoAuthLayout;

export default Home;
