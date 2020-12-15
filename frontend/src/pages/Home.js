import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu } from 'antd';

const Home = () => {
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (!key) return;

    setLoading(true);
    axios.get(`http://localhost:5000/api/player/${key}`).then((res) => {
      setPlayerData(res.data[0]);
      setLoading(false);
    });
  }, [key]);

  const handleClick = (e) => {
    setKey(e.key);
  };

  return (
    <div className='container'>
      <h1 className='m-4 text-center text-info'>Player's Profile</h1>
      <div className='row'>
        <div className='col-md-3'>
          <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={[key]}
            mode='inline'
          >
            <Menu.Item key='lebron-james'>Lebron James</Menu.Item>
            <Menu.Item key='anthony-davis'>Anthony Davis</Menu.Item>
            <Menu.Item key='rajon-rondo'>Rajon Rondo</Menu.Item>
            <Menu.Item key='james-harden'>James Harden</Menu.Item>
            <Menu.Item key='john-wall'>John Wall</Menu.Item>
          </Menu>
        </div>
        <div className='col-md-8'>
          {!key ? (
            <p className='p-5 text-center'>No player selected</p>
          ) : loading || !playerData ? (
            <p className='p-5 text-center'>Loading...</p>
          ) : (
            <div>
              <div className='form-group'>
                <p>
                  Name: <span>{playerData.name}</span>
                </p>
              </div>
              <div className='form-group'>
                <p>
                  Team: <span>{playerData.team}</span>
                </p>
              </div>
              <div className='form-group'>
                <p>
                  Number: <span>{playerData.number}</span>
                </p>
              </div>
              <div className='form-group'>
                <p>
                  Position: <span>{playerData.position}</span>
                </p>
              </div>
              <div className='form-group'>
                <p>
                  Height: <span>{playerData.height}</span>
                </p>
              </div>
              <div className='form-group'>
                <p>
                  Weight: <span>{playerData.weight}</span>
                </p>
              </div>
              <div className='form-group'>
                <p>
                  Country: <span>{playerData.country}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
