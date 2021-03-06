import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	largeCard: {
		width: 155,
		marginRight: theme.spacing(4),
		cursor: "pointer",
	},
	smallCard: {
		width: 155,
		marginRight: theme.spacing(2),
		cursor: "pointer",
	},
	largeImage: {
		width: 155,
		height: 225,
		borderRadius: 16,
	},
	smallImage: {
		height: 175,
		borderRadius: 16,
	},
	mediaWrapper: {
		position: "relative",
		marginBottom: 16,
	},
	castWrapper: {
		position: "relative",
		marginBottom: theme.spacing(1),
	},
	title: {
		fontWeight: 700,
		marginTop: 0,
		marginBottom: 0,
	},
	releaseDate: {
		fontSize: 12,
		color: "rgba(0,0,0,0.6)",
	},
	info: {
		padding: "0 8px",
	},
	rating: {
		position: "absolute",
		left: 12,
		bottom: -8,
		height: 30,
		width: 30,
		borderRadius: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#081c22",
		color: "#fff",
		fontWeight: 700,
	},
	ratingPercentage: {
		fontSize: 7,
	},
}));
