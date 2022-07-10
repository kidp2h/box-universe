import React, { ReactNode } from 'react';
import Sidebar from '@components/Sidebar';
import Blob from '@components/Blob';
import Mesh1 from '@images/mesh3.jpg';
import { Outlet } from 'react-router-dom';
import store from '@stores/app';

const MainLayout = (props: {}) => {
  const { appSlice } = store.getState();
  // console.log(appSlice);
  return (
    <>
      <Blob x={-455} y={-10} image={Mesh1} />
      <div className="wrapLayout flex h-full w-full">
        <Sidebar />
        <div className="mainContent ml-20 text-white">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default React.memo(MainLayout);
