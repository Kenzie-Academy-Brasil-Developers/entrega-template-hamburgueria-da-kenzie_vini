import styled from "styled-components";

export const CartStyle = styled.section`
  font-family: "Inter", sans-serif;

  display: flex;
  flex-direction: column;

  width: 95%;

  background-color: var(--gray_1);

  .shoppingCartTitle {
    background-color: var(--color-primary);

    height: 55px;

    display: flex;
    align-items: center;

    border-radius: 8px 8px 0 0;

    margin-bottom: 20px;

    h2 {
      color: #fff;

      font-size: 1.125rem;
      font-weight: bold;

      margin-left: 15px;
    }
  }
  .cart {
    min-height: 168px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;

    h2 {
      font-size: 1.125rem;
      font-weight: bold;
    }
    p {
      font-size: 0.875rem;
      color: var(--gray_3);
    }
  }

  @media (min-width: 769px) {
    width: 30%;

    margin-top: 50px;
  }
`;

export const ListCart = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  width: 100%;

  li {
    width: 95%;

    display: flex;
    align-items: flex-start;

    position: relative;

    .imgProduct > img {
      width: 70px;
      height: 70px;

      padding: 8px;

      background-color: var(--gray_2);

      border-radius: 5px;
    }
    .nameProduct {
      display: flex;
      flex-direction: column;

      gap: 20px;

      margin: 10px;

      span {
        font-size: 0.75rem;
        color: var(--gray_3);
      }
    }

    button {
      position: absolute;
      right: 0;
      top: 10px;

      font-size: 0.75rem;

      background-color: var(--gray_1);
      color: var(--gray_3);
    }
  }
`;

export const Total = styled.div`
  width: 95%;

  display: flex;
  flex-direction: column;

  gap: 30px;

  padding-bottom: 15px;

  .total {
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 0.875rem;
      font-weight: bold;
    }
    span {
      font-size: 0.875rem;
      color: var(--gray_3);
    }
  }
  button {
    height: 60px;
    width: 95%;

    border-radius: 8px;

    background-color: var(--gray_2);
    color: var(--gray_3);

    font-size: 1rem;
    font-weight: bold;
  }
`;
