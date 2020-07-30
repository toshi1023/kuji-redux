import React, { useState } from 'react';
import _ from 'lodash';
import '../sass/kuji.scss';

export default function SubDisplay(props) {

    if(props) {
        return (
            <div className="content-box">
                <p>{props.result}</p>
            </div>
        ) 
    }
}