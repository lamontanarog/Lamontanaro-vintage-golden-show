import React from "react"
import * as Icon from 'react-bootstrap-icons';
import './style.css'

function CartWidget({count}){
    return (
        
        <div className="my-cart"> 
            <Icon.Cart3 />
            <span className="count">{count}</span>  
        </div>
    )
}

export default CartWidget