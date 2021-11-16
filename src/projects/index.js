import React from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from "react-redux"
import RenderProject from './renderProject'
import './styles.css'

const Projects = () => {
    const dispatch = useDispatch();

    const { projects } = useSelector(({pageReducer}) => {
        return {
            projects: pageReducer?.projects
        }
    })
    return <div className='main'>{
        projects.map((item) => {
            return <RenderProject item={item} key={item.name}/>
        })
    }</div>
}

export default Projects