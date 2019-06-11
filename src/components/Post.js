import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return(
            <div className="post">
                <User
                    src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                    alt="man"
                    name="Harry"
                    min/>    

                <img src={this.props.src} alt={this.props.alt}></img>                       
                <div className="post__name">
                    some account 
                </div>
                <div className="post__descr">
                   i just want to say, i love u so much!!!)!)!)!)!)!)!)!)
                </div>
            </div>

        )
    }
}