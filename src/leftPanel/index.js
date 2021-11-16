import React from 'react';
import AddProject from '../addProject'
import './styles.css'


const LeftPanel = () => {
    return (
    <div className="side-panel">
        <div className="side-panel-item">Projects</div>
        <div className="side-panel-item"><AddProject /></div>
    </div>
    )
}

export default LeftPanel