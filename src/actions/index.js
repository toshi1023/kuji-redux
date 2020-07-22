// アクションクリエイター

export const CONFIRM_LOTTERY = 'CONFIRM_LOTTERY'
export const NOMAL_LOTTERY = 'NOMAL_LOTTERY'
export const ST_LOTTERY = 'ST_LOTTERY'

export const confirmLottery = (values) => dispatch => {
  const response = values
  dispatch({type: CONFIRM_LOTTERY, response})
}


// values: 入力フォーム(Field)の値
export const nomalLottery = (values) => dispatch => {

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
    dispatch({type: NOMAL_LOTTERY, response})
}

export const stLottery = (values) => dispatch => {

    var times
    var loop = 1
    // stの結果を代入する配列を宣言
    var st_result = []
    var game_over
    
    /* stの抽選を実施 */
    function st_loop(values) {
  
        // st値回数を超えたらループ終了
        while(times <= values.st) {
          // 入力した通常確率の範囲内で乱数を生成
          var high_lottery = Math.floor( Math.random() * parseInt(values.high))
          console.log(high_lottery)
  
          if (high_lottery === 1) {
            loop++
            console.log( times + "回転で" + loop + "連目の大当たりをGET" )
            break
          }
  
          times++
        }

        if (times > values.st) {
          game_over = '終了！'
          console.log(game_over)
        }
    }

    // game_overに値が入らない限りst_loopの処理を繰り返す
    function st_lottery(values) {
      while (true) {
        times = 1

        st_loop(values)
        if (game_over) {
          break
        }  
      }

      return loop;
      
    }

    const response = st_lottery(values)
    dispatch({type: ST_LOTTERY, response})
}