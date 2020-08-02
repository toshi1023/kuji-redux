import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import '../sass/kuji.scss';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import { confirmLottery } from '../actions';
import ButtonAppBar from './design_parts/navbar';

class RewardSetting extends Component {

    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
      
      const { input, label, type, meta: { touched, error } } = field

      return (
          <TextField 
              hintText={label}
              floatingLabelText={label}
              type={type}
              errorText={touched && error}
              {...input}
          />
      )
    }

    onSubmit(values) {
        // start_game.jsへ値を引き継げるように設定
        values.nomal = this.props.lottery.nomal
        values.high = this.props.lottery.high
        values.st = this.props.lottery.st
        values.rush = this.props.lottery.rush

        this.props.confirmLottery(values)
        this.props.history.push('/start')
    }

    render() {
      // ボタンのON,OFFカスタマイズ
      const { handleSubmit, pristine, submitting, invalid } = this.props

      // handleSubmit: submitボタンが押下されたら引数に設定した処理を実行する関数
      return (
          <React.Fragment>
            <ButtonAppBar message={this.props.lottery.error}/>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="body">
                <div>
                  <Field label="Reward1(出玉数)" type="text" name="reward1" placeholder="出玉数1" component={this.renderField} />
                </div>
                <div>
                  <Field label="Reward2(出玉数)" type="text" name="reward2" placeholder="出玉数2" component={this.renderField} />
                </div>
                <div>
                  <Field label="Section(出玉振り分け(%))" type="text" name="section" placeholder="出玉振り分け" component={this.renderField} />
                </div>
                <div>
                  <Button variant="contained" color="primary" size="small" type="submit" disabled={pristine || submitting || invalid} >Confirm</Button>
                </div>
                <hr />
                <div className="textColor">
                  振り分けはReward1の振り分けとなります
                </div>
                <div className="textColor">
                  Reward2の振り分けは、
                </div>
                <div className="textColor">
                  100 - 入力値 となります
                </div>
              </div>
            </form>
          </React.Fragment>
      )
    }
}

// validateメソッドの中でルールやメッセージを規定してリターン
const validate = values => {
  const errors = {}
  
  // 数値入力以外を許さない
  if (isNaN(parseInt(values.reward1))) errors.reward1 = "Enter a number, please."
  if (isNaN(parseInt(values.reward2))) errors.reward2 = "Enter a number, please."
  if (isNaN(parseInt(values.section))) errors.section = "Enter a number, or under 100 please."
  return errors
}

const mapStateToProps = state => ({
  lottery: state.lottery
})
const mapDispatchToProps = ({confirmLottery})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'rewardSettingForm' })(RewardSetting)
))