import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {
  EuiListGroup,
  EuiLoadingContent,
  EuiPageTemplate as Page,
  EuiTitle,
  htmlIdGenerator,
} from '@elastic/eui';
import Header from '../../components/Header';
import EmptyPost from '../../components/EmptyPost';
import Post from '../../components/Post';

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
  {label: 'Apology Line'},
];

export default () => {
  const [feed, setFeed] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = link => {
      axios.get(`/api/feeds/${encodeURIComponent(link)}`).then(res => {
        setFeed(res.data);
        setIsLoading(false);
      });
    };

    if (router.isReady) fetchData(router.query.link);
  }, [router.isReady]);

  const LoadingItems = Array.from(Array(5)).map(() => (
    <EmptyPost key={htmlIdGenerator()()} />
  ));
  return (
    <div>
      <Header />
      <Page>
        <Page.Sidebar>
          <EuiTitle>
            <h2 style={{marginBottom: '2rem'}}>Feeds</h2>
          </EuiTitle>
          <EuiListGroup listItems={feedList} size="s" color="primary" />
        </Page.Sidebar>
        <Page.Header
          pageTitle={isLoading ? <EuiLoadingContent lines={1} /> : feed.title}
          description={
            isLoading ? (
              <EuiLoadingContent lines={1} />
            ) : (
              <small>{feed.description}</small>
            )
          }
          iconType={
            isLoading || !('image' in feed) ? undefined : feed.image.url
          }
        />
        <Page.Section>
          {isLoading
            ? LoadingItems
            : feed.items.map(item => (
                <Post {...item} key={htmlIdGenerator()()} />
              ))}
        </Page.Section>
      </Page>
    </div>
  );
};
