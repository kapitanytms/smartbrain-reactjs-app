import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({input}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img alt="" src={input} width="500px" height="auto"/>
            </div>
        </div>
    );
}

export default FaceRecognition;