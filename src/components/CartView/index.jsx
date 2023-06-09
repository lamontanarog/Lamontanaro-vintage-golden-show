import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CustomContext";
import { Table, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./style.css";
import CheckoutCart from "../cartCheckOut/index";

export const Cart = () => {
    const { cart, deleteItem, total} = useContext(Context);


    return (
        <>
            {cart.length === 0 ? (
                <>
                    <div>
                        <h1 className="titleCartView">
                            No agregaste productos aun, mira nuestros productos
                            <Link to="/">aqui</Link>
                        </h1>
                        <h2 className={"subtitle"}>Gracias por tu visita</h2>
                    </div>
                </>
            ) : (<>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del producto</th>
                            <th>Precio</th>
                            <th>cantidad</th>
                            <th>remover</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((producto) => (
                            <tr>
                                <td>{producto.id}</td>
                                <td>{producto.title}</td>
                                <td>{producto.price}</td>
                                <td>{producto.cantidad}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        onClick={() => deleteItem(producto.id)}
                                    >
                                        <Icon.Trash />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h3 className="Total-Carrito">El total de tu compra es de ${total}</h3>
                <CheckoutCart cartTotal={total} cart={cart} />
                </>
            )
            }
            
        </>
    );
};
