import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: relative;
  padding: 0rem;
  margin: 0rem;
  width: 100vw;
  height: 5rem;
  margin-bottom: 1.5rem;
  background-color: var(--full-black);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 70vw;

  
  .site-name {
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--white);
    font-weight: 200;
  }

  .text-header {
    font-size: 1rem;
    color: var(--white);
    font-weight: 300;
    text-decoration: none;
    transition: 0.05s;

    &:hover{
      font-size: 1.1rem;
      font-weight: 500;
    }
  }

  div{
    display: flex;
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10vw;
  }
`;
