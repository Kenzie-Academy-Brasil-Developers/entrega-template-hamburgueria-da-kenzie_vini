import styled from "styled-components";

export const ListProductStyle = styled.section`
  font-family: "Inter", sans-serif;

  height: 360px;

  width: 95%;

  margin-top: 30px;

  .list {
    overflow-x: scroll;

    width: auto;

    display: flex;

    gap: 30px;

    .products {
      height: 346px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 15px;

      border: solid 2px #e0e0e0;
      border-radius: 8px;

      div {
        width: 300px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--gray_1);

        img {
          width: 177px;
          height: 177px;
        }
      }
      h3 {
        font-size: 1.125rem;
        font-weight: bold;

        margin-left: 15px;
      }
      .category {
        font-size: 0.75rem;
        color: var(--gray_3);

        margin-left: 15px;
      }
      .price {
        font-size: 0.875rem;
        font-weight: bold;

        color: var(--color-primary);

        margin-left: 15px;
      }
      button {
        width: 105px;
        height: 40px;

        background-color: var(--color-primary);
        color: #fff;

        border-radius: 8px;

        margin-left: 15px;
      }
    }
  }

  @media (min-width: 769px) {
    width: 65%;

    height: auto;

    margin-top: 0;

    padding: 50px 0;
    .list {
      overflow-x: hidden;
      flex-wrap: wrap;

      .products {
        div {
          width: 250px;
        }
      }
    }
  }
`;
