import Header from "../components/Header";

function NoAuthLayout({children}) {
	return <>
		<Header username="s1doka" />
		<main>
			{children}
		</main>
		<footer>
			<p>
				sooo
			</p>
		</footer>
	</>;
}

export default NoAuthLayout;
