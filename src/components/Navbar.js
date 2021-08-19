import React from 'react';
import '../styles/navbar.css';
import { IconContext } from 'react-icons';
import {AiOutlineHome} from 'react-icons/ai';
import {BiPaperPlane} from 'react-icons/bi';
import {ImCompass2} from 'react-icons/im';
import {AiOutlineHeart} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {GrLogout} from 'react-icons/gr';
import {useAuth} from '../AuthProvider.js'

function Navbar(){
    const {logout} = useAuth()
    return(
        <div id="navbar">
            <div><h1 id="home-btn">My-Gram</h1></div>

           
            <ul> 
                <IconContext.Provider value={{ color: 'black',size: 22 }}>
                <li><AiOutlineHome/></li>
                <li><BiPaperPlane/></li>
                <li><ImCompass2/></li>
                <li><AiOutlineHeart/></li>
                <li><CgProfile/></li>
                <li><GrLogout onClick={logout}/></li>
                </IconContext.Provider>
                </ul>
                
        </div>
)
}

export default Navbar;