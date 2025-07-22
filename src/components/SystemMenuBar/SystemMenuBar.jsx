import React,{ useContext,useEffect } from 'react'
import { AppContext } from '../../Context/AppContext';
import './SystemMenuBar.css'
import { assets } from '../../assets/assets'

const SystemMenuBar = () => {
    const { all_province_list,menu_province,menu_Building,menu_System, setMenuSystem } = useContext(AppContext);

    useEffect(() => {
        console.log("BuildingNickname");
        // console.log(BuildingNickname);
        // console.log(system_list);

        // async function loadData(){   
        // await fetSystem(BuildingNickname);      
            
        // }

        // loadData();
            
    },[])

    return (
        <div className="system-menu-list">
           {
            all_province_list.filter(l=>l.Province == menu_province).map((item,index) =>{        
                return(
                    item.System.filter(s=>s.includes(menu_Building)).map((s)=>{
                        /* json System
                            "System": [
                                "หอประชุม|System1",
                                "หอประชุม|System2",
                                "หอประชุม|System3",
                                "พักครูล่าง|System1",
                                "จริยธรรม|System1",
                                "ห้องไฟฟ้า|System1",
                                "ห้องไฟฟ้า|System2",
                                "ห้องครัว|System1",
                                "ห้องครัว|System2"
                            ],
                        */
                        return(
                        <div key={index} className='system-menu-list-item'
                            onClick={() => setMenuSystem(prev => prev === s.split('|')[1] ? "All" : s.split('|')[1])}>
                            <img className={menu_System === s.split('|')[1] ? "active" : ""} src={assets.system} alt="" />
                            <p>{s.split('|')[1]}</p>
                        </div>
                        )
                    })
                )  
            })
                
        }     
        </div>
    )

}

export default SystemMenuBar