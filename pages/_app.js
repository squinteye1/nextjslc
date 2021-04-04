import "../styles/globals.css";
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "@/lib/strapi/api";
import { getStrapiMedia } from "@/lib/strapi/media";
export const GlobalContect = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContect.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContect.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
};
export default MyApp;
