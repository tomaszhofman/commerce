import { RouterContext } from 'next/dist/shared/lib/router-context';
import '../styles/globals.css';
import { Active } from '../components/NavLink/NavLink.stories';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/home',
    asPath: '/home',
  },
};
