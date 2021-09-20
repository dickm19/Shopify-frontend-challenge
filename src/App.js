import React, {Component} from 'react';
import Post from './Post'
import './App.css';


class App extends Component {

  state = {
    data: {}
  }

  fetchPosts = () => {
    fetch("https://images-api.nasa.gov/search?media_type=image&year_start=2019&year_end=2020")
    .then(resp => resp.json())
    .then( data => this.setState({data: data["collection"]["items"]}))
  }

  renderPosts = () => {
    this.state.data.map(post => <Post imageUrl={post["links"][0]["href"]} photographer={post["data"]["photographer"]} title={post["data"]["title"]}></Post>  )
  }

 
  componentDidMount(){
    this.fetchPosts()
  }

 handleButton = () => {
  //  this.getImages()
   console.log(this.state.data["collection"]["items"])
 }

  render(){
    return (
    <div className="App">
      <h1 className='header'>
        Spacestagram
      </h1>
      <button onClick={this.handleButton}>
        CLICK ME
      </button>
    </div>
    )
  }
}

export default App;
