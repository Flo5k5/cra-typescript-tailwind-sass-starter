import React, { FC, ReactNode } from 'react';
import ProfileCard from '../ProfileCard';
import Tag from '../Tag';
import Notification from '../Notification';
import logo from '../../assets/logo.svg';

const App: FC = () => {
  const tags: ReactNode[] = ['#Hello', '#World'].map((tag: string) => <Tag>{tag}</Tag>);

  return (
    <div className="">
      <ProfileCard
        logo={<img className="w-full" src={logo} alt="Display" />}
        title="Hello world"
        description={<span>This is my awesome description. 😜</span>}
        tags={tags}
      />
      <br />
      <Notification
        logo={<img className="h-12 w-12" src={logo} alt="React Logo" />}
        title="My notification"
        message="My awesome message!"
      />
    </div>
  );
};

export default App;
