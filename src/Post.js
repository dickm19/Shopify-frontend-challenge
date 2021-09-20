import React, {Component} from 'react';


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
                <button onClick={this.handleLike}>🤎 {this.state.likes}</button>
            </div>
        )
    }
}