import styled from "styled-components";

export const StyledGameCard = styled.div`
  
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  padding: 1.2rem;
  background-color: var(--translucent-black);
  color: white;
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;

  width: 20rem;
  min-height: 15rem;

  img{
    border-radius: 1rem;
  }

  h2 {
    font-weight: 200;
    font-size: 1.82rem;
    margin: 0rem;
    margin-top: 0.43rem;
    padding: 0rem;
  }

  p {
    margin: 0rem;
    padding: 0rem;
    font-size: 0.95rem;
    font-weight: 200;
  }

  .normal-state{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media(max-width: 480px) {
    width: 15rem;
    min-height: 10rem;
  }

  @media (max-width: 820px) and (min-width: 480px) {
    
    width: 13rem;
    min-height: 7rem;

  }

`;