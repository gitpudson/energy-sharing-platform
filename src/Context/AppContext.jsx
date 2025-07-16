import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AppContext = createContext(null)

const AppContextProvider = (props) => {

    const [province_list, setProvinceList] = useState([]);

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
            console.log(response.data.data);
        }

    }

    useEffect(() => {
         
        async function loadData(){   
            await fetProvince();      
              
        }

        loadData();
       
    },[])

    const contextValue = {
        url_api_backend,
        province_list,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )


}

export default AppContextProvider