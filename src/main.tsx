import { render } from 'preact';
import WebFont from 'webfontloader';

import './firebase';
import App from './app';
import ErrorBoundary from 'components/ErrorBoundary';
import './index.scss';

WebFont.load({
  google: {
    families: ['Ubuntu:400,500:latin,cyrillic'],
  },
  classes: false,
});

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('app') as HTMLElement
);
