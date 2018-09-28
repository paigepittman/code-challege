import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Nav from './Nav';
import Splash from './Splash';
import Main from './Main';
import Details from './Details';
import Footer from './Footer';


class Home extends Component {

  render() {
    return (
      <Container id="home-container">
        <Grid>
          <Grid.Row id='nav-row'>
            <Nav />
          </Grid.Row>
          <Grid.Row id='splash-row'>
            <Splash />
          </Grid.Row>
          <Grid.Row>
            <Main />
          </Grid.Row>
          <Grid.Row>
            <Details />
          </Grid.Row>
          <Grid.Row>
            <Footer />
          </Grid.Row>
        </Grid>
      </Container>

    )
  }
}

export default Home;
