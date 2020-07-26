/* エラーメッセージ表示用のコンポーネント */

import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

/* Snackbarの各種設定 */
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ErrorMessage(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // stateにerrorの値があればその値を入れてSnackbarをリターン
  if (props.message) {
    return (
      <div className={classes.root}>
        <Button variant="outlined" color="secondary" onClick={handleClick}>
            エラーがあります！<br />
            (Click Here!)
        </Button>
        <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {props.message}
          </Alert>
        </Snackbar>
      </div>
    )
  }

  return null
}