import { createTheme, ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline";
import HeroSection from "./components/Header";



const darkTheme = createTheme({
    palette: {
        type: "dark",
    },
});

export default function indexPages() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <HeroSection />
        </ThemeProvider>
    );
}