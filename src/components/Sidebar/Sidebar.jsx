import React,{ useEffect,useContext,useState } from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';

const Sidebar = ({province}) => {
     const { new_village_list } = useContext(AppContext);


    useEffect(() => {
        console.log("new_village_list");
        console.log(new_village_list);
        
    },[])

    return (
        <div className='sidebar'>
            
            <div className="sidebar-options">
                {/* <NavLink to='/energy-sharing-platform/village1' className="sidebar-option">
                    <p>Village 1</p>
                </NavLink>
                <NavLink to='/energy-sharing-platform/village2' className="sidebar-option">
                    <p>Village 2</p>
                </NavLink>
                <NavLink to='/energy-sharing-platform/village3' className="sidebar-option">
                    <p>Village 3</p>
                </NavLink> */}

                {/* {village_list.filter(l =>l.Province==province).map((item,index) =>{
                    return(
                        <div key={index}>
                            <NavLink to='/energy-sharing-platform/village3' className="sidebar-option">
                                <p>{item.VillageName} ({item.VillageNickname})</p>                                
                            </NavLink>
                        </div>
                    )
                })} */}

                {new_village_list.filter(l=>l.includes(province)).map((item,index) =>{
                    var param = "/energy-sharing-platform/"+ province + "/" + item.split('|')[1];
                    return(
                        <div key={index} className="sidebar-option">
                            {/* <NavLink to={param} className="sidebar-option">
                                <p>{item.split('|')[1]} ({item.split('|')[2]})</p>                                
                            </NavLink> */}

                            {item.split('|')[1]} ({item.split('|')[2]})

                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Sidebar