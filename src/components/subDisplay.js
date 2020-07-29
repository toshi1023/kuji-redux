import React from 'react';
import '../sass/kuji.scss';

export default function SubDisplay(props) {

    const updateProps = () => {
        if(props.result) {
            return props.result   
        }
    }
    
    return (
        <div className="content-box">
            <p>{updateProps()}</p>
        </div>
    )
    
}