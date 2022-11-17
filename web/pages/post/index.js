import {
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiIcon,
  EuiImage,
  EuiLink,
  EuiPageTemplate as Page,
  EuiText,
  EuiTextColor,
  htmlIdGenerator,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FeedLayout from '../../Layouts/FeedLayout';

import { DateTime } from 'luxon';
import Spinner from '../../components/Spinner';

const Post = () => {
  const { postClicked } = useSelector(state => state.post);
  const router = useRouter();

  useEffect(() => {
    if (!postClicked && router.isReady) router.replace('/');
  }, [router.isReady]);

  const descriptionItems = !postClicked
    ? []
    : [
        {
          label: null,
          value: (
            <>
              <EuiIcon type='snowflake' /> {postClicked.feedTitle}
            </>
          ),
          color: 'success',
        },
        {
          label: 'CREATED BY: ',
          color: 'text',
          value: postClicked.creator,
        },
        {
          label: 'Published On: ',
          color: 'text',
          value: DateTime.fromISO(postClicked.isoDate).toLocaleString({
            ...DateTime.DATETIME_FULL,
            timeZoneName: undefined,
            hour12: true,
          }),
        },
      ];

  const Description = (
    <EuiFlexGroup>
      {descriptionItems.map(item =>
        !item.value ? null : (
          <EuiFlexItem key={htmlIdGenerator()()} css={{ flexDirection: 'row' }}>
            <EuiTextColor color='subdued'>{item.label}</EuiTextColor>
            <EuiTextColor color={item.color}>{item.value}</EuiTextColor>
          </EuiFlexItem>
        ),
      )}
      <EuiFlexItem css={{ flexDirection: 'row' }}>
        <EuiLink
          href={postClicked && postClicked.link}
          css={{ fontWeight: 'normal' }}>
          <EuiIcon type='link' /> Visit Website
        </EuiLink>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  return postClicked ? (
    <>
      <Page.Header pageTitle={postClicked.title} description={Description} />
      <Page.Section>
        <EuiImage src={postClicked.image} alt={postClicked.title} hasShadow />
        <EuiHorizontalRule size='full' />
        <EuiText>
          <p>{postClicked.contentSnippet}</p>
        </EuiText>
      </Page.Section>
    </>
  ) : (
    <Spinner />
  );
};

Post.Layout = FeedLayout;

export default Post;
