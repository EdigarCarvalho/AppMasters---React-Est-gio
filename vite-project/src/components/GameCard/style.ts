//style.ts
import styled from "styled-components";

interface StyledGameCardProps {
  ishover: boolean | string;
}

export const StyledGameCard = styled.div<StyledGameCardProps>`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 1.2rem;
  background-color: var(--translucent-black);
  color: white;
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;

  .front-content img {
    border-radius: 1rem;
    width: 20rem;
  }

  h2 {
    font-weight: 200;
    font-size: clamp(1.4rem, 1.8rem, 1.9rem);
    margin: 0rem;
    margin-top: 0.33rem;
    padding: 0rem;
  }

  h3 {
    font-weight: 300;
    font-size: clamp(0.7rem, 1rem, 1.1rem);
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

  a {
    text-decoration: none;
    border-radius: 15px;
    border: 1px solid #fff;
    font-size: 1rem;
    font-weight: 200;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 1rem;
    padding-left: 1rem;
    color: var(--white);
  }

  .normal-state {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .space {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
  }



  @media (max-width: 480px) {
    width: 16rem;
    min-height: 11.5rem;

    h2 {
      font-size: 1.6rem;
      margin-top: 0rem;
    }

    p {
      font-size: 0.75rem;
    }
    .front-content img {
      width: 15.9rem;
      padding-bottom: 0rem;
    }

    h3 {
      font-size: 0.84rem;
    }
  }

  @media (max-width: 820px) and (min-width: 480px) {
    width: 16rem;
    min-height: 12rem;

    .front-content img {
      width: 16rem;
      padding-bottom: 0rem;
    }

    h3 {
      font-size: 0.84rem;
    }
    h2 {
      font-size: 1.6rem;
      margin-top: 0rem;
    }
    p {
      font-size: 0.75rem;
    }
  }

  width: 20rem;
  min-height: 15.9rem;
  perspective: 1000px;

  .card {
    z-index: 0;
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    transform: ${(props) => (props.ishover ? "rotateY(180deg)" : "rotateY(0)")};
  }

  .front-content,
  .back-content {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .back-content {
    transform: rotateY(180deg);
  }
`;
