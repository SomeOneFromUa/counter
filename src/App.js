import React, {Component} from 'react';
import {Form} from "./componets/form";
import {Buttons} from './componets/buttons';
import './App.css';
//Вся стилізація на бутстрапі  npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


//массив дій
const actions = ['-1', '+1', '+100', '-100', 'reset'];

export class App extends Component{
  constructor(props) {
    super(props);
  }
  state = {
  number: 0,
    enteredNum: 0
};



onButton = (event)=>{
  const action = event.target.value;
  if (action === 'reset') {
    this.setState({number: 0})
  }
  this.addition(action)
};

addition = (action)=>{
  if (this.state.number + +action >= 0){
  this.setState({
    number: this.state.number + +action
  })
}else return null
};

handleChange = (event)=>{
    this.setState({enteredNum: +event.target.value});
    console.log(this.state.enteredNum);
  };

onSend = (event)=>{
  event.preventDefault();
  this.addition(this.state.enteredNum)
};


  render() {
    const {number} = this.state;
    return (
     <div className='counter card'>
       <div className='number'><h1>{number}</h1></div>
       <Buttons actions={actions} onBtn={this.onButton} />
       <div>
        <Form handler={this.handleChange} operator={this.onSend}/>
       </div>
     </div>
    )
  }

}

export default App;
