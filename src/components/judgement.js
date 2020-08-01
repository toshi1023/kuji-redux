import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { judgement } from '../actions';
import { error } from '../actions';
import '../sass/kuji.scss';
import ButtonAppBar from './design_parts/navbar';
import SubDisplay from './design_parts/subDisplay';
import JudgeButton from './design_parts/judge_button';
import ConfirmLottery from './design_parts/confirm_lottery';

class Judgement extends Component {

  constructor(props) {
    super(props)
    this.button = this.button.bind(this)
    this.result = this.result.bind(this)
    this.judgement = this.judgement.bind(this)
    this.toStart = this.toStart.bind(this)
    this.toStgame = this.toStgame.bind(this)
  }

  /* Judgementのメイン処理 */
  judgement() {
    // rushの値が無ければホームへリダイレクト
    if (!this.props.lottery.rush) {
      this.props.error()
      this.props.history.push('/')
    }
    if (this.props.lottery.rush) {
      this.props.judgement(this.props.lottery)
    }
  }

  /* Judgement結果の表示に関する設定 */
  result() {
    if (this.props.lottery.resultFlg === "judgement") {
        if (this.props.lottery.pageFlg === 1) {
            return <SubDisplay result={[this.props.lottery.start]} />
        }
        if (this.props.lottery.pageFlg === 2) {
            return <SubDisplay result={[this.props.lottery.first]} />
        }
        if (this.props.lottery.pageFlg === 3) {
            return <SubDisplay result={[this.props.lottery.second]} />
        }
        if (this.props.lottery.pageFlg === 4) {
            return <SubDisplay result={[this.props.lottery.route]} />
        }
        if (this.props.lottery.pageFlg === 5) {
            return <SubDisplay result={[this.props.lottery.third]} />
        }
        if (this.props.lottery.pageFlg === 6) {
            return <SubDisplay result={[this.props.lottery.forth]} />
        }
        if (this.props.lottery.pageFlg === 7) {
            // ボタン表示のタイプを分岐
            if (this.props.lottery.judge_result === "Congulaturation!!!") {
              var random = Math.floor( Math.random() * parseInt(100))
              if (random <= 25) {
                  return (
                      <div className="content-box">
                          <p>
                            <Button onClick={this.judgement}>
                              <JudgeButton />
                            </Button>
                          </p> 
                      </div>
                  )   
              }
            }
            return (
                <div className="content-box">
                    <p><Button variant="contained" color="primary" type="submit" size="large" onClick={this.judgement}>Push</Button></p>
                </div>
            )   
        }
        if (this.props.lottery.pageFlg === 8) {
            return <SubDisplay result={[this.props.lottery.pageFlg, this.props.lottery.judge_result]} />
        }           
        if (this.props.lottery.pageFlg === 9) {
            return <SubDisplay result={[this.props.lottery.judge_result]} />
        }           
    }
  }

  /* ボタンの表記文字を設定 */
  button() {
      if (!this.props.lottery.pageFlg || this.props.lottery.pageFlg === 9) {
        return "Judgement"
      }
      return "Next"
  }

  /* Linkボタンを設定 */
  toStart() {
    this.props.history.push("/start")
  }
  toStgame() {
    this.props.history.push("/stgame")
  }
  
  /* レンダー処理 */
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
                <Button variant="contained" color="primary" size="small" type="submit" onClick={this.judgement} disabled={ submitting } >{this.button()}</Button>
              </div>
              <hr />
              <Button variant="outlined" color="primary" size="small" type="submit" onClick={this.toStart} disabled={ submitting } >To nomal</Button>
              <Button variant="outlined" color="primary" size="small" type="submit" onClick={this.toStgame} disabled={ submitting } >To ST</Button>
            </div>
          </React.Fragment>
      )
  }
}

const mapStateToProps = state => ({
  lottery: state.lottery
})

const mapDispatchToProps = ({error, judgement})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Judgement))