import React from 'react';
import Image from 'react-image-resizer';
import '../../sass/kuji.scss';
import gif_garo5 from './gif_garo5.gif';

export default function SubDisplay(props) {
    if(props) {
        // Judgementの内容を表示
        if (props.result.flg === 8) {

            if (props.result.judge === "Congulaturation!!!") {
                return (
                    <div className="content-inner">
                        <Image src={gif_garo5} alt="Gif_garo" height={270} width={300} />
                    </div>   
                )   
            }
            return (
                <div className="content-inner">
                    Failure...
                </div>
            )
        }

        console.log(props)
        console.log(props.result)
        // console.log(props.st_result)
        console.log(props.result.st)
        // ST抽選の結果を表示
        if (window.location.pathname === '/stgame' ){
            if (props.result.st === undefined) {
                return null
            }
            return (
                <>
                   <div className="content-inner">
                        <div>
                            {props.result.st}
                        </div>
                        <div>
                            {props.result.reward1}発 : 計{props.result.section1}回　{props.result.reward1 * props.result.section1}発
                        </div>
                        <div>
                            {props.result.reward2}発 : 計{props.result.section2}回　{props.result.reward2 * props.result.section2}発
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