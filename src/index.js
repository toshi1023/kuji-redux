import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './sass/kuji.scss';
import * as serviceWorker from './serviceWorker';
import SettingGame from './components/setting_game';
import RewardSetting from './components/reward_setting';
import StartGame from './components/start_game';
import StGame from './components/st_game';
import Judgement from './components/judgement';
import Display from './components/display'

const enhancer = applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <MuiThemeProvider>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Display>
              <Route exact path="/" component={SettingGame} />
              <Route exact path="/reward" component={RewardSetting} />
              <Route exact path="/start" component={StartGame} />
              <Route exact path="/stgame" component={StGame} />
              <Route exact path="/judgement" component={Judgement} />
            </Display>
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
