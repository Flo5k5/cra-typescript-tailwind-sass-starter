import React, { FC, ReactNode } from 'react';

interface NotificationProps {
  title: ReactNode;
  message: ReactNode;
  logo: ReactNode;
}

const Notification: FC<NotificationProps> = ({ title, message, logo }) => {
  return (
    <div className="absolute bottom-0 right-0 mr-5 mb-5 flex p-6 bg-white rounded-lg shadow-xl">
      <div className="flex-shrink-0">{logo}</div>
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-900 leading-tight">{title}</h4>
        <p className="text-base text-gray-600 leading-normal">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
