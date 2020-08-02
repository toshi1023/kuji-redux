import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { nomalLottery } from '../actions';
import { error } from '../actions';
import ConfirmLottery from './design_parts/confirm_lottery';
import '../sass/kuji.scss';
import ButtonAppBar from './design_parts/navbar';
import SubDisplay from './design_parts/subDisplay';

class StartGame extends Component {

  constructor(props) {
    super(props)
    this.start = this.start.bind(this)
    this.result = this.result.bind(this)
    this.toStgame = this.toStgame.bind(this)
    this.toJudgement = this.toJudgement.bind(this)

    // 入力値で不正なエラーがあった場合はTOPページへリダイレクト
    if (this.props.lottery.error) {
      this.props.history.push('/')
    }
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

  /* Linkボタンを設定 */
  toStgame() {
    this.props.history.push("/stgame")
  }
  toJudgement() {
    this.props.history.push("/judgement")
  }

  result() {
    if (this.props.lottery.resultFlg === "nomal") {
      return <SubDisplay result={this.props.lottery.nomal_result} />
    }
  }
    render() {
      const { submitting } = this.props
        return (
            <React.Fragment>
              <ButtonAppBar />
              <div className="body">
                <ConfirmLottery lottery={this.props.lottery} />
                <div className="content-box">
                  {this.result()}
                </div>
                <div>
                  <Button variant="contained" color="primary" size="small" type="submit" onClick={this.start} disabled={ submitting } >Go</Button>
                </div>
                <hr />
                <Button variant="outlined" color="primary" onClick={this.toStgame} disabled={ submitting }>To ST</Button>
                <Button variant="outlined" color="primary" onClick={this.toJudgement} disabled={ submitting }>To Judgement</Button>
              </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
  lottery: state.lottery
})

const mapDispatchToProps = ({error, nomalLottery})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartGame))