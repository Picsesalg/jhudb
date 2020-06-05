import React from 'react';
import logo from '../images/logo.png';
import { Image } from 'semantic-ui-react';

export default function Home() {
    return (
        <section id="home">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12">
                <Image src={logo} size='medium' circular centered />
              </div>
            </div>
          </div>
        </section>
    )
}