import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ListProducts } from "./components/ListProduct";
import { Cart } from "./components/ShoppingCart";
import { api } from "./API/api.js";
import { Main } from "./App.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productsResponse, setProductsResponse] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
        setProductsResponse(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, cur) => acc + cur.price, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    function getLocalStorage() {
      const local = localStorage.getItem("@PRODUCT");

      if (local !== null) {
        setCart(JSON.parse(local));
      }
    }
    getLocalStorage();
  }, []);

  return (
    <div className="App">
      <Header
        products={products}
        setProducts={setProducts}
        productsResponse={productsResponse}
      />
      <Main className="container__main">
        <ListProducts products={products} setCart={setCart} cart={cart} />
        <Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
      </Main>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
