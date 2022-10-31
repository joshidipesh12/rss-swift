import { EuiLoadingSpinner } from '@elastic/eui';

const spinner = () => {
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
export default spinner;