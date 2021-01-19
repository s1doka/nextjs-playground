import {useStyles} from "./styles";

function ReleasesList({children}) {
	const classes = useStyles();

	return <div className={classes.root}>
		{children}
	</div>;
}

export default ReleasesList;
