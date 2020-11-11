import React, { FC, ReactNode } from 'react';

interface ContainerBlockProps {
  className?: string;
  children: ReactNode;
}

const ContainerBlock: FC<ContainerBlockProps> = ({ className = '', children }) => {
  return <div className={className}>{children}</div>;
};

export default ContainerBlock;
