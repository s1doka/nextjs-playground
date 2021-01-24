import Skeleton from "@material-ui/lab/Skeleton";
import {useStyles} from "./styles";

function CardSkeleton() {
	const classes = useStyles();

	return <div>
		<Skeleton variant="rect"
		width={155}
		height={225}
		className={classes.media} />
		<Skeleton variant="rect"
		width={155}
		height={20}
		className={classes.title} />
	</div>;
}

export default CardSkeleton;
