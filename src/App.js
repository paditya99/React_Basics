import React from 'react'
import logo from './logo.svg';
import Greetme from './components/Greet.js'
import './App.css';
import Welcomeme from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';
import Parentcomponent from './components/Parentcomponent';
import Usergreet from './components/Usergreet';
import Namelist from './components/Namelist';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import Lifecycle from './components/Lifecycle';
import RefDemo from './components/RefDemo';
import Focusinput from './components/Focusinput';
import Portaldemo from './components/Portaldemo';
import Hero from './components/Hero';
import Errorhandle from './components/Errorhandle';
import Hovercount from './components/Hovercount';

class App extends React.Component {
render(){  
return (
    <div className="App">
      {/* <Greetme name="Aditya">
        <p>Children element</p>
        <button>click aditya</button>
      </Greetme>
      <Greetme name="Shubham">
        <button>Click</button>
        
      </Greetme> */}
      <Welcomeme name="shubham"></Welcomeme>
      <Message> </Message>
      <Counter></Counter>
      <Functionclick></Functionclick>
      <Parentcomponent></Parentcomponent>
      <Usergreet></Usergreet>
      {/* <Namelist></Namelist>
      <Stylesheet random="true"></Stylesheet> */}
      <Form></Form>
      <Lifecycle></Lifecycle>
      <RefDemo></RefDemo>
      <Focusinput></Focusinput>
      {/* <Portaldemo></Portaldemo> */}
      {/* <Errorhandle>
      <Hero heroname="Spiderman"></Hero>
      </Errorhandle>
      <Errorhandle>
      <Hero heroname="Batman"></Hero>
      </Errorhandle>
      <Errorhandle>
      <Hero heroname="Powerman"></Hero>
      </Errorhandle> */}
      <Hovercount></Hovercount>
      
      
    </div>
  );
}
}
export default App;
