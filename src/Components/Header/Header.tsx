import React from 'react';
import Typography from '@material-ui/core/Typography';
import style from './header.module.css';

const Header = ({ title }: { title: string }): JSX.Element => {
  return (
    <header className={style.logo}>
      <Typography color="primary" variant="h1" gutterBottom>
        {title}
      </Typography>
    </header>
  );
};

export default Header;
