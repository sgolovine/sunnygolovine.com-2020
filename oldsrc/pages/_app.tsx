import React from "react";
import { AppProps } from "next/app";
import { SiteContextProvider } from "~/context/SiteContext";
import { ResumeContextProvider } from "~/context/ResumeContext";
// import "tailwindcss/tailwind.css";
import "~/styles/tailwind.css";
import "~/styles/base.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SiteContextProvider>
      <ResumeContextProvider>
        <Component {...pageProps} />
      </ResumeContextProvider>
    </SiteContextProvider>
  );
};

// ts-prune-ignore-next
export default App;
