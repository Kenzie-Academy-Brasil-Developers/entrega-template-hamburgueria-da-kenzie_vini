import { ListProductStyle } from "./style";
import { v4 as uuid } from "uuid";

export function ListProducts({ products, setCart, cart }) {
  function addProductsLocal(product) {
    if (cart.some((elt) => elt.name === product.name)) {
      alert("Item já adicionado!");
    } else {
      setCart([...cart, product]);
      localStorage.setItem("@PRODUCT", JSON.stringify([...cart, product]));
      console.log(product);
    }
  }

  return (
    <ListProductStyle>
      <ul className="list">
        {products.map((product) => {
          return (
            <li className="products" key={uuid()}>
              <div>
                <img src={product.img} alt="" />
              </div>
              <h3 className="titleProducts">{product.name}</h3>
              <span className="category">{product.category}</span>
              <span className="price">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button onClick={() => addProductsLocal(product)} type="button">
                Adicionar
              </button>
            </li>
          );
        })}
      </ul>
    </ListProductStyle>
  );
}
