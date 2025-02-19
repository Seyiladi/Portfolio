import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Open_Sans } from "next/font/google";
import "./globals.scss";
import { GlobalCssPriority } from "./providers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Footer from "./components/Footer/page";
const openSans = Open_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "AECSPOT",
//   description: "AECSPOT APP",
// };

export const metadata: Metadata = {
  title: {
    default: "Seyi Oladimeji",
    template: "%s - AECSPOT",
  },
  description: "Seyi Oladimeji Personal Portfolio",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Google AdSense Script */}

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2234738000342371"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={openSans.className}>
        <AppRouterCacheProvider>
          <GlobalCssPriority>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </GlobalCssPriority>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
