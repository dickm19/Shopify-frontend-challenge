import React, {Component} from 'react';
import Post from './Post'
import './App.css';


class App extends Component {

  state = {
    data: []
  }

  fetchPosts = () => {
    fetch("https://images-api.nasa.gov/search?media_type=image&year_start=2015&year_end=2021&keywords=galaxy")
    .then(resp => resp.json())
    .then( data => this.setState({data: data["collection"]["items"]}))
  }

  renderPosts = () => {
    if (this.state.data.count !== 0){
      
      
      return this.state.data.map(post => {
        return <Post imageUrl={post["links"][0]["href"]} title={post["data"][0]["title"]} description={post["data"][0]["description"]} dateCreated={post["data"][0]["date_created"]} likes={0} key={post["data"][0].nasa_id}></Post>
     } )
    }
  }

 
  componentDidMount(){
    this.fetchPosts()
  }


  render(){
    return (
    <div className="App">
      <h1 className='header'>
        Spacestagram
      </h1>
      
      {this.renderPosts()}
      
    </div>
    )
  }
}

export default App;
