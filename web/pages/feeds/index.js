import React, {useEffect, useState} from 'react';
import {EuiCheckbox, EuiSpacer, EuiSwitch, EuiTitle} from '@elastic/eui';
import {useTheme} from 'next-themes';

function Home() {
  const {theme, resolvedTheme, setTheme} = useTheme();

  useEffect(() => {
    console.table({theme, resolvedTheme});
  });

  return (
    <main
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <EuiTitle size="l">
        <h1>Apply Theme</h1>
      </EuiTitle>
      <EuiSpacer size="xxl" />
      <EuiCheckbox
        id="system-theme-checkbox"
        label="Use System Theme"
        checked={theme === 'system'}
        onChange={e => setTheme(e.target.checked ? 'system' : resolvedTheme)}
      />
      <EuiSpacer size="l" />
      <EuiSwitch
        id="dark-theme-toggle"
        label="Dark Mode"
        disabled={theme === 'system'}
        checked={resolvedTheme === 'dark'}
        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </main>
  );
}

export default Home;
