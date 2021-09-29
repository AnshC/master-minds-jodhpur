import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub as Github} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Navigation(){
    useEffect(()=>{
        const burger = document.querySelector('.burger');
        const links = document.querySelector('.links');
        const link = document.querySelectorAll('.link');
        burger.addEventListener('click', () => {
            links.classList.toggle('nav-active')
            burger.classList.toggle('burger-animation')
            for (var x = 0; x < link.length; x++) {
                link[x].classList.toggle('link-active')
            }
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
            <h1 id="brand">Theme JSX</h1>
            <div className="burger">
                <div className="line" id="line1"></div>
                <div className="line" id="line2"></div>
                <div className="line" id="line3"></div>
            </div>            
            <ul className="links">
                <li className="link"><Link to="/" className="ReactLink">Home</Link></li>
                <li className="link"><Link to="/about" className="ReactLink">About</Link></li>
                <li className="link">
                    <a href="https://github.com/AnshC/theme-jsx" className="ReactLink" id="special">
                        <FontAwesomeIcon icon={Github} /> Github
                    </a>
                </li>
            </ul>
        </div>
    )
}