import React, { FC } from 'react';

interface PageTitleProps {
  className?: string;
  children: string;
}

const PageTitle: FC<PageTitleProps> = ({ className = '', children }) => {
  return <h1 className={className}>{children}</h1>;
};

export default PageTitle;
