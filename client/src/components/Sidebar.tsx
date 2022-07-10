import React, { useEffect, useState } from 'react';
import logo from '@images/logo.png';
import {
  IoChatboxOutline,
  IoExitOutline,
  IoHomeOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [page, setPage] = useState<string>('home');
  const location = useLocation();

  useEffect(() => {
    const [, name] = location.pathname.split('/');
    setPage(name);
  }, [location]);

  return (
    <div className="absolute h-full w-20 flex flex-col justify-between sidebar sidebar-blur backdrop-blur-lg rounded-r-md ">
      <div>
        <div className="logo flex justify-center mb-10 mt-2">
          <img src={logo} alt="logo" className="w-7/12 shadow-purple-500" />
        </div>
        <div
          className={`item flex justify-center relative items-center ${page === '' && 'active'} `}>
          <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
            <Link to="/">
              <IoHomeOutline size={20} className="text-white" />
            </Link>
          </div>
          <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
        </div>
        <div
          className={`item flex justify-center relative items-center ${
            page === 'chat' && 'active'
          } `}>
          <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
            <Link to="/chat">
              <IoChatboxOutline size={20} className="text-white" />
            </Link>
          </div>
          <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
        </div>
        <div
          className={`item flex justify-center relative items-center ${
            page === 'notifications' && 'active'
          } `}>
          <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
            <Link to="/notifications">
              <IoNotificationsOutline size={20} className="text-white" />
            </Link>
          </div>
          <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
        </div>
      </div>
      <div>
        <div
          className={`item flex justify-center relative items-center ${
            page === 'settings' && 'active'
          } `}>
          <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
            <Link to="/settings">
              <IoSettingsOutline size={20} className="text-white" />
            </Link>
          </div>
          <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
        </div>
        <div className="item flex justify-center relative items-center ">
          <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
            <Link to="/auth/login">
              <IoExitOutline size={20} className="text-white" />
            </Link>
          </div>
          <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
