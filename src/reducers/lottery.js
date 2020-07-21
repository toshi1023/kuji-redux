import { CONFIRM_LOTTERY, NOMAL_LOTTERY } from '../actions'

export default (states = {}, action) => {
    // actionのタイプに応じて処理を分ける
    switch (action.type) {
        case CONFIRM_LOTTERY:
            // actions/index.jsからのresponseデータをリターン
            return {
                ...states,
                nomal: action.response.nomal,
                high: action.response.high,
                st: action.response.st,
                rush: action.response.rush,
            }
        case NOMAL_LOTTERY:
            // actions/index.jsからのresponseデータをリターン
            return {...states, nomal_result: action.response}
        default:
            return states
    }
}