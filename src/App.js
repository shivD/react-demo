import React from 'react';
import Header from './components/header';
import MenuItems from './components/menuItems';
import Link from './components/links';
import Container from './components/container';
import {CardText, Card, CardTitle, CardBody, CardImg } from './components/card';
import Alert from './components/alert';
import Text from './components/text';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <React.Fragment>
        <Header color='primary'>
          <div className='logo'>
            <Link location="#" variant='h1' title="Logo" />
          </div>
          
          <MenuItems ToggleClass={this.state.isToggleOn ? 'hide' : 'show'} menuLinks={['homne', 'About Us', 'services', 'portfolio', 'team', 'contact us']} />
          <a  onClick={this.handleClick} className='mobile-menu'>
          <span></span>
          <span></span>
          <span></span>
          </a>
        </Header>
        <div className='app'>    
          <Container>
            <div className='grid-4'>
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
        <Text size="red">ddddddddddddddddddddddd</Text>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default App;  
