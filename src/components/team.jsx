import { Cards, Card } from 'react-cool-cards'
import { people } from '../data/team.json'
export default function Team() {
    const settings = {
        width: '240px',
        height: '300px',
        maxHeight: '300px',
        maxWidth: '100%',
        margin: '20px',
        style: 'custom'
    }
    return (
        <div className="team">
            <div className="hero" style={{backgroundImage: 'url(/img/team/hero.jpg)'}}>
                <div className="content">
                    <h1>Team MMJ</h1>
                    <p>Check out the team behind MMJ!</p>
                </div>
            </div>
            <div className="main-5">
                <Cards common={settings}>
                    {
                        people.map((person)=>{
                            return (
                                <Card>
                                    <div className="wrapper">
                                        <div className="circle" style={{backgroundImage: `url(/img/team/${person.img})`}}>
                                        </div>
                                        <div className="content">
                                        <div className="name">
                                            <h1>{person.nameline1}</h1>
                                            <h1>{person.nameline2}</h1>
                                        </div>
                                        <p>{person.about}</p>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </Cards>
            </div>
        </div>
    )
}