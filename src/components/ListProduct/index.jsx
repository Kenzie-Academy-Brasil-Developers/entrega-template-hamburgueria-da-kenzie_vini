import { ListProductStyle } from "./style";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

export function ListProducts({ products, setCart, cart }) {
  function addProductsLocal(product) {
    if (cart.some((elt) => elt.name === product.name)) {
      toast.warning("Este item já foi adicionado", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setCart([...cart, product]);
      localStorage.setItem("@PRODUCT", JSON.stringify([...cart, product]));

      toast.success("Adicionado com succeso", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
