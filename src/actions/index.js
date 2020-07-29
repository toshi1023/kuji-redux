// アクションクリエイター

export const ERROR = 'ERROR'
export const CONFIRM_LOTTERY = 'CONFIRM_LOTTERY'
export const NOMAL_LOTTERY = 'NOMAL_LOTTERY'
export const JUDGEMENT = 'JUDGEMENT'
export const ST_LOTTERY = 'ST_LOTTERY'


export const error = () => dispatch => {
  const response = "抽選確率を入力してください"
  dispatch({type: ERROR, response})
}

// values: 入力フォーム(Field)の値
export const confirmLottery = (values) => dispatch => {
    const response = values
    dispatch({type: CONFIRM_LOTTERY, response})
}

// values: 入力フォーム(Field)の値
export const nomalLottery = (values) => dispatch => {

  var lottery = []

    /* 通常確率の抽選を実施 */
    function nomal_lottery(values) {

        var times = 1
  
        while(true) {
          // 入力した通常確率の範囲内で乱数を生成
          var nomal_result = Math.floor( Math.random() * parseInt(values))
          console.log(nomal_result)
          lottery.push(nomal_result)
          
          if (nomal_result === 1) {
            console.log( times + "回転で大当たりをGET")
            break
          }
          times++
        }
        return times;
    }

    const response = {result: nomal_lottery(values), lottery: lottery}
    dispatch({type: NOMAL_LOTTERY, response})
}

export const judgement = (values) => dispatch => {
  var rate = parseInt(values.rush)
  var random = Math.floor( Math.random() * parseInt(100))
  var response = {}

  response = {
    start: "Judgment",
    first: "己の手でRushをつかみ取れ!",
    second: "期待度は...",
    third: "いざ決着!",
    forth: "気合を入れてボタンを押せ!!!"
  }
  console.log(random)
  if ( random <= rate ) {
    var route = Math.floor( Math.random() * parseInt(100))
    console.log(route)
    if (route <= 7) {
      response.route = "超激熱!!!"
    } else if(8 < route <= 35) {
      response.route = "激熱!!"
    } else if(36 < route <= 70) {
      response.route = "チャンス!"
    } else if(71 < route <= 85) {
      response.route = "チャンス...?"
    } else if(86 < route <= 100) {
      response.route = "期待できる...?"
    }
    response.result = "Congulaturation!!!"
  } else {
    var route = Math.floor( Math.random() * parseInt(100))
    if(route <= 15) {
      response.route = "激熱!!"
    } else if(16 < route <= 50) {
      response.route = "チャンス!"
    } else if(51 < route <= 75) {
      response.route = "チャンス...?"
    } else if(76 < route <= 100) {
      response.route = "期待できる...?"
    }
    response.result = "Your Failure..."
  }
  dispatch({type: JUDGEMENT, response})
}

// values: 入力フォーム(Field)の値
export const stLottery = (values) => dispatch => {

    var times
    var loop = 1
    var i
    var jackpot = []
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
          return;
        }

        return jackpot.push(times + "回転で" + loop + "連目の大当たりをGET")
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

    const response = {result: st_lottery(values), jackpot: jackpot}
    dispatch({type: ST_LOTTERY, response})
}