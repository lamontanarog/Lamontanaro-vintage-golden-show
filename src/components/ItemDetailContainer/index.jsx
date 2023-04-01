import React, { useEffect, useState } from "react"
import {Card, Button} from 'react-bootstrap';
import './style.css'
import { Link, NavLink, useParams } from 'react-router-dom';
import { CustomContext} from "../../../src/Context/CustomContext"
import { useContext } from "react";
import ItemCount from "../itemCount/itemCount";
   
function ItemDetailContainer({product}){

  
    return (
      <>
      {<Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Link to={`/products/${product.id}`}>
            <Button variant="outline-primary" >Ver mas</Button>
          </Link>
        </Card.Body>
      </Card>}
      </>
      
    )
};

export default ItemDetailContainer