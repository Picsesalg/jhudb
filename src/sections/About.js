import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import philly from '../images/philadelphia2019.jpg';
import '../App.css';

export default function About() {
    let style_h3 = {
        'font-weight': 'normal',
    };

    return (
        <section id="about">
            <Header as='h1' textAlign='center'>
                <Header.Content>About Us</Header.Content>
            </Header>
            <h3 className='not-bold' style={{'paddingLeft': '10vmin', 'paddingRight': '10vmin'}}>
                Dragon boat racing has been a traditional Chinese 
                paddled watercraft activity for over 2000 years and 
                began as a modern international sport in Hong Kong in 1976.
                It has been historically held on Dragon Boat Festival (which falls
                usually in May or June), to honour the death of the famed 
                ancient poet Qu Yuan.
            </h3>
            <h3 className='not-bold' style={{'paddingLeft': '10vmin', 'paddingRight': '10vmin'}}>
                JHU Dragon Boat allows students to participate in a water sport 
                that dates to ancient China right here in the Inner Harbor of our 
                beautiful Charm City. We are one of the <b>first</b> collegiate dragon boat 
                clubs on the East Coast. Dragon boat is an activity that incorporates 
                strong values such as leadership, teamwork, and dedication. As a member 
                of this club, you will have the opportunity to travel to races and festivals 
                up and down the East Coast and meet paddlers from well-established dragon boat teams.
            </h3>
            <Image src={philly} size='big' centered />
        </section>
    )
}