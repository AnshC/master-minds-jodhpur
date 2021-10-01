import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt as Register, faHome as Home, faInfoCircle as About } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Navigation(){
    useEffect(()=>{
        const burger = document.querySelector('.burger');
        const links = document.querySelector('.links');
        const link = document.querySelectorAll('.link');
        const nav = document.querySelector('.navigation')
        burger.addEventListener('click', () => {
            links.classList.toggle('nav-active')
            burger.classList.toggle('burger-animation')
            nav.classList.toggle('navigation-active')
        });
        for (var i = 0; i < link.length; i++) {
            link[i].addEventListener('click', ()=>{
                links.classList.toggle('nav-active')
                burger.classList.toggle('burger-animation')
            })
        }
    })
    return(
        <div className="navigation">
            <img src="/img/mmj-r.png" alt="MMJ Logo" />
            <div className="burger">
                <div className="line" id="line1"></div>
                <div className="line" id="line2"></div>
                <div className="line" id="line3"></div>
            </div>            
            <ul className="links">
                <li className="link">
                    <Link to="/" className="ReactLink">
                        <FontAwesomeIcon className="icon" icon={Home}/> Home
                    </Link>
                </li>
                <li className="link">
                    <Link to="/about" className="ReactLink">
                        <FontAwesomeIcon icon={About} /> About
                    </Link></li>
                <li className="link">
                    <a href="https://forms.gle/RnSPmEKbAppMhnuj7" className="ReactLink" id="special">
                        <FontAwesomeIcon className="icon" icon={Register} /> Register
                    </a>
                </li>
            </ul>
        </div>
    )
}