import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { nomalLottery } from '../actions';
import { stLottery } from '../actions';
import { judgement } from '../actions';
import { error } from '../actions';
import '../sass/kuji.scss';
import ButtonAppBar from './navbar';
import SubDisplay from './subDisplay';

class StartGame extends Component {

  constructor(props) {
    super(props)
    // start()メソッドとjudgement()メソッド、stStart()メソッドをこのコンポーネントに紐づけ
    this.start = this.start.bind(this)
    this.stStart = this.stStart.bind(this)
    this.result = this.result.bind(this)
    this.judgement = this.judgement.bind(this)
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

  judgement() {
    // rushの値が無ければホームへリダイレクト
    if (!this.props.lottery.rush) {
      this.props.error()
      this.props.history.push('/')
    }
    if (this.props.lottery.rush) {
      this.props.history.push('/judgement')
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

  result() {
    if (this.props.lottery.resultFlg === "nomal") {
      return <SubDisplay result={this.props.lottery.nomal_result} />
    }
    if(this.props.lottery.resultFlg === "st") {
      return <SubDisplay result={this.props.lottery.st_result} />
    }
  }
    render() {
      console.log(this.props.lottery)
      const { submitting } = this.props
        return (
            <React.Fragment>
              <ButtonAppBar />
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
                <hr />
                {this.result()}
                <div>
                  <Button variant="contained" color="primary" size="small" type="submit" onClick={this.start} disabled={ submitting } >Go</Button>
                  <Button variant="contained" color="primary" size="small" type="submit" onClick={this.judgement} disabled={ submitting } >Judgement</Button>
                  <Button variant="contained" color="primary" size="small" type="submit" onClick={this.stStart} disabled={ submitting } >ST Go</Button>
                </div>
                <hr />
              </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
  lottery: state.lottery
})

const mapDispatchToProps = ({error, nomalLottery, stLottery, judgement})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartGame))