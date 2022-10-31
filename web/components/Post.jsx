import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiPanel,
  EuiText,
  EuiTextColor,
  EuiTitle,
  useEuiTheme,
} from '@elastic/eui';

import { DateTime } from 'luxon';
import { setPostClicked } from '../store/slices/post';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const Post = props => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { euiTheme } = useEuiTheme();

  const { title, contentSnippet, content, thumbnail, image, isoDate } = props;

  const getDate = () => {
    let d = DateTime.now()
      .diff(DateTime.fromISO(isoDate), ['day', 'hours'])
      .normalize();

    if (!d.isValid) return '0d';

    return (d.days === 0 ? d.shiftTo('hours') : d).toHuman({
      unitDisplay: 'narrow',
      maximumFractionDigits: 0,
      signDisplay: 'never',
    });
  };

  const handleClick = (event, post) => {
    event.preventDefault();
    dispatch(setPostClicked(post));
    router.push('/post');
  };

  return (
    <EuiPanel color='transparent'>
      <EuiFlexGroup>
        {thumbnail || image ? (
          <EuiFlexItem grow={2}>
            <EuiImage src={thumbnail || image} alt={title} hasShadow />
          </EuiFlexItem>
        ) : null}
        <EuiFlexItem grow={10}>
          <EuiLink
            href='/post'
            color='success'
            css={{ textDecoration: 'none' }}
            onClick={event => handleClick(event, props)}>
            <EuiText>
              <EuiTitle size='s'>
                <p style={{ display: 'flex', flexDirection: 'column' }}>
                  {title}
                  <EuiTextColor color='success'>
                    <small style={{ fontWeight: 'normal' }}>{getDate()}</small>
                  </EuiTextColor>
                </p>
              </EuiTitle>
              <p style={{ color: euiTheme.colors.text }}>
                {contentSnippet || content}
              </p>
            </EuiText>
          </EuiLink>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};

export default Post;
