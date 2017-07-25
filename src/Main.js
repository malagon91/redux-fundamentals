import React, { Component } from 'react';
import App from './App'
//import Egg from './Egg'
import Todo from './Todo';

//Primer ejemplo de redux, tengo un objeto que disminuye con el reducer store
export default class Main extends Component {
 render(){
     return (
         <div>
            <h4>My redux example</h4>
            <App/>
           <h1>TODO list</h1>
            <Todo/>
         </div>
     )
 }
}
