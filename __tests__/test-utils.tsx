import React from "react";
import {render} from "@testing-library/react";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../src/theme";

function AllTheProviders({children}) {
	return <ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>;
}

function customRender(ui, options?) {
	return render(ui, {wrapper: AllTheProviders, ...options});
}

export * from "@testing-library/react";

export {customRender as render};
