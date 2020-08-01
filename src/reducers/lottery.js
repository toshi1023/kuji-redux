import { CONFIRM_LOTTERY, NOMAL_LOTTERY, ST_LOTTERY, ERROR, JUDGEMENT } from '../actions'
import _ from 'lodash'

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
                reward1: action.response.reward1,
                reward2: action.response.reward2,
                section: action.response.section
            }
        case NOMAL_LOTTERY:
            return {...states, 
                nomal_result: '通常抽選結果：' + action.response.result + '回で大当たり',
                lottery: action.response.lottery,
                resultFlg: 'nomal'
            }
        case JUDGEMENT:
            return {...states,
                start: "Judgment",
                first: "己の手でRushをつかみ取れ!",
                second: "期待度は...",
                third: "いざ決着!",
                forth: "気合を入れてボタンを押せ!!!",
                route: action.response.route,
                judge_result: action.response.result,
                pageFlg: action.response.flg,
                resultFlg: 'judgement'
            }
        case ST_LOTTERY:
            return {...states, 
                st_result: 'ST抽選結果：' + action.response.result + '連',
                jackpot: action.response.jackpot,
                section1: action.response.section1,
                section2: action.response.section2,
                resultFlg: 'st'
            }
        default:
            return states
    }
}