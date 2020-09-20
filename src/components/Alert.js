import React from 'react'
import './Alert.css'

const Alert = ({ err }) => {

    let msg = ''
    let Class = 'hide'

    if (err.length < 1){
        msg = 'Sorry no result is found'
        Class = 'show'
    }

    return <h1 className = {Class} >{msg}</h1>
}



export default Alert