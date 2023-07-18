import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: relative;
  padding: 0rem;

  margin: 0rem;
  width: 100vw;
  height: 6rem; 
  margin-bottom: 1.5rem;

  border-radius: 100% / 100% 50% 0 0;
  transform: rotate(180deg);
  background-color: var(--full-black);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .site-name{
    transform: rotate(180deg);
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


