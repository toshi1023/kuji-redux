import React from 'react';
import Image from 'react-image-resizer';
import '../../sass/kuji.scss';
import gif_garo from './gif_garo.gif';

export default function SubDisplay(props) {
    if(props) {
        // Judgementの内容を表示
        if (props.result[0] === 8) {

            if (props.result[1] === "Congulaturation!!!") {
                return (
                    <div className="content-inner">
                        <Image src={gif_garo} alt="Gif_garo" height={270} width={300} />
                    </div>   
                )   
            }
            return (
                <div className="content-inner">
                    Failure...
                </div>
            )
        }
        // ST抽選の結果を表示
        if (window.location.pathname === '/stgame' ){
            if (props.result[2] === null) {
                return null
            }
            return (
                <>
                   <div className="content-inner">
                        <div>
                            {props.result[0]}
                        </div>
                        <div>
                            {props.result[1]}発 : 計{props.result[3]}回　{props.result[1] * props.result[3]}発
                        </div>
                        <div>
                            {props.result[2]}発 : 計{props.result[4]}回　{props.result[2] * props.result[4]}発
                        </div>
                    </div>
                </>
            )
        }

        // 通常抽選の結果を表示
        return (
            <div className="content-inner">
                {props.result}
            </div>
        ) 
    }
}