import React,{ useEffect,useContext } from 'react'
import './Sidebar.css'
import { AppContext } from '../../Context/AppContext';
import VillageMenuBar from '../VillageMenuBar/VillageMenuBar';
import BuildingMenuSidebar from '../BuildingMenuSidebar/BuildingMenuSidebar';

const Sidebar = () => {
    const { menu_village } = useContext(AppContext);

    useEffect(() => {
        // console.log("new_village_list");
        // console.log(village_list);
        console.log("menu_village");
        console.log(menu_village);
        
    },[])

    return (
        
        <div className='sidebar'>
            <VillageMenuBar />
            {                
                menu_village !== "All"? <center><BuildingMenuSidebar /></center> : <></>          
            }
        </div>
        
    )
}

export default Sidebar