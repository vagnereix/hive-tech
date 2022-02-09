import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 125px;

  background-image: linear-gradient(90deg, #bd34fe, #ffa800);
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const Container = styled.div`
  height: 100%;

  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1160px) {
    padding: 0 2rem;
  }
`;

export const Image = styled.img`
  height: 80px;
  cursor: pointer;

  &:focus,
  &:focus-visible {
    animation: pulse 0.5s linear;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    75% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const List = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  color: white;
  font-weight: 200;

  padding: 15px;
  cursor: pointer;

  background-image: linear-gradient(90deg, #ffa800, #bd34fe);
  background-size: 0% 3px;
  background-repeat: no-repeat;
  background-position: left bottom;

  transition: 0.5s;

  &:hover {
    background-size: 100% 3px;
  }
`;
