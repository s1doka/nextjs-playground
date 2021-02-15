import HorizontalScrollingList from "../HorizontalScrollingList";
import {useQuery} from "react-query";
import {getMovieCredits} from "../../services/TMDB";
import MovieCastCard from "../Card/CastCard";

type Props = {
	id: string;
};

function renderTenActorsOrActress(cast) {
	const firstTen = cast.slice(0, 9);

	return firstTen.map((cast) => <MovieCastCard cast={cast} />);
}

function MovieCast({id}: Props) {
	const {data, status} = useQuery(`cast-${id}`, () => getMovieCredits(id));

	return <div>
		<h3>
			Top billed cast
		</h3>
		<HorizontalScrollingList>
			{status === "success" &&
			<>
				{renderTenActorsOrActress(data.cast)}
			</>}
		</HorizontalScrollingList>
	</div>;
}

export default MovieCast;
