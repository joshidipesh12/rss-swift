import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiIcon,
  EuiSwitch,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

export default () => {
  return (
    <EuiHeader theme='dark' position='fixed'>
      <EuiHeaderSection side='left'>
        <EuiHeaderSectionItem>
          <EuiHeaderLogo iconType='https://www.svgrepo.com/show/25140/rss.svg'>
            RSS Swift
          </EuiHeaderLogo>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
};
