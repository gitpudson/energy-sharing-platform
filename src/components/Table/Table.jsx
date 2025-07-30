import React,{useContext,useState,useEffect} from 'react'
import './Table.css'
import { assets } from '../../assets/assets'
import DataTable from 'react-data-table-component'
import { AppContext } from '../../Context/AppContext';

//https://www.youtube.com/watch?v=QwQAQat_uT8  => Datatable in React JS | React Data Table with react-data-table-component
//npm i react-data-table-component

const Table = ({setToggle}) => {
       const { input_data_list,menu_System } = useContext(AppContext);

       const [records,setRecords] = useState([]);

        const customStyles ={
                    headRow:{
                    style:{
                        backgroundColor:'blue',
                        color:'white',
                    }
                    },
                    headCells:{
                    style:{
                        fontSize:'16px',
                        fontWeight:'600',
                        textTransform:'uppercase',
                        justifyContent:'center',
                        marginRight:"12px"
                    }
                    },
                    cells:{
                    style:{
                        fontSize:'15px',
                        justifyContent:'center',
                        marginRight:"6px"
                    }
                    }
  };


    const column = [
        {
            name:"Time",
            selector:row=>new Date(row.Time).toString().split("GMT")[0].trim(),
            width: "220px",
            sortable: true,
            omit: false, // Hide Column
        },
        {
            name:"Vsolar",
            selector:row=>row.Vsolar,
            width: "120px",
            // grow: 0,
            sortable: true,
        },
        {
            name:"Isolar",
            selector:row=>row.Isolar,
            width: "120px",
            sortable: true,
        },
        {
            name:"Vbatt",
            selector:row=>row.Vbatt,
            width: "120px",
            sortable: true,
        },
        {
            name:"Ibatt",
            selector:row=>row.Ibatt,
            sortable: true,
        },
        {
            name:"Iload",
            selector:row=>row.Iload,
            sortable: true,
        },


    ]

    useEffect(()=>{
        input_data_list.filter(f=>f.System === menu_System).map((item) =>(
            setRecords(item.Data)
            // console.log(item.Data)
            
        )) 
    
    },[])


  return (
    
      <> 
            <div className='table-container'>
                <div className='image'>
                    <img  src={assets.chart} alt="" onClick={()=>setToggle("chart")}/>
                </div>
                <br />
                <div className='table'>                     
                    <DataTable
                    title={`Input Data From Energy Sharing Device ${menu_System}`}
                     columns={column}
                     noDataComponent="There are no records to display"
                     data={records.sort((a, b) =>new Date(b.Time) - new Date(a.Time))}
                     customStyles={customStyles}
                    pagination
                    selectableRows={false}  //Hide Checkox
                    >
                    
                    </DataTable>
                    
                </div> 
                
            </div>   
      </>
  )
}

export default Table