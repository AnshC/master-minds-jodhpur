import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCalendarDay as Date, 
    faGlobeAfrica as Web, 
    faEnvelope as Mail, 
    faPencilAlt as Register, 
    faGift as Gift,
    faCheckCircle as Eligible,
    faUserFriends as Team,
    faInfoCircle as About,
    faPhone
} from '@fortawesome/free-solid-svg-icons'
import { Cards, Card } from 'react-cool-cards'
import { faInstagram as Insta, faFacebook as Facebook } from '@fortawesome/free-brands-svg-icons'

export default function Home(){
    const cardStyles = {
        width: '300px',
        maxWidth: '600px',
        height: '220px',
        maxHeight: '230px',
        shadow: true,
        style: 'custom',
        theme : {
            color: 'red',
            type: 'rounded',
            fill: 'gradient',
            animation: 'grow'
        }
    }
    const redCard = {
        width: '250px',
        maxWidth: '450px',
        height: '200px',
        maxHeight: '200px',
        margin: '15px',
        style: 'custom',
        theme: {
            animation: ''
        }
    }
    return(
        <div className="home">
            <div className="hero" style={{backgroundImage: 'url(/img/hero.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
                <div className="content">
                    <img src="/img/mmj-w.png" alt="MMJ Logo" id="brand" />
                    <p>Master Mind Jodhpur</p>
                    <p>Intra-District Level Mathematics Competition</p>
                    <h2 className="repo"><FontAwesomeIcon icon={Date}/> Coming Soon!</h2>
                    <div className="social">
                        <a href="https://instagram.com/mastermindjodhpur"><FontAwesomeIcon className="icon" icon={Insta} /></a>
                        <a href="https://m.facebook.com/suncitysociety/"><FontAwesomeIcon className="icon" icon={Facebook} /></a>
                        <a href="https://ourheritage.in"><FontAwesomeIcon className="icon" icon={Web} /></a>
                        <a href="https://mail.google.com"><FontAwesomeIcon className="icon" icon={Mail} /></a>
                    </div>
                </div>
            </div>
            <div className="main">
                <section id="about">
                    <h1>How Do I <span className="red-c">Register?</span></h1>
                    <Cards common={cardStyles}>
                        <Card>
                            <div className="head">
                                <div className="circle">
                                    1
                                </div>
                                <div className="h1">Register</div>
                            </div>
                            <div className="content">
                                <p>Click the button to Register</p>
                                <p>This will lead you to a registration form.</p>
                                <a href="https://forms.gle/RnSPmEKbAppMhnuj7" id="button"><FontAwesomeIcon icon={Register}/> Register Now!</a>
                            </div>
                        </Card>
                        <Card>
                            <div className="head">
                                <div className="circle">
                                    2
                                </div>
                                <div className="h1">Fill the Form</div>
                            </div>
                            <div className="content">
                                <p>Fill up the form to complete the registration.</p>
                                <p style={{fontStyle: 'italic'}}>Data collected is purely for registration purposes only.</p>
                            </div>
                        </Card>
                        <Card>
                            <div className="head">
                                <div className="circle">
                                    3
                                </div>
                                <div className="h1">That's it!</div>
                            </div>
                            <div className="content">
                                <p>In just a few clicks, you're registered and ready for the competition!</p>
                            </div>
                        </Card>    
                    </Cards>
                    <h1>What Is <span className="red-c">MMJ?</span></h1>
                    <div className="row-s">
                        <p>Master Mind Jodhpur is an intra-district mathematics competition brought to you by the Rotaract Roundtown Club of Jodhpur and Process & Concepts. These exams will be conducted for Grades 8 to 11, in both Hindi and English Medium. It will cover the whole Jodhpur District.</p>
                    </div>
                </section>
            </div>
            <div className="info">
                <Cards common={redCard}>
                    <Card>
                        <div className="wrapper">
                            <div className="circle">
                                <FontAwesomeIcon icon={Gift} className="icon"/>
                            </div>
                            <div className="content">
                                <h1>Prizes.</h1>
                                <p>Exciting prizes await you!</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="wrapper">
                            <div className="circle">
                                <FontAwesomeIcon icon={Eligible} className="icon"/>
                            </div>
                            <div className="content">
                                <h1>Eligibility</h1>
                                <ul>
                                    <li>Grades: 8-11</li>
                                    <li>Location: Jodhpur District</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </Cards>
                <Cards common={redCard}>
                    <Card>
                        <Link to="/team" className="no-d">
                            <div className="wrapper">
                                <div className="circle">
                                    <FontAwesomeIcon icon={Team} className="icon" />
                                </div>
                                <div className="content">
                                    <h1>Team MMJ.</h1>
                                    <p>Check out the wonderful team behind MMJ!</p>
                                </div>
                            </div>
                        </Link>
                    </Card>
                    <Card>
                        <Link to="/about" className="no-d">
                            <div className="wrapper">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={About} />
                                </div>
                                <div className="content">
                                    <h1>About MMJ.</h1>
                                    <p>Learn more about this event.</p>
                                </div>
                            </div>
                        </Link>
                    </Card>
                </Cards>
            </div>
            <div className="btyb main">
                <h1>Brought to <span className="blue-c">You By:</span></h1>
                <div className="row">
                    <a href="https://instagram.com/process_concepts">
                        <img src="/img/logos/process_and_concepts.jpg" alt="Process & Concepts Logo" style={{width: '250px'}}/>
                    </a>
                    <a href="https://www.instagram.com/rotaractroundtownjodhpur/">
                        <img src="/img/logos/rotaract.png" alt="Rotaract Roundtown Logo" style={{minHeight: '100px', maxHeight: '100px'}}/>
                    </a>
                </div>
            </div>
            <div className="contact" style={{backgroundImage: "url(/img/hero.jpg)"}}>
                <h1>Queries?</h1>
                <div className="row">
                    <section>
                    <h2>Contact Us!</h2>
                        <a href="tel:8239755000">
                            <FontAwesomeIcon className="icon" id="phone" icon={faPhone}/>
                            +91 9983775559
                        </a>
                        <a href="mailto:mmj@ourheritage.in">
                            <FontAwesomeIcon className="icon" icon={Mail} />
                            mmj@ourheritage.in
                        </a>
                        <div className="social">
                            <a href="https://instagram.com/mastermindjodhpur"><FontAwesomeIcon className="icon" icon={Insta} /></a>
                            <a href="https://m.facebook.com/suncitysociety/"><FontAwesomeIcon className="icon" icon={Facebook} /></a>
                            <a href="https://ourheritage.in"><FontAwesomeIcon className="icon" icon={Web} /></a>
                            <a href="https://mail.google.com"><FontAwesomeIcon className="icon" icon={Mail} /></a>
                        </div>
                    </section>
                    <section>
                        <h2>Talk to Us!</h2>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Message"/>
                        <button>
                            Send
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}