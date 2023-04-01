import React, {createContext, useContext, useEffect, useState} from "react";

export const Context = createContext();

export function CustomContext() {
	const ctx = useContext(Context);
    return ctx;
}

export const CustomProvider = ({children}) => {
	const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);
	const [qty, setQty] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(()=>{
			setQty(cart.reduce((total,item) => total + item.cantidad, 0))
			setTotal(cart.reduce((total, item) => total +(item.cantidad * item.price),0))
	},[])

	const addItem = (item, cantidad) =>{
			if(IsInCart (item.id)) {
					const modificado = cart.map((producto) =>{
							if(producto.id === item.id){
									producto.cantidad +=cantidad;
							}
							return producto;
					});
					setCart(modificado);
			}else {
					setCart([...cart, {...item,cantidad}]);
			}
			setQty(qty + cantidad);
			setTotal(total + (item.price * cantidad));

	};

	const deleteItem = (id) => {
			const found = cart.find(producto => producto.id === id);
			setCart(cart.filter((item) => item.id !=id));
			setQty( qty - found.cantidad)
			setTotal(total - (found.price * found.cantidad))
	};

	const IsInCart = (id) => cart.some((item) => item.id ===id);

	const clear = () => {
			setCart([]);
			setQty(0);
			setTotal(0);
	};

	const setProductsInContext = (products) => { 
		console.log("agregando produtos a ctx")
		setProducts(products)
	};

	return (
			<Context.Provider value={{ cart,qty, total, products, addItem, deleteItem, clear, IsInCart, setProductsInContext}}>
					{children}
			</Context.Provider>
	);
};
