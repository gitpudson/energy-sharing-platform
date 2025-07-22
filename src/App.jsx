import React,{ useEffect,useContext } from 'react'
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes,Navigate } from 'react-router-dom'
import MainPage from "./pages/Main/MainPage"
import { AppContext } from "./Context/AppContext";
import Home from './pages/Home/Home';


function App() {
  const { menu_province,url_parameter } = useContext(AppContext);
  // var url_parameter = `/energy-sharing-platform/${menu}`;

  useEffect(() => {
          // console.log("system_list");
          
          
  },[])

  return (
    <div  className='app'> 
      <Navbar />
      <hr />
      {/* <MainPage /> */}
      {
        menu_province !== "" ? <Home /> : <></>
      }
      
      {/* <Routes> */}
        {/* Default route */}
        {/* <Route path="/energy-sharing-platform" element={<Navigate to="/energy-sharing-platform/tak" replace />} /> */}
        {/* <Route path="/energy-sharing-platform" element={<Navigate to={url_parameter} replace />} /> */}

        {/* Other routes */}
        {/* <Route path='/energy-sharing-platform/tak' element={<Main province="Tak"/>} />
        <Route path='/energy-sharing-platform/chiangmai' element={<Main province="Chiang Mai"/>} />      */}

        {/* <Route path={url_parameter} element={<Main province={menu}/>} /> */}

        {/* <Route path='/energy-sharing-platform/' element={<Home />} /> */}
      {/* </Routes> */}

    </div>
  )
}

export default App
