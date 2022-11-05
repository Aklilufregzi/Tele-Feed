import "../styles/globals.css";
import type { AppProps } from "next/app";
import { create } from "domain";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
