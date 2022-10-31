import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import { useTheme } from 'next-themes';

const Header = () => {
  const { resolvedTheme } = useTheme();
  return (
    <EuiHeader
      theme={resolvedTheme === 'light' ? 'default' : 'dark'}
      position='fixed'>
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

export default Header;
