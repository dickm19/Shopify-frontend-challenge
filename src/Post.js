import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './Post.css'

export default class Post extends Component{

    state = {
        likes: this.props.likes,
        clicked: false
    }

    handleLike = () => {
       if (this.state.clicked){
           this.setState({
               likes: this.state.likes -1,
               clicked: false
            })
       }else{
           this.setState({
               likes: this.state.likes + 1,
               clicked: true
            })
       }
    }

    render(){
        return(
            <BrowserRouter>
                <div className='post'>
                    <Link to={`/${this.props.id}`}>
                        <img className='galaxy' src={this.props.imageUrl} alt={this.props.title}></img>

                    </Link>
                    <br></br>
                    <h3 className='title'>{this.props.title}</h3>
                    <p className="description">{this.props.description}</p>
                    <p>{this.props.dateCreated}</p>
                    <div className="like-button">
                        <img className="heart" onClick={this.handleLike} src={this.state.clicked ? "https://i.ibb.co/ncrr1M3/Pik-Png-com-undertale-heart-png-790472.png" : "https://i.ibb.co/9gVkfmd/Pik-Png-com-pixel-heart-png-971526.png"} alt='heart'></img>
                        <p>{this.state.likes}</p>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}