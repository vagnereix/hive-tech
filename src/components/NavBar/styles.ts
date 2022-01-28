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

  margin: 0 125px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  height: 80px;
  cursor: pointer;
  animation: entryAnimation 1s linear forwards;
`;

export const List = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: entryAnimation 1s linear forwards;
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
