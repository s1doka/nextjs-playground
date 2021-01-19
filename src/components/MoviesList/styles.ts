import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	root: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
		gap: 16,
	},
}));
