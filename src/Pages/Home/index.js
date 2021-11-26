import React, {  useState } from 'react';
import NavBar from '../../components/generics/NavBar';
import Title from '../../components/generics/Title' 
import Buttom from '../../components/generics/Button';
import Input from '../../components/generics/Input';
import Item from '../../components/generics/ItemList';
import './styles.css'
import ProfileCard from '../../components/generics/ProfileCard';

export default function Home() {
    
    const [itens,setItens]  = useState([])
    const [total, setTotal] = useState(0) 

    const addItem = () => {
        const n = document.getElementById('item').value;
        const v = Number(document.getElementById('valor').value);

        if(n !== undefined && v !== undefined) {
            if(n !== '' && v !== '') {
                setItens(itens.concat({name: n, value: v}))
                setTotal(total+v)
            }
        }
    }

    const delitem = (index) => {
        setTotal(total-itens[index].value)
        itens.splice(index,index+1)
    }

    return(
        <>
            <NavBar/>
            
            <section className="home-container">
            <ProfileCard/>
                <Title>Lista de Compras</Title>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row'
                }}>
                    <Input name="nome" placeholder="Nome" id="item" type="text" />
                    <Input name="valor" placeholder="Valor" id="valor" type="number" />
                    <Buttom id="" type="button" onclick={addItem} text="Add">Add</Buttom>
                </div>

                <div style={{
                    display: 'flex', 
                    flexDirection: 'row', alignItems: 'center'
                }}>
                <Input placeholder="Nome da lista"/>
                <p className="total">Total: R$ {total}</p>

                </div>

                <div className="list-itens">
                    {itens?.map((item,index) => ( // se o atributo content estiver definido faça iterações com o map
                        <Item key={index} id={index} i={index} name={item.name} valor={item.value} delf={delitem} />
                    ))}
                </div>
            </section>
        </>
    )
}