import { ReactElement } from 'react';

export type NavLinkProps = {
  children: ReactElement;
  activeClassName: string;
  className: string;
  href: string;
};
