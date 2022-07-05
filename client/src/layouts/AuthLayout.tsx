import React, { ReactNode } from 'react';
import styles from '@styles/AuthLayout.module.scss';
type Props = {
  children: ReactNode;
};
const AuthLayout = (props: Props) => (
  <div className="container">
    <div className="wrapper"></div>
  </div>
);

export default AuthLayout;
