import {useQuery} from "react-query";
import {buildReleaseImagePath, getMovieImages} from "../../services/TMDB";
import {Image} from "../../types/TMDB";
import HorizontalScrollingList from "../HorizontalScrollingList";
import {useStyles} from "./styles";

type Props = {
	id: string;
};

function getFirstFivePosters(posters: Array<Image>) {
	return posters.slice(0, 5);
}

function MovieMedia({id}: Props) {
	const {data, status} = useQuery(`movie-media-${id}`, () => getMovieImages(id));
	const classes = useStyles();

	if (status === "loading") {
		return null;
	}

	const images = getFirstFivePosters(data.posters);

	return <div>
		<h3>
			Media
		</h3>
		<HorizontalScrollingList>
			{images.map((poster) =>
				<img className={classes.image}
				src={buildReleaseImagePath(poster.file_path)}
				alt={poster.iso_639_1} />
			)}
		</HorizontalScrollingList>
	</div>;
}

export default MovieMedia;
