import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

class Main extends Component {

  render() {
    return (
      <div className='main-content'>

        <p id='clicktool-description'>
          Clicktool is already the most powerful tracking software in the market and it costs only a fraction of what other software does. Join our beta release and get VIP access to new features and early-bird discounts.
        </p>
        <div id='main-content-icons'>
          <div>
            <img id='a-b-testing' src='./images/a-b-testing.png'/>
            <p>No redirect tracking</p>
          </div>
          <div>
            <img id='increase-roi' src='./images/increase-roi.png'/>
            <p>Increase your ROI</p>
          </div>
          <div>
            <img id='ssl-domains' src='./images/ssl-domains.png'/>
            <p>SSL Domains</p>
          </div>
          <div>
            <img id='traffic-data' src='./images/traffic-data.png'/>
            <p>In-depth Traffic Data</p>
          </div>
        </div>
      <Grid id='big-discount-container' >
        <Grid.Row>
          <Grid.Column mobile={6} computer={4}>
              <p id='limited-time'>LIMITED TIME ONLY</p>
          </Grid.Column>
          <Grid.Column mobile={10} computer={4}>
              <p id='early-members'>Big discounts for early members!</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={6} computer={4}>
              <span id='dollar-sign' style={{float:'left'}}>$</span><span id='dollar'>1</span>
              <span id='first-month'>first month</span>
          </Grid.Column>
          <Grid.Column mobile={10} computer={4}>
            <p id='beta-users-only'>$49.95/Month after 30 Days for <span style={{color: '#FECA40', fontWeight: 'bold'}}>BETA USERS ONLY</span></p>
            <p id='full-feature'>Full features included</p>
            <p id='clicks-per-month'>3 million clicks per month</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={6} computer={4}>
              <p id='after-30-days'>$49.95/Month after 30 Days</p>
          </Grid.Column>
          <Grid.Column mobile={10} tablet={16} computer={4}>
              <p id='buy-button'>Buy for $1</p>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
    )
  }
}

export default Main;
