import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "nowrap",
		overflowX: "scroll",
		[theme.breakpoints.down("sm")]: {
			width: "100vw",
		},
	},
}));
