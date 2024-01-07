import '../styles/globals.css'
import {ThemeProvider} from "@emotion/react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {

  return (

        <Component {...pageProps} />

      )


}

export default MyApp
