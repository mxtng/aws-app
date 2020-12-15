import React, { useState } from 'react';
import { Menu } from 'antd';

const Nav = () => {
  const [current, setCurrent] = useState('home');

  return (
    <div>
      <Menu selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='home'>Home</Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
