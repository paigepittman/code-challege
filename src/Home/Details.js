import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

class Details extends Component {

  render() {
    return (
      <Grid id='details-grid'>
        <Grid.Column  mobile={16} tablet={8} computer={8}>
          <img id='computer-magnifying' src='./images/computer-magnify.png'/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <p class='details-header'>Easily identify your most proftible campaigns</p>
          <p class='details-paragraph'>Turn unprofitable campaigns into profitable ones. Uncover the real value of your traffic. Easily identify where you should be spending your traffic.</p>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={8}>
          <img id='all-in-one' src='images/all-in-one.png'/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <p class='details-header'>Everything in one place</p>
          <p class='details-paragraph'>Are you running campaigns from multiple traffic sources? Clicktool helps you keep your business organized by tracking all your sales in one single place.</p>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={8}>
          <img id='nondirect' src='./images/nondirecttracking-01@2x.png'/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <p class='details-header'>Cutting edge non-redirect tracking</p>
          <p class='details-paragraph'>The only non redirect tracking of it’s kind. You can now create campaigns that stay compliant with all the major traffic sources. The campaign link you use will rotate different landing pages without the need to change URL.</p>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={8}>
          <img id='landing-pages' src='./images/landing-pages.png'/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <p class='details-header'>Rotate landing pages with precision</p>
          <p class='details-paragraph'>Want to send 90% of your traffic to your proven page, but allocate 10% to a new experiment? We got you covered. With Clicktool, traffic distribution is a breeze. Configure your traffic to rotate between as many landing pages and offers as you want. This way you speed up your optimizations and get to profitability much quicker.</p>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={8}>
          <img id='tracking-report' src='images/tracking-report.png'/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <p class='details-header'>Track Phone Calls</p>
          <p class='details-paragraph'>Want to send 90% of your traffic to your proven page, but allocate 10% to a new experiment? We got you covered. With Clicktool, traffic distribution is a breeze. Configure your traffic to rotate between as many landing pages and offers as you want. This way you speed up your optimizations and get to profitability much quicker.</p>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          <img id='beta-logo' src='./images/clicktool-logo.png'/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          <p id='full-access'>Beta release gives you full access for just $1</p>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          <p id='try-button'>Try it!</p>
        </Grid.Column>
        <Grid.Column mobile={5} tablet={16} computer={16}>
          <img id='left-city' src='./images/city-scape.png'/>
        </Grid.Column>
        <Grid.Column mobile={6} tablet={16} computer={16}>
          <img id='click-marker' src='./images/CLICKTOOL-MARK.png'/>
        </Grid.Column>
        <Grid.Column mobile={5} tablet={16} computer={16}>
          <img id='right-city' src='./images/city-scape.png'/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Details;
