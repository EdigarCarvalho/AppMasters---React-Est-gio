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
  display:flex;
  justify-content: space-evenly;
  align-items: center;

  .site-name, .genre-select{
    transform: rotate(180deg);
  }

  .genre-select{
    width: 7rem;
  }
  .site-name{
    font-size: 1.4rem;
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

  `;

