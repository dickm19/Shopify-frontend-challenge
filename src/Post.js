import React, {Component} from 'react';


export default class Post extends Component{

    handleClick = () => {
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <img src={this.props.imageUrl} alt={this.props.title}></img>
                <br></br>
                <button onClick={this.handleClick}>click</button>


            </div>
        )
    }
}