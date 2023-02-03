import { useState } from "react";
import { HeaderStyle } from "./style";

export function Header({ setProducts, productsResponse }) {
  const [search, setSearch] = useState("");

  function Search(event) {
    if (event === "") {
      setProducts(productsResponse);
    } else {
      const arrayFilter = productsResponse.filter((product) =>
        product.name.toLowerCase().includes(event.toLowerCase())
      );
      setProducts(arrayFilter);
    }
  }

  return (
    <>
      <HeaderStyle>
        <h1 className="title1">
          Burguer <small>Kenzie</small>
        </h1>
        <div className="container--search">
          <input
            className="inputSearch"
            type="text"
            placeholder="Pesquisar produto"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button
            className="buttonSearch"
            type="button"
            onClick={() => Search(search)}
          >
            Pesquisar
          </button>
        </div>
      </HeaderStyle>
    </>
  );
}
