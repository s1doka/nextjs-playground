import Header from "../components/Header";
import Container from "@material-ui/core/Container";

function NoAuthLayout({children}) {
	return <>
		<Header />
		<Container component='main'>
			{children}
		</Container>
	</>;
}

export default NoAuthLayout;
