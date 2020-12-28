import React, { Component } from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import hopkinsGroups from '../images/hopkinsGroups.ico';

class Contact extends Component {
    render() {
        return (
            <section id='contact'>
                <Header as='h1' textAlign='center'>
                    <Header.Content>Contact Us</Header.Content>
                </Header>
                <div style={{ 'textAlign': 'center' }}>
                    <div>
                        <Icon name='mail' size='big' color='grey' />
                                jhudragonboat@gmail.com
                            </div>
                    <br />
                    <div>
                        <a href='https://www.facebook.com/JHUDragonBoat/' target='_blank' style={{ 'color': 'black' }}>
                            <Icon name='facebook' size='big' color='blue' />
                                    @JHUDragonBoat
                                </a>
                    </div>
                    <br />
                    <div>
                        <a href='https://www.instagram.com/jhudragonboat/' target='_blank' style={{ 'color': 'black' }}>
                            <Icon name='instagram' size='big' color='pink' />
                                    @jhudragonboat
                                </a>
                    </div>
                    <br />
                    <div>
                        <a href='https://www.youtube.com/channel/UCl49mpgrkBll2pvQPBDHRZQ' target='_blank' style={{ 'color': 'black' }}>
                            <Icon name='youtube' size='big' color='red' />
                                    JHU Dragon Boat Club
                                </a>
                    </div>
                    <br />
                    <div>
                        <a href='https://jhu.campusgroups.com/student_community?club_id=31846' target='_blank' style={{ 'color': 'black' }}>
                            <Image src={hopkinsGroups} avatar />
                            <span>Campus Groups</span>
                        </a>
                    </div>
                </div>

            </section>
        )
    }
}

export default Contact;