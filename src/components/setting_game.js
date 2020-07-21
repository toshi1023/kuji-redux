import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import _ from 'lodash'
// import { Link } from 'react-router-dom'
import '../css/kuji.css';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField'
import { confirmLottery } from '../actions';


class SettingGame extends Component {

    constructor(props) {
      super(props)
      // onSubmit()メソッドをこのコンポーネントに紐づけている(決まり文句のようなもの)
      this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
      // input: 入力値
      // touched: 入力欄で何かしらのタッチがあったことを示す
      // →tochedされたことをトリガーにエラーメッセージを発する
      const { input, label, type, meta: { touched, error } } = field

      return (
          <TextField 
              hintText={label}
              floatingLabelText={label}
              type={type}
              errorText={touched && error} // バリデーションのメッセージも表示
              {...input}
              // fullWidth={true}
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
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="body">
                <h1>抽選ゲーム</h1>
          
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
                  <Button variant="outlined" color="primary" size="small" type="submit" disabled={pristine || submitting || invalid} >Confirm</Button>
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

  if (!values.nomal) errors.nomal = "Enter a nomal, please."
  if (!values.high) errors.high = "Enter a high, please."
  if (!values.st) errors.st = "Enter a st, please."
  if (!values.rush) errors.rush = "Enter a rush, please."

  return errors
}

const mapDispatchToProps = ({confirmLottery})

export default withRouter(connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'settingGameForm' })(SettingGame)
))