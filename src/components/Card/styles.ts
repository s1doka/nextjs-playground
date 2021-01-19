import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	root: {
		width: 150,
	},
	media: {
		width: "155px",
		height: "225px",
		borderRadius: 16,
	},
	title: {
		fontWeight: 700,
		marginTop: 0,
		marginBottom: 0,
	},
	releaseDate: {
		fontSize: 12,
	},
}));
