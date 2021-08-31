import '../styles/global.scss'
import { AppWrapper } from "../contexts/CookiesContext";
import { ThemeProvider } from "next-themes";
import { SyncedAppWrapper } from '../contexts/SyncContext'


function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider attribute="class">
    // <ThemeProvider attribute="class">
      <SyncedAppWrapper>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </SyncedAppWrapper>
    // </ThemeProvider>
  );
}

export default MyApp
