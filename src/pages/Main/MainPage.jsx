import React, { useState } from 'react'
import './MainPage.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import SystemMenuBar from '../../components/SystemMenuBar/SystemMenuBar';

const MainPage = () => {
    // const [category,setCategory] = useState("All");
    return (
        // <div className='main-page'>
        <div className='h-container'>
            <Sidebar/>

            {

            }
            <div className="v-container">
                <div className="system-bar">
                    <SystemMenuBar/>
                </div>

                <div className='system-data'>
                  
                </div>

            </div>

            

        </div>
    )
}

export default MainPage