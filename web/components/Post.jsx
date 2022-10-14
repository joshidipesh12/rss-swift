import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiPanel,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import { DateTime } from 'luxon';

export default ({
  title,
  contentSnippet,
  content,
  thumbnail,
  image,
  isoDate,
}) => {
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

  return (
    <EuiPanel color='transparent'>
      <EuiFlexGroup>
        {thumbnail || image ? (
          <EuiFlexItem grow={2}>
            <EuiImage src={thumbnail || image} alt={title} hasShadow />
          </EuiFlexItem>
        ) : null}
        <EuiFlexItem grow={10}>
          <EuiText>
            <EuiTitle size='s'>
              <p style={{ display: 'flex', flexDirection: 'column' }}>
                {title}
                <small style={{ fontWeight: 'normal', color: 'green' }}>
                  {getDate()}
                </small>
              </p>
            </EuiTitle>
            <p>{contentSnippet || content}</p>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
};
