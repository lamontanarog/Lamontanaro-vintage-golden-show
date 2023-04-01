import React from "react"
import ItemDetailContainer from "../ItemDetailContainer/index.jsx"
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row';
import './style.css'

function ItemList({products}){
    return (
        <CardGroup>
            <Row xs={1} md={2} className="g-4">
                { products.map((product) =>(<ItemDetailContainer product={product} />)) }
            </Row>
        </CardGroup>
    )
}


export default ItemList