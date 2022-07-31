import React from 'react'
import { useState } from 'react'

const Options = () => {
    const [options, setOptions] = useState([
        'United States',
        'Algeria',
        'Canada'
    ])
}

const Option = (props) => {
    return(
        <>
            <option defaultValue>Choose the country</option>
            {props.values.map((value, index) => (
                <option key={index} value={index}>{value}</option>
            ))}
        </>
    )
}

export default Option;