import {MovieDetail} from "../../types/TMDB";
import {useStyles} from "./styles";

type Props = {
	movie: MovieDetail;
};

function formatCurrency(value: number): string {
	return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(
		value,
	);
}

function MovieFacts({movie}: Props) {
	const classes = useStyles();

	return <>
		<div>
			<p className={classes.label}>
				<strong>
					Status
				</strong>
			</p>
			<span>
				{movie.status}
			</span>
		</div>
		<div>
			<p className={classes.label}>
				<strong>
					Budget
				</strong>
			</p>
			<span>
				{movie.budget === 0 ? "-" : formatCurrency(movie.budget)}
			</span>
		</div>
		<div>
			<p className={classes.label}>
				<strong>
					Revenue
				</strong>
			</p>
			<span>
				{movie.revenue === 0 ? "-" : formatCurrency(movie.revenue)}
			</span>
		</div>
	</>;
}

export default MovieFacts;
