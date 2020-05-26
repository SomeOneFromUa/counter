import React, {Component} from "react";


export class Comment extends Component{
render() {
    const {comment} = this.props;
    const {name, email, body} = comment;
    return (
    <div className="card">
        <div className="card-header">{name}</div>
        <div className="card-body">
            <h4 className="card-title">{email}</h4>
            <p className="card-text">{body}</p>
        </div>
    </div>
)
}
}
