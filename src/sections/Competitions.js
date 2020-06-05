import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import philly from '../images/philadelphia2018.jpg';
import dc from '../images/dc2019.jpg';
import zunyi from '../images/zunyi2019.JPG';

export default function Competitions() {
    return (
        <section id='competitions'>
            <Header as='h1' textAlign='center'>
                <Header.Content>Competitions</Header.Content>
            </Header>
            <h3 className='not-bold'>
                Each academic year, JHU Dragon Boat attends 2 races 
                in the areas surrounding Baltimore. The first of which 
                is held in the Fall semester in Philadelphia, and the second
                of which is held at the end of the Spring semester. Over the 
                years, our hard work meant that we have managed to gain quite 
                a few awards from the various competitions! In 2019, JHU Dragon 
                Boat has also participated in an international
                competition held in China, hosted by the International Collegiate
                Dragon Boat Federation.
            </h3>
            <Grid columns='equal' divided>
                <Grid.Row>
                    <Grid.Column>
                        <h3 className='center'>Philadelphia International Dragon Boat Festival</h3>
                        <p>2019: A Minor</p>
                        <p>2018: Bronze C Major</p>
                        <p>2017: Silver C Major</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3 className='center'>Washington DC Dragon Boat Festival</h3>
                        <p>2019: Silver 250m B Major</p>
                        <p>2017: Gold 500m B Major, Silver 250m B Major</p>
                        <p>2016: Gold 500m A Minor</p>
                        <p>2015: Silver 500m C Major</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h3 className='center'>ICDBF Championships</h3>
                        <p>2019: 3rd 200m Mixed Minor, 2nd 500m Mixed Minor</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={philly} centered />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={dc} centered />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={zunyi} centered />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    )
}