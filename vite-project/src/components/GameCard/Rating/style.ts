import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
`;

export const Star = styled(FaStar)`
  color: ${({ active }) => (active ? '#ff9c1a' : '#e6e6e6')};
  font-size: 2.1vh;
  cursor: pointer;
  transition: color 0.2s ease;
`;


