import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets,menu_list } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext';
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("tak");
    const { province_list } = useContext(AppContext);


    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>

            <div className="navbar-menu">
                {province_list.map((item,index) =>{
                    var param = "/"+ item.Province.toLowerCase().replace(" ","");
                    var province = item.Province.toLowerCase().replace(" ","");
                    return(
                        <div key={index}>
                            <Link to={param} onClick={()=>setMenu(province)} className={menu===province?"active":""}>{item.Province}</Link>
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