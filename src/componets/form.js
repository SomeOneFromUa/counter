import React, {Component} from "react";

export class Form extends Component {
    render() {
        const {handler, operator } = this.props;
        return (
            <form>
                <label className='input-group'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text'>enter number</span>
                    </div>
                    <input type="number" className='form-control' onChange={handler}/>
                    <div className='input-group-append'>
                        <input type="submit" value="Надіслати"  className='btn btn-success' onClick={operator}/>
                    </div>
                </label>
            </form>
        );
    }
}

