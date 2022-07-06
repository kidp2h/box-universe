import React, { ReactNode } from 'react';
import styles from '@styles/AuthLayout.module.scss';
import Blob from '@components/Blob';
import Mesh1 from '@images/mesh3.jpg';
import Mesh2 from '@images/mesh4.jpg';
import classnames from 'classnames';

type Props = {
  children: ReactNode;
};
const AuthLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Blob image={Mesh1} x={500} y={300} />
      <Blob image={Mesh2} x={-200} y={0} />
      <div className={`${classnames(styles.wrapLayout)} `}>
        <div className="flex justify-center items-center h-screen sm:overflow-hidden">
          <div
            className={`flex justify-center ${classnames(
              styles.wrapper,
            )} items-center lg:h-4/5 h-3/5 rounded-2xl lg:flex-row flex-col`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthLayout;
