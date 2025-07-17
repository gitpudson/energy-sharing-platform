import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AppContext = createContext(null)

const AppContextProvider = (props) => {

    const [province_list, setProvinceList] = useState([]);
    const [village_list, setVillageList] = useState([]);
    const [new_village_list, setNewVillageList] = useState([]);

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
            console.log(response.data.data);

            //Distinct Village
            var arr = [];
            for (let index = 0; index < response.data.data.length; index++) {
                const element = response.data.data[index];
                arr.push(element.Province + "|" + element.VillageName + "|" + element.VillageNickname) 
            }

            const distinctArray = [...new Set(arr)];
            setNewVillageList(distinctArray)
            // console.log("arr");
            // console.log(distinctArray);
            }

    }

    useEffect(() => {
         
        async function loadData(){   
            await fetProvince();      
              
        }

        loadData();
       
    },[])

    useEffect(() => {
         
        async function loadData(){   
            await fetVillage();      
              
        }

        loadData();
       
    },[])




    const contextValue = {
        url_api_backend,
        province_list,
        village_list,
        new_village_list
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )


}

export default AppContextProvider