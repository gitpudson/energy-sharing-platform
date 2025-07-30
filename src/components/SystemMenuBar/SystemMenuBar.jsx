import React,{ useContext,useEffect,useState } from 'react'
import { AppContext } from '../../Context/AppContext';
import './SystemMenuBar.css'
import { assets } from '../../assets/assets'
import axios from 'axios';

const SystemMenuBar = () => {
    const { all_province_list,menu_province,menu_Building,menu_System, setMenuSystem,fetInputData,input_data_list } = useContext(AppContext);

    const getInputData =  (number_of_systems,spreadsheet_id,system) => {
        console.log(menu_System);
        setMenuSystem(prev => prev === system.split('|')[1] ? "All" : system.split('|')[1]);
        
        // if (menu_System !== "All") {
        //      fetInputData(number_of_systems,spreadsheet_id);
        //     //  console.log(menu_System);
        // }

        fetInputData(number_of_systems,spreadsheet_id);
       
        // console.log("getInputData");
        console.log(input_data_list);
       
        
    }


    useEffect(() => {
        // async function loadData(){   
        // await fetInputData(3,"1jvpGR2LA0QGnm1riPzFTyz8x1NJnUxLiSmYGg1ys_i4");      
            
        // }

        // loadData();
            
    },[])

    return (
          <>
        <div className="system-menu-list">
           {
            all_province_list.filter(l=>l.Province == menu_province).map((item,index) =>{  

                //Get Number Of System
                let number_of_systems =  item.System.filter(s=>s.includes(menu_Building)).map((s)=>{                      
                })

                //Get Speadsheet ID
                let spreadsheet_id = item.Speadsheet_ID.filter(s=>s.includes(menu_Building)).map((s)=>{
                    return(
                        s.split("|")[1]
                    )
                })

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
                            // onClick={() => setMenuSystem(prev => prev === s.split('|')[1] ? "All" : s.split('|')[1])}>
                            onClick={() => getInputData(number_of_systems.length,spreadsheet_id[0],s)}>
                            <img className={menu_System === s.split('|')[1] ? "active" : ""}  src={assets.system} alt="" />
                            <p>{s.split('|')[1]}</p>
                        </div>
                        )
                    })
                )  
            })
                
        }     
        </div>
        

        </>
    )

}

export default SystemMenuBar