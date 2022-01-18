// import App from 'next/app'

import { ChakraProvider } from "@chakra-ui/react";
import DefaultLayout from "../layouts/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <DefaultLayout>
      <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp;
