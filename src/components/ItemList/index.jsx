import React from "react"
import ItemDetailContainer from "../ItemDetailContainer/index.jsx"
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row';
import './style.css'

function ItemList({products}){
    return (
        <CardGroup className="Father">
            <Row md={3} xl={3} className="g-5" >
                { products.map((product) =>(<ItemDetailContainer product={product} />)) }
            </Row>
        </CardGroup>
    )
}


export default ItemList