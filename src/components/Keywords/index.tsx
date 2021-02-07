import {useQuery} from "react-query";
import {getMovieKeywords} from "../../services/TMDB";
import {useStyles} from "./styles";

type Props = {
	id: string;
};

function Keywords({id}: Props) {
	const {data, status} = useQuery(`keywords-${id}`, () => getMovieKeywords(id));
	const classes = useStyles();

	return <div>
		<h3>
			Keywords
		</h3>
		{status === "success" &&
		<ul className={classes.keywordsList}>
			{data.keywords.map((keyword) =>
				<li className={classes.keyword} key={keyword.id}>
					{keyword.name}
				</li>
			)}
		</ul>}
	</div>;
}

export default Keywords;
