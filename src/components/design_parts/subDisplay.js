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

        return (
            <p>{props.result}</p>
        ) 
    }
}