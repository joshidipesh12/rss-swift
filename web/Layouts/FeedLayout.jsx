import {EuiPageTemplate as Page, EuiTitle, EuiListGroup} from '@elastic/eui';
import Header from '../components/Header';

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

export default ({children}) => {
  return (
    <>
      <Header />
      <Page>
        <Page.Sidebar>
          <EuiTitle>
            <h2 style={{marginBottom: '2rem'}}>Feeds</h2>
          </EuiTitle>
          <EuiListGroup listItems={feedList} size="s" color="primary" />
        </Page.Sidebar>
        {children}
      </Page>
    </>
  );
};
