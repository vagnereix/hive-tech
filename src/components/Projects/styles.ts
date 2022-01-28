import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  margin: 100px 125px;
`;

export const Image = styled.img`
  position: absolute;

  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);

  width: 800px;
  opacity: 0.25;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 3.75rem;
`;

export const Text = styled.span`
  color: #fff;
  display: block;
  font-size: 1.75rem;
  margin-bottom: 3.125rem;
  text-transform: uppercase;
`;
