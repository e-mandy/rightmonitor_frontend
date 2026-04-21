/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  type FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { type WithChildren } from "../../helpers";

export interface PageLink {
  title: string;
  path: string;
  isActive: boolean;
  isSeparator?: boolean;
  isLastCrumb?: boolean;
}

export interface PageDataContextModel {
  pageTitle?: string;
  setPageTitle: (_title: string) => void;
  pageDescription?: string;
  setPageDescription: (_description: string) => void;
  pageBreadcrumbs?: Array<PageLink>;
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void;
  pageActions?: React.ReactNode;
  setPageActions: (_description: React.ReactNode) => void;
}

const PageDataContext = createContext<PageDataContextModel>({
  setPageTitle: (_title: string) => {},
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => {},
  setPageDescription: (_description: string) => {},
  setPageActions: (_description: React.ReactNode) => {},
});

const PageDataProvider: FC<WithChildren> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState<string>("");
  const [pageDescription, setPageDescription] = useState<string>("");
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>([]);
  const [pageActions, setPageActions] = useState<React.ReactNode>("");
  const value: PageDataContextModel = {
    pageTitle,
    setPageTitle,
    pageDescription,
    setPageDescription,
    pageBreadcrumbs,
    setPageBreadcrumbs,
    pageActions,
    setPageActions,
  };
  return (
    <PageDataContext.Provider value={value}>
      {children}
    </PageDataContext.Provider>
  );
};

function usePageData() {
  return useContext(PageDataContext);
}

type Props = {
  description?: string;
  breadcrumbs?: Array<PageLink>;
  actions?: React.ReactNode;
};

const PageTitle: FC<Props & WithChildren> = ({
  children,
  description,
  breadcrumbs,
  actions,
}) => {
  const {
    setPageTitle,
    setPageDescription,
    setPageBreadcrumbs,
    setPageActions,
  } = usePageData();
  useEffect(() => {
    if (children) {
      setPageTitle(children.toString());
    }
    return () => {
      setPageTitle("");
    };
  }, [children]);

  useEffect(() => {
    if (description) {
      setPageDescription(description);
    }
    return () => {
      setPageDescription("");
    };
  }, [description]);

  useEffect(() => {
    if (breadcrumbs) {
      setPageBreadcrumbs(breadcrumbs);
    }
    return () => {
      setPageBreadcrumbs([]);
    };
  }, [breadcrumbs]);

  useEffect(() => {
    if (actions) {
      setPageActions(actions);
    }
    return () => {
      setPageActions("");
    };
  }, [actions]);

  return <></>;
};

const PageDescription: FC<WithChildren> = ({ children }) => {
  const { setPageDescription } = usePageData();
  useEffect(() => {
    if (children) {
      setPageDescription(children.toString());
    }
    return () => {
      setPageDescription("");
    };
  }, [children]);
  return <></>;
};

export { PageDescription, PageTitle, PageDataProvider, usePageData };
