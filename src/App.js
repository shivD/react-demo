import React from 'react';
import Header from './components/header/';
import MenuItems from './components/menuItems/';
import Link from './components/links/';
import  './App.scss';

class App extends React.Component {
  render() {
    return (
      <Header variant='primary'>
       <div className='logo'>
        <Link location="#" variant='h1' title="Logo"/>
        </div>
        <MenuItems menuLinks={['homne', 'About Us', 'services', 'portfolio', 'team', 'contact us']}/>
      </Header>
    );
  }
}

export default App;  
