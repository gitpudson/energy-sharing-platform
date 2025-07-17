import Navbar from "./components/Navbar/Navbar"
import { Route, Routes,Navigate  } from 'react-router-dom'
import Main from "./pages/Main/Main"


function App() {

  return (
    <>
      <Navbar />
      <hr />

      <Routes>
        {/* Default route */}
        <Route path="/energy-sharing-platform" element={<Navigate to="/energy-sharing-platform/tak" replace />} />

        {/* Other routes */}
        <Route path='/energy-sharing-platform/tak' element={<Main province="Tak"/>} />
        <Route path='/energy-sharing-platform/chiangmai' element={<Main province="Chiang Mai"/>} />     
      </Routes>

    </>
  )
}

export default App
