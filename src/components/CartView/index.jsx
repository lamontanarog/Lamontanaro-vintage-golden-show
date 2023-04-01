import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {db} from "../../firebase/firebase"
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore"
import { Context} from "../../Context/CustomContext"
import {Table, Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import "./style.css"

export const Cart = ({estilo, color}) => {
    const {cart,deleteItem,clear, qty, total} = useContext(Context);

    return (
        <>
        
        {cart.length === 0 ? (
            <>
            <div>
            <h1 className="titleCartView">No agregaste productos aun, mira nuestros productos <Link to="/">aqui</Link></h1>
            <h2 className={"subtitle"}>Gracias por tu visita</h2>
            </div>
            </>
        ) :  
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre del producto</th>
                        <th>Precio</th>
                        <th>unidades</th>
                        <th>total</th>
                        <th><Button variant="blue" onClick={() => clear()}> limpiar </Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map( (producto) =>
                            <tr>
                                <td>{producto.id}</td>
                                <td>{producto.title}</td>
                                <td>{producto.price}</td>
                                <td>{qty}</td>
                                <td>{total}</td>
                                <td> 
                                    <Button variant="danger" onClick={() => deleteItem(producto.id)}>
                                        <Icon.Trash />
                                    </Button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                    
                </Table>
            
                
             }
        </>
    );
}
