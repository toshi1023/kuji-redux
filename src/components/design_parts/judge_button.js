import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

/* Judgement用のBIGボタンデザイン */
const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 6,
      border: 0,
      color: 'white',
      height: '180px',
      width: '240px',
      fontSize: '50px',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  });

export default function JudgeButton() {
    const classes = useStyles();

    return (
        <Button 
            variant="contained" 
            color="secondary" 
            classes={{
                root: classes.root,
                label: classes.label,
            }} 
        >
            Push
        </Button>
    )
    
}