import React, { Children, cloneElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavLinkProps } from '@/components/NavLink/NavLink.props';

const NavLink = ({ children, activeClassName, ...props }: NavLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName: string = child.props.className || '';

  const className =
    asPath === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName;

  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || undefined,
      })}
    </Link>
  );
};

export { NavLink };
