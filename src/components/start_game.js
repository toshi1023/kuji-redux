import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { nomalLottery } from '../actions';
import { stLottery } from '../actions';
import { error } from '../actions';
import { Link } from 'react-router-dom'
import '../css/kuji.css';

class StartGame extends Component {

  constructor(props) {
    super(props)
    // start()メソッドとstStart()メソッドをこのコンポーネントに紐づけ
    this.start = this.start.bind(this)
    this.stStart = this.stStart.bind(this)
  }

  start() {
    // nomalの値が無ければホームへリダイレクト
    if (!this.props.lottery.nomal) {
      this.props.error()
      this.props.history.push('/')
    }
    if (this.props.lottery.nomal) {
      this.props.nomalLottery(this.props.lottery.nomal)
    }
  }

  stStart() {
    // stの値が無ければホームへリダイレクト
    if (!this.props.lottery.st) {
      this.props.error()
      this.props.history.push('/')
    }
    if (this.props.lottery.st) {
      this.props.stLottery(this.props.lottery)
    }
  }

    render() {
      const { submitting } = this.props
        return (
            <React.Fragment>
              <div className="body">
                <div>
                  通常確率：{this.props.lottery.nomal}
                </div>
                <div>
                  高確率：{this.props.lottery.high}
                </div>
                <div>
                  ST回数：{this.props.lottery.st}
                </div>
                <div>
                  突入確率：{this.props.lottery.rush}
                </div>
                <div>
                <Button variant="outlined" color="primary" size="small" type="submit" onClick={this.start} disabled={ submitting } >Go</Button>
                <Button variant="outlined" color="primary" size="small" type="submit" onClick={this.stStart} disabled={ submitting } >ST Go</Button>
                </div>
                <div>
                  通常抽選結果：{this.props.lottery.nomal_result}回で大当たり
                </div>
                <div>
                  ST抽選結果：{this.props.lottery.st_result}連
                </div>
              </div>
            </React.Fragment>
        )
    }
}

// setting_gameからの入力値とnomalLotteryからの戻り値である当選時の抽選回数を受け取り
const mapStateToProps = state => ({
  lottery: state.lottery
})

const mapDispatchToProps = ({error, nomalLottery, stLottery})

export default connect(mapStateToProps, mapDispatchToProps)(StartGame)