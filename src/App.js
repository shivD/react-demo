import React from 'react';
import Header from './components/header';
import MenuItems from './components/menuItems';
import Link from './components/links';
import Container from './components/container';
import {CardText, Card, CardTitle, CardBody, CardImg } from './components/card';
import Alert from './components/alert';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header color='primary'>
          <div className='logo'>
            <Link location="#" variant='h1' title="Logo" />
          </div>
          <MenuItems menuLinks={['homne', 'About Us', 'services', 'portfolio', 'team', 'contact us']} />
        </Header>
        <div className='app'>
          <Container>
            <div className='grid-3'>
              <div className='items'>
                <Card color='primary'>
                  <CardImg src="assets/img/img1.jpg" alt='imgage' />
                  <CardBody>
                    <CardTitle>Card header</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className='items'>
                <Card color='primary'>
                  <CardImg src="assets/img/img2.jpg" alt='imgage' />
                  <CardBody>
                    <CardTitle>Card header</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>

                </Card>
              </div>
              <div className='items'>
                <Card color='primary'>
                  <CardImg src="assets/img/img1.jpg" alt='imgage' />
                  <CardBody>
                    <CardTitle>Card header</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>

                </Card>
              </div>
            </div>
          <Alert color='primary' title='Primary Alert'/>
          <Alert color='danger' title='Primary danger'/>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default App;  
