import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { judgement } from '../actions';
import { error } from '../actions';
import '../sass/kuji.scss';
import ButtonAppBar from './navbar';
import SubDisplay from './subDisplay';

class Judgement extends Component {

  constructor(props) {
    super(props)
    this.button = this.button.bind(this)
    this.result = this.result.bind(this)
    this.judgement = this.judgement.bind(this)
  }

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

  result() {
    if (this.props.lottery.resultFlg === "judgement") {
        if (this.props.lottery.pageFlg === 1) {
            return <SubDisplay result={this.props.lottery.start} />
        }
        if (this.props.lottery.pageFlg === 2) {
            return <SubDisplay result={this.props.lottery.first} />
        }
        if (this.props.lottery.pageFlg === 3) {
            return <SubDisplay result={this.props.lottery.second} />
        }
        if (this.props.lottery.pageFlg === 4) {
            return <SubDisplay result={this.props.lottery.route} />
        }
        if (this.props.lottery.pageFlg === 5) {
            return <SubDisplay result={this.props.lottery.third} />
        }
        if (this.props.lottery.pageFlg === 6) {
            return <SubDisplay result={this.props.lottery.forth} />
        }
        if (this.props.lottery.pageFlg === 7) {
            return <SubDisplay result={this.props.lottery.judge_result} />
        }           
    }
  }

  button() {
      if (!this.props.lottery.pageFlg) {
        return "Judgement"
      }
      return "Next"
  }
    render() {
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
                  <Button variant="contained" color="primary" size="small" type="submit" onClick={this.judgement} disabled={ submitting } >{this.button()}</Button>
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

const mapDispatchToProps = ({error, judgement})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Judgement))