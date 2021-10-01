import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay as Date, faGlobeAfrica as Web, faEnvelope as Mail, faPencilAlt as Register } from '@fortawesome/free-solid-svg-icons'
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
                                <p>This will lead you to a registeration form.</p>
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
                                <p>Fill up the form to complete the registeration.</p>
                                <p style={{fontStyle: 'italic'}}>Data collected is purely for registeration purposes only.</p>
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
                        
                        <p>Master Mind Jodhpur is an intra-district mathematics competition conducted by the Rotract Roundtown Club of Jodhpur. These exams will be conducted for Grades 9 to 12, in both Hindi and English Medium. It will cover the whole Jodhpur District.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}