import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: relative;
  padding: 0rem;

  margin: 0rem;
  width: 100vw;
  height: 8rem;

  border-radius: 100% / 100% 50% 0 0;
  transform: rotate(180deg);
  background-color: var(--full-black);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .site-name,
  .genre-select {
    transform: rotate(180deg);
  }

  .genre-select {
    width: 9rem; 
    *{background-color: var(--translucent-black) !important}
    *{color: var(--white) !important}

  }
  .site-name {
    font-size: 1.5rem;
    color: var(--white);
    font-weight: 200;
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

export const HeaderInputStyle = styled.input`
  font-family: 'Roboto', sans-serif;
  padding-left:10px;
  transform: rotate(180deg);
  width: 36rem;
  height: 2.375rem;
  background-color: var(--solid-black);
  color: var(--white);
  border-radius: 15px;
  font-weight: 500;
  font-size: 1.1rem;
  font-style: italic;
  @media only screen and (max-width: 480px) {
    width: 15rem;
  }

  `;

