import { CONFIRM_LOTTERY, NOMAL_LOTTERY, ST_LOTTERY, ERROR, JUDGEMENT } from '../actions'

export default (states = {}, action) => {
    // actionのタイプに応じて処理を分ける
    switch (action.type) {
        case ERROR:
            return {...states, error: action.response}
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
            return {...states, nomal_result: action.response}
        case JUDGEMENT:
            return {...states, judgement: action.response}
        case ST_LOTTERY:
            return {...states, st_result: action.response}
        default:
            return states
    }
}