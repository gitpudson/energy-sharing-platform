import React,{useEffect,useContext, useState} from 'react'
import './Body.css'
import SystemMenuBar from '../../components/SystemMenuBar/SystemMenuBar'
import { AppContext } from '../../Context/AppContext';
import Chart from '../../components/Chart/Chart';
import Table from '../../components/Table/Table';


const Body = () => {

   const { isLoading,input_data_list } = useContext(AppContext);
   const [toggle,setToggle] = useState("chart");
   

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
         
         <center>
         <div className='flex-body-content'> {/* Show Content */}
           {(isLoading) && <center><div><img className='img-loading' src="./spinner.svg" alt="" /></div></center>}
           {
            input_data_list.length !== 0 && 
            (<div>
               {toggle === "chart" && <Chart setToggle={setToggle}/>}
               {toggle === "table" && <Table setToggle={setToggle}/> }               
            </div>)
           }
         </div>
      </center>

    </div>
  )
}

export default Body