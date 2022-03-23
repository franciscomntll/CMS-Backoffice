// import App from 'next/app'

import { ChakraProvider} from "@chakra-ui/react";
import {DefaultLayout} from "layouts/DefaultLayout";
import "@fontsource/poppins"
import {theme} from 'theme'
import 'styles/CKEditor.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <DefaultLayout>
      <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp;
