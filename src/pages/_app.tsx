import React from "react";
import Layout from "~/components/Layout";
import { SiteContextProvider } from "~/context/SiteContext";
import { ResumeContextProvider } from "~/context/ResumeContext";
import "~/tailwind.css";
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SiteContextProvider>
      <ResumeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ResumeContextProvider>
    </SiteContextProvider>
  );
};

export default App;