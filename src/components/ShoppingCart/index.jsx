import { v4 as uuid } from "uuid";
import { CartStyle, ListCart, Total } from "./style";

export function Cart({ cart, setCart, total }) {
  function removeProductOfCart(product, index) {
    const products = [...cart];

    products.splice(index, 1);

    setCart(products);
    localStorage.setItem("@PRODUCT", JSON.stringify(products));
  }

  function removeAll() {
    setCart([]);
    localStorage.removeItem("@PRODUCT");
  }

  return (
    <CartStyle>
      <div className="shoppingCartTitle">
        <h2>Carrinho de compras</h2>
      </div>
      <div className="cart">
        {cart.length === 0 ? (
          <>
            <h2>Sua sacola está vazia</h2>
            <p>Adicione itens</p>
          </>
        ) : (
          <>
            <ListCart>
              {cart.map((product, index) => {
                return (
                  <li className="card" key={uuid()}>
                    <div className="imgProduct">
                      <img src={product.img} />
                    </div>
                    <div className="nameProduct">
                      <h2>{product.name}</h2>
                      <span>{product.category}</span>
                    </div>
                    <button onClick={() => removeProductOfCart(product, index)}>
                      Remover
                    </button>
                  </li>
                );
              })}
            </ListCart>
            <Total>
              <div className="total">
                <h4>Total</h4>
                <span>
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <button onClick={removeAll}>Remover todos</button>
            </Total>
          </>
        )}
      </div>
    </CartStyle>
  );
}
