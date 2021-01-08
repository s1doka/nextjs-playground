import {QueryClient, QueryClientProvider} from "react-query";
import {Hydrate} from "react-query/hydration";
import {ReactQueryDevtools} from "react-query/devtools";
import Head from "next/head";
import {useEffect} from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";

const queryClient = new QueryClient();

function NoLayout({children}) {
	return children;
}

function MyApp({Component, pageProps}) {
	const Layout = Component.layout || NoLayout;

	useEffect(
		() => {
			const jssStyles = document.querySelector("#jss-server-side");

			if (jssStyles) {
				jssStyles.parentElement.removeChild(jssStyles);
			}
		},
		[],
	);

	return <>
		<Head>
			<title>
				Letterboxd Clone | Made with Next.js
			</title>
		</Head>
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<CssBaseline />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Hydrate>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ThemeProvider>
	</>;
}

export default MyApp;
