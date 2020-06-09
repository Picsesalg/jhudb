import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: 'home'
        };
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        let strings = {
            jhudb: 'Johns Hopkins Dragon Boat Club',
            about: 'About Us',
            comps: 'Competitions',
            times: 'Schedule',
            contact: 'Contact Us'
        };

        return (
            <Menu inverted size='large' attached>
                <a href='#home'>
                    <Menu.Item
                        name={strings.jhudb}
                        active={this.state.activeItem === strings.jhudb}
                        onClick={this.handleItemClick}
                    />
                </a>
                <Menu.Menu position='right'>
                    <a href='#about'>
                        <Menu.Item
                            name={strings.about}
                            active={this.state.activeItem === strings.about}
                            onClick={this.handleItemClick}
                        />
                    </a>
                    <a href='#competitions'>
                        <Menu.Item
                            name={strings.comps}
                            active={this.state.activeItem === strings.comps}
                            onClick={this.handleItemClick}
                        />
                    </a>
                    <a href='#schedule'>
                        <Menu.Item
                            name={strings.times}
                            active={this.state.activeItem === strings.times}
                            onClick={this.handleItemClick}
                        />
                    </a>
                    <a href='#contact'>
                        <Menu.Item
                            name={strings.contact}
                            active={this.state.activeItem === strings.contact}
                            onClick={this.handleItemClick}
                        />
                    </a>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Navbar;