import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class StartGame extends Component {


    render() {
        return (
            <React.Fragment>
                <div>
                    通常確率：{state.nomal}
                  </div>
                  <div>
                    高確率：{state.high}
                  </div>
                  <div>
                    ST回数：{state.st}
                  </div>
                  <div>
                    突入確率：{state.rush}
                  </div>
            </React.Fragment>
        )
    }

}