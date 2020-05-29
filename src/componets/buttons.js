import React, {Component} from "react";

export class Buttons extends Component{

    render() {
        const {actions,onBtn} = this.props;
        return (
            <div className='btn-group'>
                {actions.map(value => <button value={value} key={value} className='btn btn-secondary' onClick={onBtn}>{value}</button>)}
            </div>
        );
    }

}