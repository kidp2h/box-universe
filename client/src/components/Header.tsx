import React from 'react';
import styles from '@styles/header.module.scss';
type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { title } = props;
  return <h1 className={styles.header}>{title}</h1>;
};

export default Header;
