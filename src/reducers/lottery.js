import { NOMAL_LOTTERY } from '../actions'

export default (states = {}, action) => {
    // actionのタイプに応じて処理を分ける
    switch (action.type) {
        case NOMAL_LOTTERY:
            // actions/index.jsからのresponseデータをリターン
            const times = action.response
            return {...states, nomal: times}
        // case UPDATE_EVENT:
        //     const data = action.response.data
        //     // 最新のeventsを取得して、data.idをキーにしたdataオブジェクトで値を更新する
        //     return { ...events, [data.id]: data }
        // case READ_EVENTS:
        //     // action.response.data: 外部APIからのデータを取得( reducers/index.jsで設定したresponseのデータ(APIサーバから受け取ったデータ)を受け取れる)
        //     return _.mapKeys(action.response.data, 'id') // 1: {id:1, title:...} のデータを返す
        // case DELETE_EVENT:
        //     delete events[action.id] //渡されたidというオブジェクトからデータを削除
        //     // ... : スレッド演算子→idを削除したという情報(アップデートされた情報)を新しいメモリ上に渡す
        //     return {...events}
        default:
            return states
    }
}