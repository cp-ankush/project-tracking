import React, {useState} from 'react'
import Modal from "../modal"
import './styles.css'

const AddProject = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleClose = () => {
        setIsOpened(false)
    }

    return (
        <div className="button-container">
           <button className="button" onClick={() => {
               setIsOpened(!isOpened)
           }}>Add Project </button>
            {
                isOpened && 
                <Modal handleClose={handleClose} />
            }
        </div>
    )
}

export default AddProject;