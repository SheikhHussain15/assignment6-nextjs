import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
   
        <div className="header">
            <ul className="header-button">
                <li><Image className="Logo" src="/image/Group 11.png" alt="Logo" width="70" height="44" /></li>
                <li className="main-btn">Main</li>
                <li>GALLERY</li>
                <li>PROJECTS</li>
                <li>CERTIFICATIONS</li>
                <li>CONTACTS</li>
            </ul>
          
        </div>
   
    );
}