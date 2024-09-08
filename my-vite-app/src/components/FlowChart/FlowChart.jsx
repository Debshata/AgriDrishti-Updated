import React from 'react';
import FlowchartImg from '../../assets/images/background/flowChart.jpeg'
import './FlowChart.css'
const Flowchart = () => {
    return (
        <div className='flowChart-container section-p'>
            <img src={FlowchartImg} alt="Flow Chart Image"/>
        </div>
    );
}

export default Flowchart;
