import React, { createRef, Component } from 'react';
import './App.css';
import Navbar from './sections/Navbar';
import { Sticky, Icon } from 'semantic-ui-react';
import Home from './sections/Home';
import About from './sections/About';
import Competitions from './sections/Competitions';
import Schedule from './sections/Schedule';
import Contact from './sections/Contact';

class App extends Component {
  contextRef = createRef();

  render() {
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <Navbar style/>
        </Sticky>
        <Home />
        <About />
        <Competitions />
        <Schedule />
        <Contact />

        {/* <!-- Footer --> */}
        <footer class="text-center">
          <div class="container" style={{'color': 'white'}}>
            Created and designed by Alice Yang. <br />
            <a href='https://www.linkedin.com/in/alice-yang-7673b5130/' target='_blank'>
              <Icon name='linkedin' color='blue' size='large' />
            </a>
            <a href='https://github.com/Picsesalg' target='_blank'>
              <Icon name='github' color='grey' size='large' />
            </a>
          </div>
        </footer>

        {/* </body> */}
        {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script src="/__/firebase/7.15.0/firebase-app.js"></script>

        {/* <!-- TODO: Add SDKs for Firebase products that you want to use */}
        {/* https://firebase.google.com/docs/web/setup#available-libraries --> */}
        <script src="/__/firebase/7.15.0/firebase-analytics.js"></script>

        {/* <!-- Initialize Firebase --> */}
        <script src="/__/firebase/init.js"></script>
      </div>
    )
  }
}

export default App;