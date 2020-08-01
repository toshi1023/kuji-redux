import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { judgement } from '../actions';
import { error } from '../actions';
import '../sass/kuji.scss';
import ButtonAppBar from './design_parts/navbar';
import SubDisplay from './design_parts/subDisplay';
import JudgeButton from './design_parts/judge_button';

class Judgement extends Component {

  constructor(props) {
    super(props)
    this.button = this.button.bind(this)
    this.result = this.result.bind(this)
    this.judgement = this.judgement.bind(this)
    this.oneBack = this.oneBack.bind(this)
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

  /* 戻るボタンを設定 */
  oneBack() {
    this.props.history.push("/start")
  }
  
  /* レンダー処理 */
  render() {
    const { submitting } = this.props
      return (
          <React.Fragment>
            <ButtonAppBar />
            <div className="body">
              <Grid container spacing={3}>
                <Grid item xs={6}>
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
                </Grid>
                <Grid item xs={6}>
                  <div>
                    出玉1：{this.props.lottery.reward1}発
                  </div>
                  <div>
                    出玉2：{this.props.lottery.reward2}発
                  </div>
                  <div>
                    振り分け1：{this.props.lottery.section1}%
                  </div>
                  <div>
                    振り分け2：{this.props.lottery.section2}%
                  </div>
                </Grid>
              </Grid>
              <hr />
              <div className="content-box">
                {this.result()}
              </div>
              <div>
                <Button variant="contained" color="primary" size="small" type="submit" onClick={this.judgement} disabled={ submitting } >{this.button()}</Button>
              </div>
              <hr />
              <Button variant="outlined" color="primary" size="small" type="submit" onClick={this.oneBack} disabled={ submitting } >戻る</Button>
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