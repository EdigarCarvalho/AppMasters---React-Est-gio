import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const HeartStyle = styled(FaHeart)`
  color: ${({ active }) => (active === "true" ? 'red' : '#e6e6e6')};
  font-size: 2.1vh;
  cursor: pointer;
  transition: color 0.2s ease;
`;
