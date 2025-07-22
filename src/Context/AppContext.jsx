import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
    
    const [menu_province, setMenuProvince] = useState("");
    const [menu_village, setMenuVillage] = useState("All");
    const [menu_Building, setMenuBuilding] = useState("All");
    const [menu_System, setMenuSystem] = useState("All");

    const url_parameter = `/energy-sharing-platform/${menu_province}`;
    const [province_list, setProvinceList] = useState([]);
    const [all_province_list, setAllProvinceList] = useState([]);
    const [village_list, setVillageList] = useState([]);
    const [new_village_list, setNewVillageList] = useState([]);
    const [system_list, setSystemList] = useState([]);

    const url_api_backend = "https://script.google.com/macros/s/AKfycbwKNw5AC64naHtP8y6DP5u96LnW8Hfj0ljck4zfqqsOGdqlysbYfLjGX_aESjTzv5qc/exec";

    const fetProvince = async () => {
        const post = {
            function: 'getProvince',
            payload: {

            }
        }

        const response = await axios.post(`${url_api_backend}`, post,
            {
                headers: {
                    'Content-Type': 'text/plain',
                },
                mode: "no-cors"
            }
        )

        if (response.data.success) {
            setProvinceList(response.data.data);
            // console.log(response.data.data);
        }

    }

    const fetAllProvince = async () => {
        const post = {
            function: 'getAllProvinceFile',
            payload: {

            }
        }

        const response = await axios.post(`${url_api_backend}`, post,
            {
                headers: {
                    'Content-Type': 'text/plain',
                },
                mode: "no-cors"
            }
        )

        if (response.data.success) {
            setAllProvinceList(response.data.data);
            // console.log(response.data.data);
        }

    }

    const fetVillage = async () => {
        const post = {
            function: 'getVillage',
            payload: {

            }
        }

        const response = await axios.post(`${url_api_backend}`, post,
            {
                headers: {
                    'Content-Type': 'text/plain',
                },
                mode: "no-cors"
            }
        )

        if (response.data.success) {
            setVillageList(response.data.data);
            // console.log(response.data.data);

            //Distinct Village
            var arr = [];
            for (let index = 0; index < response.data.data.length; index++) {
                const element = response.data.data[index];
                arr.push(element.Province + "|" + element.VillageName + "|" + element.VillageNickname) 
            }

            const distinctArray = [...new Set(arr)];
            setNewVillageList(distinctArray)
            // console.log("arr");
            console.log(distinctArray);

            /*
            //Get System Of Building
            setSystemList([]);
            var arr_systemlist = [];
            for (let index = 0; index < response.data.data.length; index++) {
                arr =[];
                const element = response.data.data[index];
                arr.push(element.BuildingNickname);
                
                for (let i = 0; i < element.NumberOfSystems; i++) {
                    arr.push("system" + (i+1));
                }

                
                
                arr_systemlist.push(arr)
                
            }

            console.log(arr_systemlist);
            
           setSystemList(arr_systemlist);
           */
        }

    }

    const fetSystem = async (BuildingNickname) => {
        const post = {
            function: 'getVillage',
            payload: {

            }
        }

        const response = await axios.post(`${url_api_backend}`, post,
            {
                headers: {
                    'Content-Type': 'text/plain',
                },
                mode: "no-cors"
            }
        )

        if (response.data.success) {
            
            //Get System Of Building
            setSystemList([]);
            var arr_systemlist = [];
            var arr = [];
            
            for (let index = 0; index < response.data.data.length; index++) {
                arr =[];
                const element = response.data.data[index];

                if (element.BuildingNickname === BuildingNickname) {
                     arr.push(element.BuildingNickname);
                
                    for (let i = 0; i < element.NumberOfSystems; i++) {
                        arr.push("system" + (i+1));
                    }               
                    
                    arr_systemlist.push(arr)
                    // console.log(arr_systemlist);
                }

               
            }

            console.log(arr_systemlist);
            
           setSystemList(arr_systemlist);
        }

    }


    useEffect(() => {
         
        async function loadData(){   
            // await fetProvince();
            await fetAllProvince();                  
              
        }

        loadData();
       
    },[])


    const contextValue = {
        url_api_backend,
        setMenuProvince,
        menu_province,
        menu_village, 
        setMenuVillage,
        setMenuBuilding,
        menu_Building,
        setMenuSystem,
        menu_System,
        url_parameter,
        province_list,
        village_list,
        new_village_list,       
        system_list,
        fetSystem,
        all_province_list,

    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )


}

export default AppContextProvider