import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub as Github} from '@fortawesome/free-brands-svg-icons'
export default function Home(){
    return(
        <div className="home">
            <div className="hero">
                <div className="content">
                    <h1 className="head">Theme JSX</h1>
                    <h2 className="info">A React template by <a href="https://anshc.co" target="blank">Ansh C</a></h2>
                    <h3 className="description">Run <code>npm install</code> to get all the packages used by this theme installed.</h3>  
                    <a href="https://github.com/AnshC/theme-jsx" className="repo"><FontAwesomeIcon className="icon" icon={Github}/> Clone from repository</a>
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