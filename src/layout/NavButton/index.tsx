import React, { FC } from 'react';

interface NavButtonProps {
  title: string;
  href: string;
  isActive?: boolean;
}

const NavButton: FC<NavButtonProps> = ({ title, href, isActive }) => {
  const borderStyle: string | undefined = isActive ? 'border-b-2 border-orange-400' : undefined;

  return (
    <a className={`py-5 text-sm ${borderStyle || ''}`} href={href}>
      <button className="font-normal tracking-wider">{title}</button>
    </a>
  );
};

export default NavButton;
