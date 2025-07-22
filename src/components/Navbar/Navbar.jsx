import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext';
import './Navbar.css'

const Navbar = () => {
   
    const { all_province_list,setMenuProvince,menu_province,setMenuVillage } = useContext(AppContext);


    return (
            <div className='navbar'>
                <Link to='/energy-sharing-platform/'><img src={assets.logo} alt="" className="logo" onClick={()=>setMenuVillage("")}/></Link>

                <div className="navbar-menu">
                    {all_province_list.map((item,index) =>{
                        // var param = "/energy-sharing-platform/"+ item.Province.toLowerCase().replace(" ","");
                        var param = "/energy-sharing-platform/";
                        // var province = item.Province.toLowerCase().replace(" ","");
                        var province = item.Province;
                        return(
                            <div key={index} onClick={()=>setMenuVillage("All")}>
                                <Link to={param} onClick={()=>setMenuProvince(province)} className={menu_province===province?"active":""}>{item.Province}</Link>
                            </div>
                        )
                    })}
                </div>

                <div className="navbar-right">
                    
                    
                </div>

            </div>
        )
}

export default Navbar