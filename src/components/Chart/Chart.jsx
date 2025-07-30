import React,{useContext,useState} from 'react'
import './Chart.css'
import { Chart as ChartJS,defaults, plugins} from 'chart.js/auto';
import { Bar,Line } from 'react-chartjs-2';
import { AppContext } from '../../Context/AppContext';
import { assets } from '../../assets/assets'
import sourceData from '../../data/sourceData.json'
import revenueData from '../../data/revenueData.json'
import inputData from '../../data/inputData.json'

// defaults.maintainAspectRatio = true;
// defaults.responsive = true;

// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.display = 20;
// defaults.plugins.title.display = "black";



const Chart = ({setToggle}) => {

    const { input_data_list,menu_System } = useContext(AppContext);
   

    /* From Json File
    const data={
                labels:inputData.map((data) => new Date(data.Time).toString().split("GMT")[0]),
                
                datasets:[
                    {
                    label:"Psolar",
                    data:inputData.map((data) =>data.Vsolar*data.Isolar),
                    backgroundColor:"#3f7cffff",
                    borderColor:"#3f7cffff",
                    },
                    {
                    label:"Pbatt",
                    data:inputData.map((data) =>data.Vbatt*data.Ibatt),
                    backgroundColor:"#ff3f3fff",
                    borderColor:"#ff3f3fff",
                    },
                    {
                    label:"Pload",
                    data:inputData.map((data) =>data.Vbatt*data.Iload),
                    backgroundColor:"#00c010ff",
                    borderColor:"#00c010ff",
                    },
                ]
                
            };

    */

    // From API    
    
    const data={
                // labels:labels,
                labels:input_data_list.filter(f=>f.System === menu_System).map((l) => {
                    return(
                        l.Data.map((d) =>{
                            return(
                                new Date(d.Time).toString().split("GMT")[0].trim()
                            )
                        })
       
                    )
                })[0], //Return มาเป็น array 1 ค่า คือ index 0
                
                datasets:[
                    {
                    label:"Psolar",
                    // data:datasets.map((data) =>data.Vsolar*data.Isolar),
                    data:input_data_list.filter(f=>f.System === menu_System).map((l) => {
                        return(
                            l.Data.map((d) =>{
                                return(
                                    (d.Vsolar*d.Isolar)
                                //    console.log(d.Vsolar*d.Isolar)
                                    
                                )
                            })
                        )
                    })[0],
                    backgroundColor:"#3f7cffff",
                    borderColor:"#3f7cffff",
                    },
                    {
                    label:"Pbatt",
                    // data:datasets.map((data) =>data.Vbatt*data.Ibatt),
                    data:input_data_list.filter(f=>f.System === menu_System).map((l) => {
                        return(
                            l.Data.map((d) =>{
                                return(
                                    (d.Vbatt*d.Ibatt)
                                //    console.log(d.Vbatt*d.Ibatt)
                                    
                                )
                            })
                        )
                    })[0],
                    backgroundColor:"#ff3f3fff",
                    borderColor:"#ff3f3fff",
                    },
                    {
                    label:"Pload",
                    // data:datasets.map((data) =>data.Vbatt*data.Iload),
                    data:input_data_list.filter(f=>f.System === menu_System).map((l) => {
                        return(
                            l.Data.map((d) =>{
                                return(
                                    (d.Vbatt*d.Iload)
                                )
                            })
                        )
                    })[0],
                    backgroundColor:"#00c010ff",
                    borderColor:"#00c010ff",
                    },
                ]
                
            };
            

    /*
    const new_chart_data_list = input_data_list.filter(f=>f.System === menu_System).map((l) => {
                    return(
                        l.Data.map((data) =>{
                            return(
                                data
                            )
                        })
       
                    )
                })[0]; //Return มาเป็น array 1 ค่า คือ index 0
 
     const data={

                labels:new_chart_data_list.map((data) => new Date(data.Time).toString().split("GMT")[0].trim()),
                
                datasets:[
                    {
                    label:"Psolar",
                    data:new_chart_data_list.map((d) => {
                        return(
                            (d.Vsolar*d.Isolar)                                    
                        )
                    }),
                    backgroundColor:"#3f7cffff",
                    borderColor:"#3f7cffff",
                    },
                    {
                    label:"Pbatt",
                    // data:datasets.map((data) =>data.Vbatt*data.Ibatt),
                    data:new_chart_data_list.map((d) => {
                         return(
                            (d.Vbatt*d.Ibatt)
                            
                        )
                    }),
                    backgroundColor:"#ff3f3fff",
                    borderColor:"#ff3f3fff",
                    },
                    {
                    label:"Pload",
                    // data:datasets.map((data) =>data.Vbatt*data.Iload),
                    data:new_chart_data_list.map((d) => {
                        return(
                            (d.Vbatt*d.Iload)
                        )
                    }),
                    backgroundColor:"#00c010ff",
                    borderColor:"#00c010ff",
                    },
                ]
                
            };
*/

    const options = {
                        responsive:true,
                        maintainAspectRatio:true, // Important for custom dimensions
                    };



  return (
     
    <> 
        <div className='chart-container'>
            <div className='image'>
                <img  src={assets.table} alt="" onClick={()=>setToggle("table")}/>
            </div>
            <br />
            <div className='chart' style={{ width: '1000px', height: '700px' }}>                     
                <Line data={data} options={options} />
            </div> 
            
        </div>   
    </>
  )
}

export default Chart