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
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport"
			content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
			<meta name="description" content="Description" />
			<meta name="keywords" content="Keywords" />
			<title>
				Next.js playground
			</title>
			<link rel="manifest" href="/manifest.json" />
			<link href="/icons/favicon-16x16.png"
			rel="icon"
			type="image/png"
			sizes="16x16" />
			<link href="/icons/favicon-32x32.png"
			rel="icon"
			type="image/png"
			sizes="32x32" />
			<meta name="theme-color" content="#5E4AE3" />
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
