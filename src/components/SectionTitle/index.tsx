import Typography from "@material-ui/core/Typography";
import {useStyles} from "./styles";

function SectionTitle({children}) {
	const classes = useStyles();

	return <Typography className={classes.root} variant="h5" gutterBottom={true}>
		{children}
	</Typography>;
}

export default SectionTitle;
