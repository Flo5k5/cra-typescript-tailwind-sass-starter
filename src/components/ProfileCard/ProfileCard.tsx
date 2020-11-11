import React, { FC, ReactNode } from 'react';

interface ProfileCardProps {
  logo: ReactNode;
  title: ReactNode;
  description: ReactNode;
  tags?: ReactNode[];
}

const ProfileCard: FC<ProfileCardProps> = ({ logo, title, description, tags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {logo}
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {tags ? <div className="px-6 py-4">{tags}</div> : null}
    </div>
  );
};

export default ProfileCard;
