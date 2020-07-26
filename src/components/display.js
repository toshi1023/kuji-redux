import React, { Component } from 'react';
import { connect } from 'react-redux'
import SettingGame from './setting_game';
import StartGame from './start_game';
import '../sass/kuji.scss';

class Display extends Component {

    // ページの分岐を設定
    currentPage() {
        // 現在のURLが条件
        if (window.location.pathname === '/start' ){
            return <StartGame />
        }
        
        return <SettingGame />
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
            </React.Fragment>
        )
    }
}

export default Display