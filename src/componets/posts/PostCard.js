import React, {Component} from "react";
import './PostsStyle.scss'
import {Comment} from '../comments/Comment'
import {map} from "react-bootstrap/cjs/ElementChildren";

export class PostCard extends Component{
state = {
    isOpen: false
};

toogle = ()=> {
    this.setState({
            isOpen: !this.state.isOpen
        }
    )
};
    render() {
        const  {author, post, comments} = this.props;
        const {isOpen} = this.state;
        return(
            <div className='card'>
            <div className='card-header'>{post.title}</div>
            <div className='card-body'>{post.body}</div>
            <div className='card-footer'>{author.name}</div>
            <div>
                {comments.length !== 0 && <button onClick={this.toogle}>show/hide</button>}
                {isOpen && comments.map(value => {
                return (<Comment key={value.id} comment={value}/>)
                }
                )}
            </div>
            </div>
        )

}

}