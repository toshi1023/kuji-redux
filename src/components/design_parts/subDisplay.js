import React, {useState} from 'react';
import Image from 'react-image-resizer';
import '../../sass/kuji.scss';
import gif_garo from './gif_garo.gif';

export default function SubDisplay(props) {
    const style = {
        image: {
            top: '15px',
            left: '25px',
        },
    }

    if(props) {
        // Judgementの内容を表示
        if (props.result[0] === 8) {

            if (props.result[1] === "Congulaturation!!!") {
                return (
                    <Image src={gif_garo} alt="Gif_garo" height={270} width={300} style={style.image} />
                )   
            }
            return (
                <p>Failure...</p>
            )
        }
        // ST抽選の結果を表示
        if (window.location.pathname === '/stgame' ){
            return (
                <>
                    <div>
                        {props.result[0]}
                    </div>
                    <div>
                        {props.result[1]} : {props.result[1] * props.result[2]}発
                    </div>
                    <div>
                        {props.result[3]} : {props.result[3] * props.result[4]}発
                    </div>
                </>
            )
        }

        // 通常抽選の結果を表示
        return (
            <p>{props.result}</p>
        ) 
    }
}