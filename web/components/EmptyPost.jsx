import {
  EuiFlexItem,
  EuiLoadingContent,
  EuiFlexGroup,
  useEuiTheme,
} from '@elastic/eui';

const EmptyPost = () => {
  const { euiTheme } = useEuiTheme();
  return (
    <div style={{ marginTop: '1rem' }}>
      <EuiFlexGroup>
        <EuiFlexItem grow={1}>
          <p
            style={{
              background: `${euiTheme.colors.lightestShade}`,
              height: '100%',
              borderRadius: '10%',
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={10} style={{ height: '7rem' }}>
          <div style={{ width: '90%' }}>
            <EuiLoadingContent lines={2} />
          </div>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default EmptyPost;
