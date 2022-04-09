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
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import Postlist from './components/Postlist';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookNames from './components/HookNames';
import HookAddnumber from './components/HookAddnumber';
import Sample from './components/Sample';
import DataArray from './components/DataArray';
import DataArrayComponent from './components/DataArrayComponent';
import LogmouseEffect from './components/LogmouseEffect';
import IntervalHookCounter from './components/IntervalHookCounter';
import HooksFetchdata from './components/HooksFetchdata';
import HooksUseReducer from './components/HooksUseReducer';

export const innerContext=React.createContext();

class App extends React.Component {
render(){  
  const dataarray=DataArray.map(data =>{
    return <DataArrayComponent age={DataArray.age}></DataArrayComponent>
  })



return (

    <div className="App">
      {dataarray}
      <Greetme name="Aditya">
        <p>Children element</p>
        <button>click aditya</button>
      </Greetme>
      <Greetme name="Shubham">
        <button>Click</button>
        
      </Greetme>
      <Welcomeme name="shubham"></Welcomeme>
      <Message> </Message>
      <Counter></Counter>
      <Functionclick></Functionclick>
      <Parentcomponent></Parentcomponent>
      <Usergreet></Usergreet>
      {/* <Namelist></Namelist> */}
      <Stylesheet random="true"></Stylesheet>
      <Form></Form>
      <Lifecycle></Lifecycle>
      <RefDemo></RefDemo>
      <Focusinput></Focusinput>
      {/* <Portaldemo></Portaldemo> */}
      {/* <Errorhandle>
      <Hero heroName="Spiderman"></Hero>
      </Errorhandle>
      <Errorhandle>
      <Hero heroName="Batman"></Hero>
      </Errorhandle>
      <Errorhandle>
      <Hero heroName="Joker"></Hero>
      </Errorhandle> */}
      
    
      <Hovercount></Hovercount>
      <UserProvider value={'OuterContextValue'}>
        <innerContext.Provider value={'InnerContextValue'}>
      <ComponentC></ComponentC>
      </innerContext.Provider>
      </UserProvider>
      <Postlist></Postlist>
      <PostForm></PostForm>
      <HookCounter></HookCounter>
      <HookNames></HookNames>
      <HookAddnumber></HookAddnumber>
      <Sample></Sample>
      <LogmouseEffect></LogmouseEffect>
      <IntervalHookCounter></IntervalHookCounter>
      <HooksFetchdata></HooksFetchdata>
      <HooksUseReducer></HooksUseReducer>
    </div>
  );
}
}
export default App;
