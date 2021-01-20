import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		padding: "80px 0",
		marginTop: theme.spacing(4),
		color: "#fff",
	},
	link: {
		fontWeight: 700,
		color: "#fff",
	},
}));
