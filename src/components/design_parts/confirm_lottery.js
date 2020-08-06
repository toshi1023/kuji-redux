import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

function isSection(props) {
    if (!props || props === 100) {
      return null
    }
    return 100 - props
}

export default function ConfirmLottery(props) {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <div>
                    通常確率：{props.lottery.nomal}
                </div>
                <div>
                    高確率：{props.lottery.high}
                </div>
                <div>
                    ST回数：{props.lottery.st}
                </div>
                <div>
                    突入確率：{props.lottery.rush}%
                </div>
                </Grid>
                <Grid item xs={6}>
                <div>
                    出玉1：{props.lottery.reward1}発
                </div>
                <div>
                    出玉2：{props.lottery.reward2}発
                </div>
                <div>
                    振り分け1：{props.lottery.section}%
                </div>
                <div>
                    振り分け2：{isSection(props.lottery.section)}%
                </div>
                </Grid>
            </Grid>
            <hr />
        </>
    )
}