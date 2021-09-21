import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
// import dateFormat from 'dateformat';
import { BrowserRouter } from 'react-router-dom';

import Post from './Post'
import './App.css';


class App extends Component {

  state = {
    data: [],

  }

  fetchPosts = () => {
    fetch("https://images-api.nasa.gov/search?media_type=image&year_start=2015&year_end=2021&keywords=galaxy")
    .then(resp => resp.json())
    .then( data => this.setState({data: data["collection"]["items"], displayed: data["collection"]["items"]}))
  }

  renderPosts = () => {
    if (this.state.data){
      
      let count = 0
      return this.numberPosts().map(post => {
        let newPost = <Post handleImageClick={this.handleImageClick} imageUrl={post.imageUrl} title={post.title} description={post.description} dateCreated={post.dateCreated} likes={0} id={count} key={count}></Post>
        count++
        return newPost
     } )
     
    }
  }

  numberPosts = () => {
    if (this.state.data){

      let count = 0
      return this.state.data.map(post => {

        let newPost = {
          imageUrl: post["links"][0]["href"],
          title: post["data"][0]["title"],
          description: post["data"][0]["description"],
          dateCreated: post["data"][0]["date_created"],
          likes: 0,
          id: count
        }
         
        count++
        return newPost
      })
    }
      // this.setState({numberedData: numberedData })

  }

  renderRoutes = () => {
    if (this.numberPosts()){
      return this.numberPosts().map(post => {
        return <Route exact path={`/${post.id}`} render={() => <Post handleImageClick={this.handleImageClick} imageUrl={post.imageUrl} title={post.title} description={post.description} dateCreated={post.dateCreated} likes={0} id={post.id} key={post.id}></Post>}></Route>
      })
    }
  }
  
  handleImageClick = () => {
    window.location.reload()
  }

 
  componentDidMount(){
    this.fetchPosts()
  }

  render(){
    return (
      <BrowserRouter>
          <div className="App">
            <Link to="/" className='header'>
              <h1 >
                Spacestagram
              </h1>
            </Link>
            <Route
                  exact
                  path="/"
                  render={this.renderPosts}
            />
          
            {this.renderRoutes()} 
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
