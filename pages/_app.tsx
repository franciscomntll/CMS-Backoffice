import "../styles/globals.css";
import type { AppProps } from "next/app";
import DefaultLayout from "../layouts/DefaultLayout";
import '@fontsource/mulish'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
