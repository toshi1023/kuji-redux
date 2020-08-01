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
import start_game from './start_game';

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
      console.log(this.props.lottery)
      // ボタンのON,OFFカスタマイズ
      const { handleSubmit, submitting } = this.props

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
                  <Field label="Section1(出玉振り分け%)" type="text" name="section1" placeholder="出玉振り分け1" component={this.renderField} />
                </div>
                <div>
                  <Field label="Section2(出玉振り分け%)" type="text" name="section2" placeholder="出玉振り分け2" component={this.renderField} />
                </div>
                <div>
                  <Button variant="contained" color="primary" size="small" type="submit" disabled={submitting} >Confirm</Button>
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
  if (isNaN(parseInt(values.reward1))) errors.rush = "Enter a number, please."
  if (isNaN(parseInt(values.reward2))) errors.rush = "Enter a number, please."
  if (isNaN(parseInt(values.section1))) errors.rush = "Enter a number, please."
  if (isNaN(parseInt(values.section2))) errors.rush = "Enter a number, please."

  return errors
}

const mapStateToProps = state => ({
  lottery: state.lottery
})
const mapDispatchToProps = ({confirmLottery})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'settingGameForm' })(RewardSetting)
))