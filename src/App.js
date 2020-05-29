import React, {Component} from 'react';
import {Form} from "./componets/form";
import {Buttons} from './componets/buttons';
import './App.css';
//Вся стилізація на бутстрапі  npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


//массив дій
const actions = ['-1', '+1', '+100', '-100', 'reset'];

export class App extends Component{
  state = {
  number: 0,
    enteredNum: '',
      redFlag: false
};


onButton = (event)=>{
  const action = event.target.value;
  action === 'reset'
      ? this.setState({
          number: 0,
          enteredNum: '',
      })
      : this.addition(action)
};

//Додавання
addition = (action)=>{
  if (this.state.number + +action >= 0){
  this.setState({
    number: this.state.number + +action
  })
  }else return null
};

//запис із інпута
handleChange = (event)=>{
    this.setState({enteredNum: event.target.value});
  };

// Робота кнопки надіслати
onSend = (event)=>{
  event.preventDefault();
 let a = this.addition(this.state.enteredNum);
     a === null
        ? this.setState({redFlag: true})
        : this.setState({
            redFlag: false,
            enteredNum: ''
        })
    };


  render() {
    const {number, redFlag, enteredNum} = this.state;
    return (
         <div className='counter card'>
             <div className='number'><h1>{number}</h1></div>
             <Buttons actions={actions} onBtn={this.onButton} />
             <div>
                 <Form handler={this.handleChange} operator={this.onSend} flag={redFlag} entered={enteredNum}/>
             </div>
     </div>
    )
  }

}

export default App;
