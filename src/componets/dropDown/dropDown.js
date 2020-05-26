import React, {Component} from "react";
import './DropDown.scss'

export class DropDown extends Component{
    state = {
        isOpen: false
    };
    toogle = ()=>{
        this.setState({isOpen: !this.state.isOpen})
    };
    onSetMethod = (event)=>{
    const {onSelect} = this.props;
    const value = event.target.getAttribute('method-value');
    onSelect(value);
    this.setState({isOpen: false})
    };
    render() {
    const {methodsArr, curMethod} = this.props;
    const {isOpen} = this.state;
        return (
            <div className='may-drop-down dropdown'>
                <div className='dropdown-toggle' onClick={this.toogle}>{curMethod}</div>
                {isOpen && <div className='dropdown-menu show'>
                    {methodsArr.map(value =>
                        <div
                            key={value}
                            method-value={value}
                            onClick={this.onSetMethod}
                            className='dropdown-item'
                        >{value}
                        </div>)}
                    </div>
                    }

            </div>

        )

}
}