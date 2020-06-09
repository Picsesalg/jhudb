import React from 'react';
import { Header } from 'semantic-ui-react';

export default function Schedule() {
    let h4_style = {
        'paddingLeft': '20vmin', 
        'paddingRight': '20vmin',
        'textAlign': 'center',
        'fontWeight': 'normal',
    }
    return (
        <section id='schedule'>
            <Header as='h1' textAlign='center'>
                <Header.Content>Schedule</Header.Content>
            </Header>
            <h4 style={h4_style}>
                Practices are held in conjunction with 
                the <a href='https://www.baltimoredragonboatclub.com/' target="_blank">
                     Baltimore Dragon Boat Club
                </a> (BDBC). The Johns Hopkins Dragon Boat Club will faciliate transportation to 
                and from the Inner Harbor for free for members, and our members also qualify
                for free membership with the Baltimore Dragon Boat Club.
            </h4>
            <h4 style={h4_style}>                
                If interested members are unable to make the times decided
                by the JHU Dragon Boat Club, we strongly recommend participating
                in one or more of the practices run by BDBC. For more information on their
                schedule, please visit their 
                website <a href='https://www.baltimoredragonboatclub.com/calendar/' target="_blank">
                     here
                </a>.
            </h4>
            <h3 className='center' style={{'paddingLeft': '10vmin', 'paddingRight': '10vmin'}}>
                Practice times for FALL 2020 are to be decided.
            </h3>
        </section>
    )
}