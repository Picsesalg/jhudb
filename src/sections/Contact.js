import React, { Component } from 'react';
import { Header, Grid, Form, TextArea, Button, Icon, Image } from 'semantic-ui-react';
import hopkinsGroups from '../images/hopkinsGroups.ico';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const templateId = 'template_ftx6id9T';

        this.sendFeedback(templateId, 
            {message_html: this.state.message, 
                from_name: this.state.name, 
                reply_to: this.state.email})
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            alert('Your message has been sent successfully');
            window.location.reload();
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => alert('Oh well, you failed. Here some thoughts on the error that occured:', err));
      }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }

    render() {
        let name, email, message;
        return (
            <section id='contact'>
                <Header as='h1' textAlign='center' style={{'paddingBottom': '30px'}}>
                    <Header.Content>Contact Us</Header.Content>
                </Header>
                <Grid columns='equal' divided>
                    <Grid.Column>
                        <h3 className='center'>
                            Send us an Email!
                        </h3>
                        <Form onSubmit={this.handleSubmit} style={{'paddingRight': '15px'}}>
                            <Form.Input
                                label='Name'
                                name='name'
                                placeholder='Name'
                                value={name}
                                onChange={this.handleChange}
                                required
                            />
                            <Form.Input
                                label='Email'
                                name='email'
                                placeholder='jsmith1@jhu.edu'
                                value={email}
                                onChange={this.handleChange}
                                required
                            />
                            <Form.Input
                                control={TextArea}
                                label='Message'
                                name='message'
                                placeholder='Type your message to us here...'
                                value={message}
                                onChange={this.handleChange}
                                required
                            />
                            <Form.Field
                                id='form-button-control-public'
                                control={Button}
                                content='Send'
                            />
                        </Form>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <h3 className='center'>
                            Or follow us on Social Media!
                        </h3>
                        <div style={{'paddingTop': '20px'}}>
                            <div>
                                <Icon name='mail' size='big' color='grey' />
                                jhudragonboat@gmail.com
                            </div>
                            <br />
                            <div>
                                <a href='https://www.facebook.com/JHUDragonBoat/' target='_blank' style={{'color': 'black'}}>
                                    <Icon name='facebook' size='big' color='blue' />
                                    @JHUDragonBoat
                                </a>
                            </div>
                            <br />
                            <div>
                                <a href='https://www.instagram.com/jhudragonboat/' target='_blank' style={{'color': 'black'}}>
                                    <Icon name='instagram' size='big' color='pink' />
                                    @jhudragonboat
                                </a>
                            </div>
                            <br />
                            <div>
                                <a href='https://www.youtube.com/channel/UCl49mpgrkBll2pvQPBDHRZQ' target='_blank' style={{'color': 'black'}}>
                                    <Icon name='youtube' size='big' color='red' />
                                    JHU Dragon Boat Club
                                </a>
                            </div>
                            <br />
                            <div>
                                <a href='https://johnshopkins.campuslabs.com/engage/organization/jhudragonboat' target='_blank' style={{'color': 'black'}}>
                                    <Image src={hopkinsGroups} avatar />
                                    <span>Hopkins Groups</span>
                                </a>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid>
            </section>
        )
    }
}

export default Contact;