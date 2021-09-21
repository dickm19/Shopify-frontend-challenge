import React, {Component} from 'react';
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
            <div>
                <img src={this.props.imageUrl} alt={this.props.title}></img>
                <br></br>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.dateCreated}</p>
                <div className="like-button">
                    <img className="heart" onClick={this.handleLike} src={this.state.clicked ? "https://i.ibb.co/ncrr1M3/Pik-Png-com-undertale-heart-png-790472.png" : "https://i.ibb.co/9gVkfmd/Pik-Png-com-pixel-heart-png-971526.png"} alt='heart'></img>
                    <p>{this.state.likes}</p>
                </div>
            </div>
        )
    }
}