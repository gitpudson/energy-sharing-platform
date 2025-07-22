import React,{useEffect} from 'react'
import './Body.css'
import SystemMenuBar from '../../components/SystemMenuBar/SystemMenuBar'

const Body = () => {

   useEffect(() => {
      console.log("Body");
      // console.log(building);
      // console.log(system_list);
              
   },[])

  return (
    <div className='flex-container-body'>
        <div className='flex-body-menu-system'> {/* Menu System */}
           <SystemMenuBar />
        </div>
        <div className='flex-body-content'> {/* Show Content */}
            
        </div>
    </div>
  )
}

export default Body