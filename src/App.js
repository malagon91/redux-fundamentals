import React, { Component } from 'react';
import {createStore} from 'redux';


//Primer ejemplo de redux, tengo un objeto que disminuye con el reducer store
class App extends Component {
  constructor(){
    super();
     this.state = {
            count:0
        };
   this.store = createStore(this.counter);
   console.log(this.store.getState());
   this.update = this.update.bind(this);
   this.decrement = this.decrement.bind(this);
   this.store.subscribe(this.renderCount.bind(this));
  }

counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
} 
update(){
  this.store.dispatch({
    type: 'INCREMENT'
  })
}

decrement(){
  this.store.dispatch({
    type: 'DECREMENT'
  })
}

renderCount(){
   this.setState({
      count: this.store.getState()
    })
}

  render() {
    return (
      <div className="col-md-12 text-center">
      <hr/>
      <a className="btn btn-primary" onClick={this.update}>Add</a>
      <a className="btn btn-primary" onClick={this.decrement}>Less</a>
      <h1>{this.store.getState()}</h1>
      </div>
    );
  }
}

export default App;
