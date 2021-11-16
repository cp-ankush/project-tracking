import React, {useState} from "react"
import {useDispatch} from "react-redux"
import { createProject } from '../store/actions/items'
import './styles.css'


const Modal = ({ handleClose }) => {
    const dispatch = useDispatch();
    const [projectName, setProjectName] = useState()
    return (
        <div className="modal-container">
            <div className="modal-content-container">
                ProjectName
                <input className="margin-left" type='text' onChange={(e) => {
                    setProjectName(e.target.value)
                }} />
                <button className="margin-left" 
                onClick={() => {
                    if (projectName) {
                        dispatch(createProject({name: projectName}));
                        handleClose()
                    }
                }}>Create</button>
            </div>
        </div>
    )
}

export default Modal;