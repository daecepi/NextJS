import '../styles/global.scss'
import { AppWrapper } from "../contexts/CookiesContext";
import { ThemeProvider } from "next-themes";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp
