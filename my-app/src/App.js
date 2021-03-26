import './App.css';
import React from 'react';
import axios from 'axios';
import Git from './Git'

class App extends React.Component {
  state = {
    gitAcc: null,
    gitFollowers: [],
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/PurdyRad')
    .then(res => {
      console.log('hi', res.data )
      this.setState({
        gitAcc: res.data
      })
      axios.get(res.data.followers_url)
      .then((res) => {
          console.log (res.data)
          this.setState({
            gitFollowers: res.data
          })
        })
        .catch((err) => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log('2', err)
    })
  }

  
  
  render () {

  return (
    <div className="App">
      <h1>Git Yo Info</h1>
      <div className='GitCard'>
      {this.state.gitAcc ?   <Git 
        {...this.state.gitAcc} 
        /> : 'Sorry Unavailable'}
        <p className='ptag'>Woah look at all these followers...</p>
        {this.state.gitFollowers.map((data) => (<Git key={data.id} {...data} />))}
        
        </div>
    </div>
  )};
}

export default App;
