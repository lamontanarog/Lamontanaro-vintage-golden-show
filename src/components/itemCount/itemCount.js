import { useState } from "react";


const ItemCount = ({ initial, stock, onAddToCart }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <small>Agregá la cantidad deseada al carrito</small>
      <div >
        <button color="red" onClick={decrease}>
          -
        </button>
        <span className="itemcount_count">{count}</span>
        <button color="green" onClick={increase}>
          +
        </button>
      </div>

      <div className="itemcount_btns">
        <button
          color="lightblue"
          className="btn"
          onClick={() => onAddToCart(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;