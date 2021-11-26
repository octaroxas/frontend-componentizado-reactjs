import React from 'react';
import './styles.css'
import { FiTrash } from 'react-icons/fi'

export default function Item({i,name, valor, delf}) {

    // const icon = document.getElementById(i)
    // icon.onclick = (i) = delf(i)

    return(
        <>
            <div className="item-list"> 
                <p>
                    {`${name}`} <br/>
                    {`R$ ${valor},00`}
                </p> 
                <button className="item-but" type="button" id={i} onClick={()=>delf(i)}><FiTrash color='white' id={i} size={20}/></button>
            </div>
            
        </>
    )
}