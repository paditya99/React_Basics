import React, {useReducer} from "react";

const initialstate={
    firstcounter: 0


}
const reducer=(state, action)=>{
    switch(action.type){
        case 'Increment':
            return {firstcounter: state.firstcounter + action.value}
        case 'Decrement':
            return {firstcounter: state.firstcounter - action.value}
        case 'Reset':
            return initialstate;
        default:
            return state;

    }
}


function HooksUseReducer(){

    
    const [count, dispatch]=useReducer(reducer,initialstate)

    return(
        
         <div>
             <div>Count -{count.firstcounter} </div>
             <button onClick={()=>dispatch({type:'Increment', value: 1})}>Increment by 1</button>
             <button onClick={()=>dispatch({type: 'Decrement',value: 1})}>Decrement by 1</button>
             <button onClick={()=>dispatch({type: 'Increment',value: 3})}>Increment by 3</button>
             <button onClick={()=>dispatch({type: 'Decrement', value: 3})}>Decrement by 3</button>
             <button onClick={()=>dispatch({type: 'Reset'})}>Reset</button>
         </div>
    )

}

export default HooksUseReducer