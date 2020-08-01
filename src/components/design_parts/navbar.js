import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ErrorMessage from './errorMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const back = (props) => {
  // 現在のURLが条件
  if (window.location.pathname === '/reward' || window.location.pathname === '/start' || window.location.pathname === '/judgement') {
      return (
          <Button variant="outlined" color="inherit" href="/">
              TOP
          </Button>
      )
  }

  return (
        // 右寄せにするためにButtonタグでラッピング
        <Button>
          <ErrorMessage message={props}/>
        </Button>
      )
}

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Kuji App
          </Typography>
          {back(props.message)}
        </Toolbar>
      </AppBar>
    </div>
  );
}