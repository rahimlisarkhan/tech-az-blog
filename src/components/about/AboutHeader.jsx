import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { FaLinkedin,FaInstagramSquare,FaTwitterSquare, FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import headerImg from '../../img/Artboard 1.png'


const AboutHeader = () =>{
    const [editmode, setEditmode] = useState(false)
    return(
        <header  className="about" >
            <div className='about__desc' >
            <h1>hər şey <span>tech.az</span> ilə bağlıdır </h1>
            <p> yerli başlanğıc və texnoloji ekosisteminə beynəlxalq təcrübə və təcrübə gətirən bir texnoloji media və hadisə platformaları</p>
            <a href=' https://www.facebook.com/www.tech.az'> <span>daha ətraflı</span> <IoIosArrowForward className='iconArrow'/> </a>
            </div>

            {!editmode?
            <div className='about__icons'>
                <AiOutlineClose className='closeBtnSosial' onClick={()=>setEditmode(!editmode)}/>
                <a href=' https://www.facebook.com/techazmedia' target='blank'> <FaFacebookSquare className='icon'/></a>
                <a href='https://www.linkedin.com/company/tech-az/' target='blank'>  <FaLinkedin className='icon'/></a>
                <a href='https://twitter.com/Techaz5' target='blank'>  <FaTwitterSquare className='icon'/></a>
                <a href='https://www.instagram.com/techazmedia/' target='blank'>  <FaInstagramSquare className='icon'/></a>
                <a href='https://www.youtube.com/channel/UCp5hYFUzfP3_hw29S8dGlQg' target='blank'>  <FaYoutubeSquare className='icon'/></a>
            
            </div> :''}
            <img src={headerImg} alt='Slogan' />
            
            
        </header>
    )
}


export default AboutHeader