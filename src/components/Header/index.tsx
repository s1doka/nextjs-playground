import clsx from "clsx";
import {useTheme} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useState} from "react";
import {useStyles} from "./styles";
import Link from "next/link";

// TODO: Move Drawer to another file
function Header() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleDrawerClose() {
		setOpen(false);
	}

	const links = [
		{
			text: "Movies",
			href: "/movies",
		},
	];

	return <div className={classes.root}>
		<AppBar position="static"
		className={clsx(
			classes.appBar,
			{
				[classes.appBarShift]: open,
			},
		)}>
			<Toolbar>
				<IconButton color="inherit"
				aria-label="Open drawer"
				onClick={handleDrawerOpen}
				edge="start"
				className={clsx(classes.menuButton, open && classes.hide)}>
					<MenuIcon />
				</IconButton>
				<Link href="/">
					<Typography variant="h6" noWrap={true} style={{cursor: "pointer"}}>
						Next.js playground
					</Typography>
				</Link>
			</Toolbar>
		</AppBar>
		<Drawer variant="persistent"
		anchor="left"
		open={open}
		classes={{
			paper: classes.drawerPaper,
		}}>
			<div className={classes.drawerHeader}>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === "ltr"
						? <ChevronLeftIcon />
						: <ChevronRightIcon />}
				</IconButton>
			</div>
			<Divider />
			<List>
				{links.map(({text, href}) =>
					<Link href={href} key={text}>
						<ListItem component="a" className={classes.link}>
							<ListItemText primary={text} />
						</ListItem>
					</Link>
				)}
				<ListItem component="a"
				className={classes.link}
				href="https://github.com/s1doka/nextjs-playground"
				target="_blank"
				referrerPolicy="no-referrer">
					<ListItemText primary="GitHub" />
				</ListItem>
			</List>
		</Drawer>
	</div>;
}

export default Header;
