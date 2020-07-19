import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import lottery from './lottery'

// reduxFormのreducerを今実装しているreduxに含める
// ここでStoreに渡せるようエクスポート
export default combineReducers({ lottery, form: form })