import React, { useEffect, useState } from "react"
import {Card, Button} from 'react-bootstrap';
import './style.css'
import { Link, NavLink, useParams } from 'react-router-dom';
function ItemDetailContainer({product}){

  
    return (
      <>
      <div className="Father">
      <Card bg="light" variant="light" key={product.id} >
        <Card.Img className="ImgCards" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Link to={`/products/${product.id}`}>
            <Button bg="danger" variant="dark" >Ver mas</Button>
          </Link>
        </Card.Body>
      </Card>
      </div>
      </>
      
    )
};

export default ItemDetailContainer