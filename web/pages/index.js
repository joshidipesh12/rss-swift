import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';
import Header from '../components/Header';

export default function Home() {
  return (
    <EuiProvider colorMode='light'>
      <Header />
    </EuiProvider>
  );
}
