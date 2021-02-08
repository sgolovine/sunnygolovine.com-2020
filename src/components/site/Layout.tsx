import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import {
  noHeaderRoutes,
  noPageHeaderRoutes,
  pageHeaders,
} from "~/constants/pageHeaders";
import Footer from "./Footer";
import Header from "./Header";
import PageHeader from "./PageHeader";
import SocialHeader from "./SocialHeader";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathName = router.pathname as keyof typeof pageHeaders;
  const headerText = pageHeaders[pathName];
  const shouldShowHeader = !noHeaderRoutes.includes(pathName);
  const shouldShowPageHeader = !noPageHeaderRoutes.includes(pathName);

  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-screen">
      {shouldShowHeader && (
        <header className="h-32 px-4">
          <SocialHeader />
          <Header />
          {shouldShowPageHeader && <PageHeader headerText={headerText} />}
        </header>
      )}
      <main className="flex-grow p-4">{children}</main>
      <footer className="py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
