// アクションクリエイター

export const CONFIRM_LOTTERY = 'CONFIRM_LOTTERY'
export const NOMAL_LOTTERY = 'NOMAL_LOTTERY'

export const confirmLottery = (values) => async dispatch => {
  const response = values
  dispatch({type: CONFIRM_LOTTERY, response})
}


// values: 入力フォーム(Field)の値
export const nomalLottery = (values) => async dispatch => {

    /* 通常確率の抽選を実施 */
    function nomal_lottery(values) {

        var times = 1
  
        while(true) {
          // 入力した通常確率の範囲内で乱数を生成
          var nomal_result = Math.floor( Math.random() * parseInt(values))
          console.log(nomal_result)
  
          if (nomal_result === 1) {
            console.log( times + "回転で大当たりをGET")
            break
          }
  
          times++
        }

        return times;
    }

    const response = nomal_lottery(values)
    dispatch({type: NOMAL_LOTTERY, response}) //dispatchコールによりreducerとして渡す
}