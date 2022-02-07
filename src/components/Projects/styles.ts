import styled from 'styled-components';

export const Container = styled.main`
  position: relative;

  max-width: 1120px;
  margin: 100px auto;

  @media (max-width: 1160px) {
    padding: 0 2rem;
  }
`;

export const Image = styled.img`
  position: absolute;

  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);

  width: 100%;
  opacity: 0.25;
  max-width: 800px;
  aspect-ratio: 1 / 0.9;
`;

export const Content = styled.div`
  gap: 3.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const Text = styled.span`
  color: #fff;
  display: block;
  font-size: 1.75rem;
  margin-bottom: 3.125rem;
  text-transform: uppercase;
`;
