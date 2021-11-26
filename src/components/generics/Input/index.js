import React from 'react';
import './styles.css'

export default function Input({name, placeholder, id, type}) {
    return(
        <input className="input" type={type} name={name} placeholder={placeholder} id={id} />
    )
}