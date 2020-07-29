import React, { Component } from 'react';
import { connect } from 'react-redux'
import SettingGame from './setting_game';
import StartGame from './start_game';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import '../sass/kuji.scss';

class Display extends Component {

    constructor(props) {
        super(props)
        this.renderJackpots = this.renderJackpots.bind(this)
      }

    // ページの分岐を設定
    currentPage() {
        // 現在のURLが条件
        if (window.location.pathname === '/start' ){
            return <StartGame />
        }
        return <SettingGame />
    }

    renderJackpots() {
        // _: lodash → mapでデータを繰り返し実装するため
        if (this.props.lottery.resultFlg === 'nomal') {
            return _.map(this.props.lottery.lottery, lottery => (
                <li>
                    {lottery}
                </li>
            ))
        }

        if (this.props.lottery.resultFlg === 'st') {
            return _.map(this.props.lottery.jackpot, jackpot => (
                <li key={jackpot}>
                    {jackpot}
                </li>
            ))
        }
        
        if (this.props.lottery.resultFlg === 'judgement') {
            return (
                <>
                    <li>{this.props.lottery.start}</li>
                    <li>{this.props.lottery.first}</li>
                    <li>{this.props.lottery.second}</li>
                    <li>{this.props.lottery.route}</li>
                    <li>{this.props.lottery.third}</li>
                    <li>{this.props.lottery.forth}</li>
                    <li>{this.props.lottery.judge_result}</li>
                </>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="iphone">
                    <div className="iphone-top">
                        <span className="camera"></span>
                        <span className="sensor"></span>
                        <span className="speaker"></span>
                    </div>
                    <div className="top-bar"></div>
                    <div className="iphone-screen">
                        {this.currentPage()}
                    </div>
                    <div className="buttons">
                        <span className="on-off"></span>
                        <span className="sleep"></span>
                        <span className="up"></span>
                        <span className="down"></span>
                    </div>
                    <div className="bottom-bar"></div>
                    <div className="iphone-bottom">
                        <span></span>
                    </div>
                    </div>
                </div> 
                <div className="body">
                    <hr />
                </div>
                <Grid item xs={12}>
                    <div className="gameLog">
                        <h2>Game Log</h2>
                        {this.renderJackpots()}
                    </div>
                </Grid>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    lottery: state.lottery
})

export default connect(mapStateToProps, null)(Display)