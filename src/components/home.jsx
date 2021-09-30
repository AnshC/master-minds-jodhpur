import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay as Date, faGlobeAfrica as Web, faEnvelope as Mail } from '@fortawesome/free-solid-svg-icons'

import { faInstagram as Insta, faFacebook as Facebook } from '@fortawesome/free-brands-svg-icons'

export default function Home(){
    return(
        <div className="home">
            <div className="hero" style={{backgroundImage: 'url(/img/hero.jpg)', backgroundSize: 'cover'}}>
                <div className="content">
                    <img src="/img/mmj-w.png" alt="MMJ Logo" id="brand" />
                    <h2 className="repo"><FontAwesomeIcon icon={Date}/> Coming Soon!</h2>
                    <div className="social">
                        <a href="https://instagram.com/mastermindjodhpur" target="_blank"><FontAwesomeIcon className="icon" icon={Insta} /></a>
                        <a><FontAwesomeIcon className="icon" icon={Facebook} /></a>
                        <a href="https://ourheritage.in"><FontAwesomeIcon className="icon" icon={Web} /></a>
                        <a><FontAwesomeIcon className="icon" icon={Mail} /></a>
                    </div>
                </div>
            </div>
            <div className="main">
                <section className="cards">
                    <h1 className="head">What it Includes</h1>
                    <div className="row">
                        <div className="card">
                            <h1 className="head">Dependencies</h1>
                            <p className="description">It includes:</p>
                            <ul>
                                <li>React Router (react-router-dom)</li>
                                <li>FontAwesome for React</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h1 className="head">File Structure</h1>
                            <p className="description">It has a simple <code>src</code> structure with a <code>components</code> folder, common page components (Home, About, Navigation, and Footer), and a cleaned up <code>CRA</code> template</p>
                        </div>
                        <div className="card">
                            <h1 className="head">Features</h1>
                            <p className="description">It has a number of features useful for ReactJS web development including:</p>
                            <ul>
                                <li>Routing</li>
                                <li>SVGs</li>
                                <li>Fonts</li>
                                <li>Responsive Navbar</li>
                                <li>Default Page is Mobile Responsive</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}