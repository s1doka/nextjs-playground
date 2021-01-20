import Container from "@material-ui/core/Container";

import Header from "../components/Header";
import Footer from "../components/Footer";

function NoAuthLayout({children}) {
	return <>
		<Header />
		<Container component="main">
			{children}
		</Container>
		<Footer />
	</>;
}

export default NoAuthLayout;
