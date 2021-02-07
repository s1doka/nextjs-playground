import {useStyles} from "./styles";

function HorizontalScrollingList({children}) {
	const classes = useStyles();

	return <div className={classes.root}>
		{children}
	</div>;
}

export default HorizontalScrollingList;
