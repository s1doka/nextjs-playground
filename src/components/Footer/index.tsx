import {useStyles} from "./styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function Footer() {
	const classes = useStyles();

	return <footer className={classes.root}>
		<Container>
			<Typography>
				Film data from
				<Typography className={classes.link}
				component="a"
				href="https://www.themoviedb.org/"
				target="_blank"
				referrerPolicy="no-referrer">
					TMDb
				</Typography>
				.
			</Typography>
		</Container>
	</footer>;
}

export default Footer;
