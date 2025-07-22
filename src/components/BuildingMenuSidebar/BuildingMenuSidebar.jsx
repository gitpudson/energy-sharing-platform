import React,{ useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import './BuildingMenuSidebar.css'
import { assets } from '../../assets/assets'

const BuildingMenuSidebar = () => {

    const { all_province_list,menu_province,menu_village,setMenuBuilding,menu_Building,setMenuSystem } = useContext(AppContext);

    const resetMenu =  (b) => {
        setMenuBuilding(prev => prev === b.split('|')[2] ? "All" : b.split('|')[2])
        setMenuSystem("All");

    }

    return (
        <div className="building-menu-list">
            {
                all_province_list.filter(l=>l.Province == menu_province).map((item,index) =>{        
                    return(
                    item.Building.filter(b=>b.includes(menu_village)).map((b)=>{
                        /* json Building
                            "Building": [
                                "เปิ่งเคลิ่ง|Building1|หอประชุม",
                                "เปิ่งเคลิ่ง|Building2|พักครูล่าง",
                                "เปิ่งเคลิ่ง|Building3|จริยธรรม",
                                "ห้องเรียนสาขา|Building1|ห้องไฟฟ้า",
                                "บ้านผู้ใหญ่|Building1|ห้องครัว"
                            ]
                        */
                        return(
                        <div key={index} className='building-menu-list-item'
                            // onClick={() => setMenuBuilding(prev => prev === b.split('|')[2] ? "All" : b.split('|')[2])}>
                            onClick={()=>resetMenu(b)}>
                            <img className={menu_Building === b.split('|')[2] ? "active" : ""} src={assets.building} alt="" />
                            <p>{b.split('|')[1]} ({b.split('|')[2]})</p>
                        </div>
                        )
                    })
                    )  
                })
                    
            }
        </div>
    )
}

export default BuildingMenuSidebar