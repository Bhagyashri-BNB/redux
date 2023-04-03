import React from 'react'

const rotateReducers = () => {
  
    switch(stopAction.type){
        case "rotate":
            return{
                rotating: stopAction.payload
            };
        default:
            return state;
    }
  
}

export default rotateReducers