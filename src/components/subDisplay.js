import React from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../sass/kuji.scss';

/* Judgement用のボタンデザイン */
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

export default function SubDisplay(props) {
    const classes = useStyles();

    if(props) {
        if (props.result[0] === 7) {

            if (props.result[1] === "Congulaturation!!!") {
                var random = Math.floor( Math.random() * parseInt(100))
                if (random <= 25) {
                    return (
                        <div className="content-box">
                            <p>
                                <Button
                                    classes={{
                                        root: classes.root,
                                        label: classes.label,
                                    }}
                                >
                                    Push
                                </Button>
                            </p>
                        </div>
                    )   
                }
            }
            return (
                <div className="content-box">
                    <p><Button variant="contained" color="secondary" size="large" type="submit" className={classes.margin}>Push</Button></p>
                </div>
            )   
        }

        return (
            <div className="content-box">
                <p>{props.result}</p>
            </div>
        ) 
    }
}