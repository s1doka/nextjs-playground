import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		justifyItems: "center",
		gap: 16,
		[theme.breakpoints.up("sm")]: {
			gridTemplateColumns: "1fr 1fr 1fr",
		},
		[theme.breakpoints.up("md")]: {
			gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
			justifyItems: "baseline",
		},
	},
}));
