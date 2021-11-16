import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { deleteProject, updateProjectTimer } from '../store/actions/items'


const RenderProject = ({item}) => {
    const dispatch = useDispatch();
    const [isTimer, setIsTimer] = useState(null)
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (isTimer) {
            setTimeout(() => {
                setTimer(timer + 1)
            }, 1000) 
        }
    }, [isTimer, timer])

    return (
        <div key={item.name} className="project-item">
            <span className="margin-right">{item.name}</span>
            <button className="margin-right" onClick={() => {
                !isTimer && setIsTimer(true)
                }}>Start Timer</button>
            <span className="margin-right">{timer}</span>
            <button className="margin-right" onClick={() => {
                setIsTimer(false);
                }}>End timer</button>
            <button className="margin-right" onClick={() => {
                dispatch(deleteProject(item.name));
            }}>Delete</button>
        </div>
    )
}


export default RenderProject