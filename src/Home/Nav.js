import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class Nav extends Component {

  render() {
    return (
      <div class='nav'>
        <div>
        <Icon name='sidebar' />
        </div>
        <div>
        <img src='./images/clicktool-main-logo.png'/>
      </div>
        <div>
          <p>Try for $1!</p>
        </div>
      </div>
    )
  }
}

export default Nav;
