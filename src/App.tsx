import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";




const darkTheme = createTheme({
    palette: {
        type: "dark",
    },
});

export default function indexPages() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header />
            <h1>olá</h1>
        </ThemeProvider>
    );
}