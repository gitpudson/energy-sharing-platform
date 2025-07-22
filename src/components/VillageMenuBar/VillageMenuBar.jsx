import React,{useContext,useEffect} from 'react'
import './VillageMenuBar.css'
import { AppContext } from '../../Context/AppContext';
import { assets } from '../../assets/assets'

const VillageMenuBar = () => {

  const {  menu_province, setMenuVillage,menu_village,all_province_list,setMenuBuilding } = useContext(AppContext);

  
  const resetMenu =  (v) => {
    setMenuVillage(prev => prev === v.split('|')[1] ? "All" : v.split('|')[1])
    setMenuBuilding("All");
    
  }
  

  useEffect(() => {
    // console.log("new_village_list");
    // console.log(village);
        
          
  },[])
  
  return (
      <div className="village-menu-list">
        {
            all_province_list.filter(l=>l.Province == menu_province).map((item,index) =>{        
                return(
                  item.Village.map((v)=>{
                    /* json Village
                      "Village": [
                          "Village1|เปิ่งเคลิ่ง",
                          "Village2|ห้องเรียนสาขา",
                          "Village3|บ้านผู้ใหญ่"
                        ]
                    */
                    return(
                      <div key={index} className='village-menu-list-item'
                        // onClick={() => setMenuVillage(prev => prev === v.split('|')[1] ? "All" : v.split('|')[1])}>
                        onClick={()=>resetMenu(v)}>
                        <img className={menu_village === v.split('|')[1] ? "active" : ""} src={assets.village} alt="" />
                        <p>{v.split('|')[0]} ({v.split('|')[1]})</p>
                      </div>
                    )
                  })
                )  
            })
        
        }

      </div>
    )

}

export default VillageMenuBar