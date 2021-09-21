import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Post from './Post'
import './App.css';


class App extends Component {

  state = {
    data: [],
    numberedData: []
  }

  fetchPosts = () => {
    fetch("https://images-api.nasa.gov/search?media_type=image&year_start=2015&year_end=2021&keywords=galaxy")
    .then(resp => resp.json())
    .then( data => this.setState({data: data["collection"]["items"]}))
  }

  renderPosts = () => {
    if (this.state.numberedData){
      
      let count = 0
      return this.numberPosts().map(post => {
        let newPost = <Post imageUrl={post.imageUrl} title={post.title} description={post.description} dateCreated={post.dateCreated} likes={0} id={count} key={count}></Post>
        count++
        return newPost
     } )
     
    }
  }

  numberPosts = () => {
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
      // this.setState({numberedData: numberedData })

  }

  renderRoutes = () => {
    if (this.state.numberedData){
      return this.state.numberedData.map(post => {
        return <Route exact path={`/${post.id}`} component={<Post imageUrl={post.imageUrl} title={post.title} description={post.description} dateCreated={post.dateCreated} likes={0} id={post.id} key={post.id}></Post>}></Route>
      })
    }
  }

 
  componentDidMount(){
    this.fetchPosts()
  }

  render(){
    return (
      <BrowserRouter>
          <div className="App">
            <h1 className='header'>
              Spacestagram
            </h1>
          <Route
                exact
                path="/"
                render={this.renderPosts}
            />
            
          </div>
          {this.renderRoutes()}
      </BrowserRouter>
    )
  }
}

export default App;
