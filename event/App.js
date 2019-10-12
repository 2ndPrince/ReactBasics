import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



class App extends Component {
    
    //code goes here
    constructor(){
        super();
        this.state ={
          count: 0
        };
    }

    handleClick() {
        const {count} = this.state;
        this.setState({ count : count + 1});
    } 
    
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={ this.handleClick.bind(this) }>myButton</button>
            </div>
        )
    }
    
    
  
}

export default App;
