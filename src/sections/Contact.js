import React, { Component } from 'react';
import { Header, Grid, Form, Input, TextArea, Button } from 'semantic-ui-react';

class Contact extends Component {
    render() {
        return (
            <section id='contact'>
                <Header as='h1' textAlign='center'>
                    <Header.Content>Contact Us</Header.Content>
                </Header>
                <Grid columns='equal'>
                    <Grid.Column>
                        <h3 className='center'>
                            Send us an Email!
                        </h3>
                        <Form>
                            <Form.Field
                                id='form-input-control-name'
                                control={Input}
                                label='Name'
                                placeholder='Name'
                            />
                            <Form.Field
                                id='form-input-control-error-email'
                                control={Input}
                                label='Email'
                                placeholder='jsmith1@jhu.edu'
                            />
                            <Form.Field
                                 id='form-textarea-control-opinion'
                                 control={TextArea}
                                 label='Message'
                                 placeholder='Type your message to us here...'
                            />
                            <Form.Field
                                id='form-button-control-public'
                                control={Button}
                                content='Send'
                            />
                        </Form>
                    </Grid.Column>
                </Grid>
            </section>
        )
    }
}

export default Contact;