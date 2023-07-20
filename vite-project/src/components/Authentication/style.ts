import { styled } from "styled-components";

export const AuthPageStyle = styled.div`
    background-color: var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 84vh;
`

export const CenterComponentStyle = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  width: min(60vw, 1000px);
  border-radius: 15px;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.4);

  .left-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 0.8;
    gap: 1rem;
    align-items: center;

    div {
      width: 76%;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;

      label {
        font-size: clamp(0.7rem, 0.9rem, 1rem);
      }

      input {
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        font-size: clamp(0.7rem, 0.9rem, 1rem);
      }
    }

    button{

      margin-top: 2vh;
      font-size: clamp(0.7rem, 0.9rem, 1rem);
      padding: 1vh;
      width: 50%;
      background-color: var(--solid-black);
      border: none;
      color: var(--white);
      cursor: pointer;
    }

    p {
        a {
        text-decoration: none;
        color: var(--solid-black);
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  .right-div {
    width: 100%;
    background-color: var(--full-black);
    flex: 1.15;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;

  }

  @media (max-width: 768px) {
    width: min(80vw, 1000px);
    flex-direction: column-reverse;

    .left-div , .right-div {
      flex: 1;
    }

    .right-div {
        border-bottom-right-radius: 0px;
        border-top-left-radius: 15px;
    }

  }
`;