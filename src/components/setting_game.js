import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import '../sass/kuji.scss';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { confirmLottery } from '../actions';
import ButtonAppBar from './design_parts/navbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SettingGame extends Component {

    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleClose = this.handleClose.bind(this)
      this.state = {open: false}
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
    
    // 警告用のSnackBarの設定
    handleClick = () => {
      this.setState(prevState => {
        return { 
          open: true,
        };
      });
    };
    handleClose = () => {
      this.setState(prevState => {
        return { open: false };
      });
    };

    onSubmit(values) {
        this.props.confirmLottery(values)
        this.props.history.push('/reward')
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
                  <Field label="Nomal(通常確率)" type="text" name="nomal" placeholder="通常確率" component={this.renderField} />
                </div>
                <div>
                  <Field label="High(高確率)" type="text" name="high" placeholder="高確率" component={this.renderField} />
                </div>
                <div>
                  <Field label="St(ST回転数)" type="text" name="st" placeholder="ST回数" component={this.renderField} />
                </div>
                <div>
                  <Field label="Rush(確変突入率)" type="text" name="rush" placeholder="突入確率" component={this.renderField} onChange={this.handleClick} />
                </div>
                <div>
                  <Button variant="contained" color="primary" size="small" type="submit" disabled={pristine || submitting || invalid} >Next</Button>
                </div>
              </div>      
            </form>
            <Snackbar open={this.state.open} autoHideDuration={8000} onClose={this.handleClose}>
              <Alert onClose={this.handleClose} severity="warning">
                出玉振り分けは100以下の数字で入力が必須です
              </Alert>
            </Snackbar>
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