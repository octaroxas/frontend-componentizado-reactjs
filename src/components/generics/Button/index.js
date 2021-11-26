import React from 'react';
import './styles.css'

export default function Buttom({ id, type, onclick, text}) {
    return(
        <button className="button" type={type} onClick={onclick} id={id}>{text}</button>
    )
}