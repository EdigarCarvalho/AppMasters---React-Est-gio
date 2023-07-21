import styled from "styled-components";

export const FiltersStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: min(4vh, 10px);

  .genre-select {
    width: 9rem; 
    *{background-color: var(--translucent-black) !important}
    *{color: var(--white) !important}

  }

  @media(max-width: 480px) {

    border-radius: 100% / 90% 90% 0 0;
    flex-direction: column;

    .site-name {
    display: none;
    }
  }

  @media (max-width: 820px) and (min-width: 480px) {
    
    border-radius: 100% / 90% 90% 0 0;
    flex-direction: column;

    .site-name {
      display: none;
  }
}
`;

export const InputStyle = styled.input`
  font-family: 'Roboto', sans-serif;
  padding-left:10px;
  width: 36rem;
  height: 2.375rem;
  background-color: var(--translucent-black);
  color: var(--white);
  border-radius: 15px;
  font-weight: 500;
  font-size: 1.1rem;
  font-style: italic;
  
  @media only screen and (max-width: 480px) {
    width: 15rem;
  }

  `;

