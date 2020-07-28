import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import _ from 'lodash'
import '../sass/kuji.scss';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import { confirmLottery } from '../actions';
import ButtonAppBar from './navbar';

class SettingGame extends Component {

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
                  <Field label="Nomal" type="text" name="nomal" placeholder="通常確率" component={this.renderField} />
                </div>
                <div>
                  <Field label="High" type="text" name="high" placeholder="高確率" component={this.renderField} />
                </div>
                <div>
                  <Field label="St" type="text" name="st" placeholder="ST回数" component={this.renderField} />
                </div>
                <div>
                  <Field label="Rush" type="text" name="rush" placeholder="突入確率" component={this.renderField} />
                </div>
                <div>
                  <Button variant="contained" color="primary" size="small" type="submit" disabled={pristine || submitting || invalid} >Confirm</Button>
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
  
  // 数値入力以外を許さない(空の値もエラー対象に含む)
  if (isNaN(parseInt(values.nomal))) errors.nomal = "Enter a number, please."
  if (isNaN(parseInt(values.high))) errors.high = "Enter a number, please."
  if (isNaN(parseInt(values.st))) errors.st = "Enter a number, please."
  if (isNaN(parseInt(values.rush))) errors.rush = "Enter a number, please."

  return errors
}

const mapStateToProps = state => ({
  lottery: state.lottery
})
const mapDispatchToProps = ({confirmLottery})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'settingGameForm' })(SettingGame)
))