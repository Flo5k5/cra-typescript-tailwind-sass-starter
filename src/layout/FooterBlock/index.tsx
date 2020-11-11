import React, { FC } from 'react';

interface FooterBlockProps {
  className?: string;
  title: string;
  text: string;
}

const FooterBlock: FC<FooterBlockProps> = ({ className = '', title, text }) => {
  return (
    <div className={`w-4/12 pr-5 pt-10 pb-5 ${className}`}>
      <h4 className="my-5 pl-4 border-l-4 border-indigo-600 font-bold">{title}</h4>
      <p className="pl-5 text-gray-600 text-sm">{text}</p>
    </div>
  );
};

export default FooterBlock;
