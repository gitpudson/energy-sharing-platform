import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext';
import './Navbar.css'

const Navbar = () => {
   
    const { isLoading,all_province_list,setMenuProvince,menu_province,setMenuVillage,setMenuBuilding,menu_System } = useContext(AppContext);

    const resetMenu =  () => {
        setMenuVillage("All");
        setMenuBuilding("All");

    }

    
    return (
            <div className='navbar'>
                <Link to='/energy-sharing-platform/'><img src={assets.logo} alt="" className="logo" onClick={resetMenu}/></Link>
                {(isLoading && menu_System === "All") && <div><img className='loading' src="./spinner.svg" alt="" /></div>}
                {(all_province_list.length !== 0) &&
                    <div className="navbar-menu">
                        {all_province_list.map((item,index) =>{
                            // var param = "/energy-sharing-platform/"+ item.Province.toLowerCase().replace(" ","");
                            var param = "/energy-sharing-platform/";
                            // var province = item.Province.toLowerCase().replace(" ","");
                            var province = item.Province;
                            return(
                                // <div key={index} onClick={()=>setMenuVillage("All")}>
                                <div key={index} onClick={resetMenu}>
                                    <Link to={param} onClick={()=>setMenuProvince(province)} className={menu_province===province?"active":""}>{item.Province}</Link>
                                </div>
                            )
                        })}
                    </div>
                }
                <div className="navbar-right">
                    
                    
                </div>

            </div>
    )
    


}

export default Navbar