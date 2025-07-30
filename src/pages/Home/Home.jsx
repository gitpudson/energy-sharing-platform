import React,{ useContext,useEffect } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Body from '../Body/Body'
import { AppContext } from '../../Context/AppContext'

const Home = () => {
  const { menu_province,menu_Building } = useContext(AppContext);

  useEffect(() => {
    // console.log("menu_province");
    // console.log(menu_province);  
              
  },[])

  return (
    <div className='flex-container-home'>
        <div className='flex-home-sidebar'> {/* Side Bar */}
          {
            menu_province !== "" ? <Sidebar /> : <></>
          }
        </div>
        <div className='flex-home-body'> {/* Body */}
          {
            menu_Building !== "All" ? <Body /> : <></>
          }
            
        </div>
    </div>
  )
}

export default Home