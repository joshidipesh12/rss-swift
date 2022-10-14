import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  EuiListGroup,
  EuiPageTemplate as Page,
  EuiProvider,
  EuiTitle,
  htmlIdGenerator,
} from '@elastic/eui';
import Header from '../../components/Header';
import EmptyPost from '../../components/EmptyPost';

const feedList = [
  {
    label: 'OneFootball',
    href: 'https://onefootball.com',
  },
  {
    label: 'CNET',
    href: 'https://cnet.com',
  },
  {
    label: 'The Verge',
    href: 'https://theverge.com',
  },
  { label: 'Apology Line' },
];

export default () => {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = (link) => {
      axios
        .get(`/api/feeds/${encodeURIComponent(link)}`)
        .then((res) => setItems(res.data));
    };

    if (router.isReady) fetchData(router.query.link);
  }, [router.isReady]);

  console.log(items);
  return (
    <EuiProvider colorMode='light'>
      <Header />
      <Page>
        <Page.Sidebar>
          <EuiTitle>
            <h2 style={{ marginBottom: '2rem' }}>Feeds</h2>
          </EuiTitle>
          <EuiListGroup listItems={feedList} size='s' color='primary' />
        </Page.Sidebar>
        <Page.Header
          pageTitle='OneFootball'
          description={<small>Get the latest football news</small>}
        />
        <Page.Section>
          {Array.from(Array(5)).map(() => (
            <EmptyPost key={htmlIdGenerator()()} />
          ))}
        </Page.Section>
      </Page>
    </EuiProvider>
  );
};
