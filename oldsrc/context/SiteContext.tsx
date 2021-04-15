import React, { createContext, ReactNode } from "react";
import { SiteContext } from "~/model/Context";
import links from "@data/site/links.json";
import projects from "@data/site/projects.json";
import about from "@data/site/about.json";
import navigation from "@data/site/navigation.json";
import contact from "@data/site/contact.json";

type Props = {
  children: ReactNode;
};

const contextValue: SiteContext = {
  headline: about.headline,
  bio: about.bio,
  links: links,
  projects: projects.projects,
  contactInfo: {
    email: contact.email,
    phone: contact.phone,
  },
  navigation: navigation.headerRoutes,
};

const siteContext = createContext<SiteContext>(contextValue);

export const SiteContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <siteContext.Provider value={contextValue}>{children}</siteContext.Provider>
  );
};

export default siteContext;
