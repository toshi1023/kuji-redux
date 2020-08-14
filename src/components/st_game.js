import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { stLottery } from '../actions';
import { error } from '../actions';
import ConfirmLottery from './design_parts/confirm_lottery';
import '../sass/kuji.scss';
import ButtonAppBar from './design_parts/navbar';
import SubDisplay from './design_parts/subDisplay';

class StGame extends Component {

  constructor(props) {
    super(props)
    this.stStart = this.stStart.bind(this)
    this.result = this.result.bind(this)
    this.toStart = this.toStart.bind(this)
    this.toJudgement = this.toJudgement.bind(this)
  }

  stStart() {
    // stの値が無ければホームへリダイレクト
    if (!this.props.lottery.st) {
      this.props.error()
      this.props.history.push('/')
    }
    if (this.props.lottery.st) {
      console.log(this.props.lottery)
      this.props.stLottery(this.props.lottery)
    }
  }

  /* Linkボタンを設定 */
  toStart() {
    this.props.history.push("/start")
  }
  toJudgement() {
    this.props.history.push("/judgement")
  }

  result() {
    if (this.props.lottery.resultFlg === "nomal") {
      return <SubDisplay result={this.props.lottery.nomal_result} />
    }
    if(this.props.lottery.resultFlg === "st") {
      return <SubDisplay result={{
        'st': this.props.lottery.st_result, 
        'reward1': this.props.lottery.reward1, 
        'reward2': this.props.lottery.reward2, 
        'section1': this.props.lottery.section1, 
        'section2': this.props.lottery.section2
      }} />
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
                  <Button variant="contained" color="primary" size="small" type="submit" onClick={this.stStart} disabled={ submitting } >ST Go</Button>
                </div>
                <hr />
                <Button variant="outlined" color="primary" onClick={this.toStart} disabled={ submitting }>To nomal</Button>
                <Button variant="outlined" color="primary" onClick={this.toJudgement} disabled={ submitting }>To Judgement</Button>
              </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
  lottery: state.lottery
})

const mapDispatchToProps = ({error, stLottery})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StGame))