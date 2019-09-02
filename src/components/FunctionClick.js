import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Function button click')
    }
    return (
        <div>
           <button onClick = {clickHandler}>Function Button</button> 
        </div>
    )
}

export default FunctionClick
