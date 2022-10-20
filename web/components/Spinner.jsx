import { EuiLoadingSpinner } from '@elastic/eui';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}>
      <EuiLoadingSpinner size='xxl' />
    </div>
  );
};
