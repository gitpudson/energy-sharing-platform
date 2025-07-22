import React, { useContext, useState } from 'react'
import './Sidebar2.css'
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext';
import VillageMenuBar from '../VillageMenuBar/VillageMenuBar';
import BuildingMenuSidebar from '../BuildingMenuSidebar/BuildingMenuSidebar';


const Sidebar2 = ({building,setBuilding,village,setVillage}) => {

    const { menu_village } = useContext(AppContext);
    

    return (
        <div className='sidebar2'>
            <VillageMenuBar village={village} setVillage={setVillage} setBuilding={setBuilding} />

            {                
                menu_village !== "" && village !== "All"? <center><BuildingMenuSidebar building={building} setBuilding={setBuilding} /></center> : <></>          
            }
        </div>
    )
}



export default Sidebar2