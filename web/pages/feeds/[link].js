import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  EuiLink,
  EuiLoadingContent,
  EuiPageTemplate as Page,
  htmlIdGenerator,
} from '@elastic/eui';

import EmptyPost from '../../components/EmptyPost';
import Post from '../../components/Post';
import FeedLayout from '../../Layouts/FeedLayout';

const Feeds = () => {
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
  console.log(feed);
  return (
    <>
      <Page.Header
        pageTitle={
          isLoading ? (
            <EuiLoadingContent lines={1} />
          ) : (
            <EuiLink href={feed.link} color='text' target='_blank'>
              {feed.title}
            </EuiLink>
          )
        }
        description={
          isLoading ? (
            <EuiLoadingContent lines={1} />
          ) : (
            <small>{feed.description}</small>
          )
        }
        iconType={isLoading || !('image' in feed) ? undefined : feed.image.url}
      />
      <Page.Section>
        {isLoading
          ? LoadingItems
          : feed.items.map(item => (
              <Post
                {...item}
                feedTitle={feed.title}
                key={htmlIdGenerator()()}
              />
            ))}
      </Page.Section>
    </>
  );
};

Feeds.Layout = FeedLayout;

export default Feeds;
