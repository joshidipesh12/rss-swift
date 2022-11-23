import {
  EuiPageTemplate as Page,
  EuiTitle,
  EuiListGroup,
  EuiListGroupItem,
} from "@elastic/eui";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import config from "../config.json";

export default ({ children }) => {
  const [LIST, setList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.category) {
      setList(
        config.providers.filter(p => p.category === router.query.category),
      );
    }
  }, [router.query]);

  return (
    <>
      <Header />
      <Page>
        <Page.Sidebar>
          <EuiTitle>
            <h2 style={{ marginBottom: "2rem", textTransform: "capitalize" }}>
              {router.query.category}
            </h2>
          </EuiTitle>
          <EuiListGroup size="s" color="primary">
            {LIST.map(item => (
              <EuiListGroupItem
                key={item.name}
                label={item.name}
                onClick={() => {
                  router.replace(
                    `/feeds/${encodeURIComponent(item.rss_url)}?category=${
                      item.category
                    }`,
                  );
                }}
              />
            ))}
          </EuiListGroup>
        </Page.Sidebar>
        {children}
      </Page>
    </>
  );
};
