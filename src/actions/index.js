// アクションクリエイター

export const ERROR = 'ERROR'
export const CONFIRM_LOTTERY = 'CONFIRM_LOTTERY'
export const NOMAL_LOTTERY = 'NOMAL_LOTTERY'
export const JUDGEMENT = 'JUDGEMENT'
export const ST_LOTTERY = 'ST_LOTTERY'

/* エラーメッセージをstateで管理する処理 */
export const error = () => dispatch => {
  const response = "抽選確率を入力してください"
  dispatch({type: ERROR, response})
}

/* 入力値をstateで管理する処理 */
// values: 入力フォーム(Field)の値
export const confirmLottery = (values) => dispatch => {
    if (parseInt(values.section) >= 101) {
      const response = "振り分けは100以下の数字で入力してください"
      dispatch({type: ERROR, response})
    }
    const response = values
    dispatch({type: CONFIRM_LOTTERY, response})
}

/* 通常確率の抽選処理 */
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

/* Judgementの処理 */
export const judgement = (values) => dispatch => {
  var rate = parseInt(values.rush)
  var random = Math.floor( Math.random() * parseInt(100))
  var response = {}

  function message() {
    if (!values.pageFlg || values.pageFlg === 9) {
      var response = {}
      response = {
        flg: 1
      }
    
      console.log(random)
      if ( random <= rate ) {
        var route = Math.floor( Math.random() * parseInt(100))
        console.log(route)
        if (route <= 7) {
          response.route = "超激熱!!!"
        } else if(8 < route && route <= 35) {
          response.route = "激熱!!"
        } else if(36 < route && route <= 70) {
          response.route = "チャンス!"
        } else if(71 < route && route <= 85) {
          response.route = "チャンス...?"
        } else if(86 < route && route <= 100) {
          response.route = "期待できる...?"
        }
        response.result = "Congulaturation!!!"
      } else {
        var route = Math.floor( Math.random() * parseInt(100))
        if(route <= 15) {
          response.route = "激熱!!"
        } else if(16 < route && route <= 50) {
          response.route = "チャンス!"
        } else if(51 < route && route <= 75) {
          response.route = "チャンス...?"
        } else if(76 < route && route <= 100) {
          response.route = "期待できる...?"
        }
        response.result = "Your Failure..."
      }
      return response;
    }
    if (values.pageFlg === 1) {
      response = {
        flg: 2,
        route: values.route,
        result: values.judge_result
      }
      return response
    }
    if (values.pageFlg === 2) {
      response = {
        flg: 3,
        route: values.route,
        result: values.judge_result
      }
      return response
    }
    if (values.pageFlg === 3) {
      response = {
        flg: 4,
        route: values.route,
        result: values.judge_result
      }
      return response
    }
    if (values.pageFlg === 4) {
      response = {
        flg: 5,
        route: values.route,
        result: values.judge_result
      }
      return response
    }
    if (values.pageFlg === 5) {
      response = {
        flg: 6,
        route: values.route,
        result: values.judge_result
      }
      return response
    }
    if (values.pageFlg === 6) {
      response = {
        flg: 7,
        route: values.route,
        result: values.judge_result
      }
      return response
    }
    if (values.pageFlg === 7) {
      response = {
        flg: 8,
        route: values.route,
        result: values.judge_result
      }
      return response
    }
    if (values.pageFlg === 8) {
      response = {
        flg: 9,
        route: values.route,
        result: values.judge_result
      }
      return response
    }
  }
  response = message()
  dispatch({type: JUDGEMENT, response})
}

/* ST抽選処理 */
// values: 入力フォーム(Field)の値
export const stLottery = (values) => dispatch => {

    var times
    var loop = 0
    var section1 = 0
    var section2 = 0
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
            var section = Math.floor( Math.random() * 100)
            if (section <= values.section) {
              section1++
              return jackpot.push(times + "回転で" + section1 + "連目の" + values.reward1 + "発大当たりをGET")
            }
            if(section > values.section) {
              section2++
              return jackpot.push(times + "回転で" + section2 + "連目の" + values.reward2 + "発大当たりをGET")
            }
            
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

    const response = {
      result: st_lottery(values), 
      jackpot: jackpot, 
      section1: section1, 
      section2: section2
    }
    dispatch({type: ST_LOTTERY, response})
}