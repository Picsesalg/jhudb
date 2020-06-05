import React, { createRef, Component } from 'react';
import './App.css';
import Navbar from './sections/Navbar';
import { Sticky } from 'semantic-ui-react';
import Home from './sections/Home';
import About from './sections/About';
import Competitions from './sections/Competitions';
import Schedule from './sections/Schedule';
import Contact from './sections/Contact';

class App extends Component {
  constructor() {
    super();
    var contextRef = createRef();
  }

  render() {
    return (
      <div>
        <Sticky context={this.contextRef}>
          <Navbar />
        </Sticky>
        <Home />
        <About />
        <Competitions />
        <Schedule />
        <Contact />

        {/* <!-- Footer --> */}
        <footer class="text-center">
          <div class="container">
            <ul class="list-inline">
              <li>
                <a href="#"><i class="fa fa-facebook circle-icon" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-google-plus circle-icon" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter circle-icon" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-linkedin circle-icon" aria-hidden="true"></i></a>
              </li>
            </ul>
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