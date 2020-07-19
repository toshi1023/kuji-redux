import { NOMAL_LOTTERY } from '../actions'

export default (states = {}, action) => {
    // actionのタイプに応じて処理を分ける
    switch (action.type) {
        case NOMAL_LOTTERY:
            // actions/index.jsからのresponseデータをリターン
            const times = action.response
            return {...states, nomal: times}
        default:
            return states
    }
}