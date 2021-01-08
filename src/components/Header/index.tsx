interface HeaderProps {
	username: string;
}

function Header({username}: HeaderProps) {
	return <header>
		<ul>
			{username}
			<li>
				Sign in
			</li>
			<li>
				Films
			</li>
			<li>
				Lists
			</li>
			<li>
				Members
			</li>
		</ul>
	</header>;
}
export default Header;
