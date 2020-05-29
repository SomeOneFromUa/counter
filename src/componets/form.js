import React, {Component} from "react";

export class Form extends Component {
    render() {
        const {handler, operator,flag, entered} = this.props;
        return (
            <form>
                <label className='input-group'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text'>enter number</span>
                    </div>
                    <input type="number" className='form-control' onChange={handler} value={entered}/>
                    <div className='input-group-append'>
                        <input type="submit" value="Надіслати"  className={`${flag? 'btn btn-danger': 'btn btn-success'}`} onClick={operator}/>
                    </div>
                </label>
            </form>
        );
    }
}

