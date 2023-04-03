
import { React, useEffect, useState, useContext, } from "react";
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Context} from "../../../src/Context/CustomContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "./style.css";

function ItemDetail(){
    const {products, addItem} = useContext(Context);
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const MySwal = withReactContent(Swal);


    const handleClick = () =>{
        addItem(product,1);
        successAddItemAlert();
        // const valorCant = input.value;
    } ;

    function successAddItemAlert() {
        MySwal.fire({
        title: <strong>Listo!</strong>,
        html: <i> lo agregaste correctamente</i>,
        icon: 'success'
        })
    }
    
    useEffect(() =>{
        let p = products.find( prod => prod.id === id)
        setProduct(p) 
  
    }, [id]);

    return (
            
        <Container >
            
        <div className="Father">
            <Row className="justify-content-lg-center">
                <Col lg="auto">
                    <Card key={product.id} style={{ width: '30rem', margin:'4rem'}}>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                {product.stock}
                            </Card.Text>
                            <Button variant="outline-primary" onClick={handleClick} >
                                <Link to={`/products/${product.id}`} >Comprar</Link>
                            </Button>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </Container>
    )
}

export default ItemDetail
