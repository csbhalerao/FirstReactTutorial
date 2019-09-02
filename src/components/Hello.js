import React from 'react'

const Hello = props => {
    return React.createElement('div', {id: 'hello'}, React.createElement('h1', null, 'hello' , ' '+props.city))
}

export default Hello