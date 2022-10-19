import {EuiProvider} from '@elastic/eui';
import {useTheme} from 'next-themes';

const PageProvider = ({children}) => {
  const {resolvedTheme} = useTheme();
  return <EuiProvider colorMode={resolvedTheme}>{children}</EuiProvider>;
};
export default PageProvider;
