import styled from "styled-components";

export const GameCardCollectionStyled = styled.div`
    padding: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    justify-items: center;
    gap: 3rem;


  @media(max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0rem;
    padding-top: 1.2rem;
  }

  @media (max-width: 820px) and (min-width: 480px) {
    
    grid-template-columns: 1fr 1fr;

  }
`