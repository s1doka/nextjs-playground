import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	root: {
		width: 155,
		marginRight: 32,
		cursor: "pointer",
	},
	media: {
		width: 155,
		height: 225,
		borderRadius: 16,
	},
	mediaWrapper: {
		position: "relative",
		marginBottom: 16,
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
