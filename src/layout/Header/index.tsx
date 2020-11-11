import React, { FC, ReactNode } from 'react';

interface HeaderProps {
  className?: string;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ className = '', children }) => {
  return <header className={className}>{children}</header>;
};

export default Header;
