import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './Post.css'

export default class Post extends Component{

    state = {
        likes: this.props.likes,
        clicked: false,
        copied: false,
        shared: false,
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

    handleImageClick = () => {
        window.location.href=`/${this.props.id}`
    }

    handleShare = () => {
        this.setState({shared: true})
        setTimeout(() => {
            this.setState({shared: false})
        }, 3000)
    }

    render(){
        return(
                <div className='post'>
                    <img onClick={this.handleImageClick} className='galaxy' src={this.props.imageUrl} alt={this.props.title}></img>

                    <br></br>
                    <h3 className='title'>{this.props.title}</h3>
                    <p className="description">{this.props.description}</p>
                    <p>{this.props.dateCreated}</p>
                    <div className='buttons'>

                        <div className="like-button">
                            <img className="heart" onClick={this.handleLike} src={this.state.clicked ? "https://i.ibb.co/ncrr1M3/Pik-Png-com-undertale-heart-png-790472.png" : "https://i.ibb.co/9gVkfmd/Pik-Png-com-pixel-heart-png-971526.png"} alt='heart'></img>
                            <p>{this.state.likes}</p>
                        </div>
                        <CopyToClipboard text={ (window.location.href.includes(`/${this.props.id}`)) ? `${window.location.href}` : `${window.location.href}${this.props.id}`  } className="share-button">
                            <img onClick={this.handleShare} className="share" onCopy={() => this.setState({copied: true})} src={"https://thumbs.gfycat.com/NauticalImmediateAdeliepenguin-max-1mb.gif"} alt="share button"></img>
                        </CopyToClipboard>
                            <p>Share</p>
                            {this.state.shared ?  "Copied to clipboard" : null}
                    </div>

                </div>
        )
    }
}