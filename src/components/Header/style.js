import styled from "styled-components";

export const HeaderStyle = styled.header`
  font-family: "Inter", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 140px;

  background-color: var(--gray_1);

  .title1 {
    font-size: 1.75rem;
    font-weight: bold;

    small {
      font-size: 1.125rem;

      color: var(--negative);
    }
  }

  .container--search {
    width: 95%;

    display: flex;

    position: relative;
    .inputSearch {
      width: 100%;
      height: 60px;

      border-radius: 8px;
      border: solid 2px var(--gray_2);

      color: var(--gray_3);
    }
    .inputSearch::placeholder {
      padding-left: 10px;
    }
    .buttonSearch {
      position: absolute;
      right: 15px;
      top: 20%;

      height: 40px;
      width: 100px;

      border-radius: 8px;

      border: solid 1px var(--color-primary);
      background-color: var(--color-primary);
      color: #fff;

      font-size: 0.875rem;
    }
    .buttonSearch:focus {
      color: var(--color-primary);
      background-color: #fff;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;

    height: 80px;

    .title1 {
      margin-left: 5%;
    }

    .container--search {
      width: 365px;

      margin-right: 5%;
      .inputSearch {
        height: 60px;
      }
    }
  }
`;
