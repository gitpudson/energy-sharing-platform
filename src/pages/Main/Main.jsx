import React from 'react'
import './Main.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Main = ({province}) => {
    return (
        <>
            <Sidebar province={province}/>
        </>
    )
}

export default Main