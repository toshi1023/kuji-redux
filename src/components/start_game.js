import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { nomalLottery } from '../actions';
import { Link } from 'react-router-dom'

class StartGame extends Component {

  constructor(props) {
    super(props)
    // start()メソッドをこのコンポーネントに紐づけ
    this.start = this.start.bind(this)
  }

  start() {
    var values = this.props.lottery.nomal
    this.props.nomalLottery(values)
  }

    render() {
      const { submitting } = this.props
        return (
            <React.Fragment>
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
                </div>
                <div>
                  結果：{this.props.lottery.nomal_result}回で大当たり
                </div>
            </React.Fragment>
        )
    }
}

// setting_gameからの入力値とnomalLotteryからの戻り値である当選時の抽選回数を受け取り
const mapStateToProps = state => ({
  lottery: state.lottery
})

const mapDispatchToProps = ({nomalLottery})

export default connect(mapStateToProps, mapDispatchToProps)(StartGame)