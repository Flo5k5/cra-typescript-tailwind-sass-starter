import React, { FC, ReactNode } from 'react';

interface NavBarProps {
  className?: string;
  children: ReactNode;
}

const NavBar: FC<NavBarProps> = ({ className = '', children }) => {
  return <nav className={className}>{children}</nav>;
};

export default NavBar;
