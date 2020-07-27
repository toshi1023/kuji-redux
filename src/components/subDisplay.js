import React from 'react';
import '../sass/kuji.scss';

export default function SubDisplay(props) {

    var result;

    const updateProps = () => {
        if(props.result) {
            result = props.result
        }

        return result
    }
    
    return (
        <div className="content-box">
            <p>{updateProps()}</p>
        </div>
    )
    
}