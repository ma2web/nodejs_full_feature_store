import { FC, useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import GolThemeProvider from "theme/GolThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import theme from "theme";
import { ToastContainer } from "react-toastify";
import "nprogress/nprogress.css";
import "assets/styles/style.css";
import DashboardLayout from "layout/CI/Layout";
import LanguageProvider from "providers/LanguageProvider";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = useRouter();

  console.log(pageProps);

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", () => NProgress.start());
      router.events.off("routeChangeComplete", () => NProgress.done());
      router.events.off("routeChangeError", () => NProgress.done());
    };
  }, [router.events]);

  useEffect(() => {
    const serverStyles = document.querySelector("#jss-server-side");
    serverStyles?.remove();
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <title>Market App</title>
      </Head>
      <GolThemeProvider>
        <LanguageProvider>
          <ToastContainer position="bottom-right" />
          {(Component as any).Layout ? (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </LanguageProvider>
      </GolThemeProvider>
    </div>
  );
};

export default App;
