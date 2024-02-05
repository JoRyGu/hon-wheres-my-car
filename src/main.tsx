import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@/components/theme-provider.tsx';

import { Search } from './Search.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider storageKey="ui-theme">
      <Search />
    </ThemeProvider>
  </React.StrictMode>,
);
