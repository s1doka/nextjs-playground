import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	keywordsList: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		listStyleType: "none",
		padding: 0,
		margin: 0,
	},
	keyword: {
		marginRight: 4,
		marginBottom: 8,
		boxSizing: "border-box",
		whiteSpace: "nowrap",
		backgroundColor: "rgba(0,0,0,0.1)",
		border: "1px solid #d7d7d7",
		color: "#000",
		padding: "4px 10px",
		borderRadius: 4,
	},
}));
