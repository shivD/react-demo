import React, { Component } from 'react';
import UserTable from './UserTable';

class Home extends Component {
  state={
    isLoaded: false,
    data: []
   
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => this.setState({
    isLoaded:true,
    data:data
  })
    )
  }
  render() {
    if(!this.state.isLoaded){
    return (
      <div>Loading....</div>

    )
    }
    else{
     return <UserTable UserList={this.state.data}/>
    }
  }
}
export default Home;