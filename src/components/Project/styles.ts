import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 430px;
  border-radius: 0.25rem;

  &:nth-child(2n) {
    section {
      background: radial-gradient(
          50% 50% at 50% 50%,
          #ffffff 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(
          225.92deg,
          #33d2ff 5.73%,
          #3d68de 54.65%,
          #9845e8 96.75%
        );
    }
  }
`;

export const ImageBox = styled.section`
  width: 100%;
  height: 330px;
  overflow: hidden;
  border-radius: 0.25rem;
  background: radial-gradient(
      50% 50% at 50% 50%,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(225.4deg, #fedc2a 0%, #dd5789 48.12%, #7a2c9e 93.59%);
`;

export const Image = styled.div`
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  margin-top: 30px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Data = styled.div`
  gap: 12px;
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
`;

export const Description = styled.span`
  color: #c4c4c4;
  text-transform: uppercase;
`;

export const LinkIcons = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg:hover {
    cursor: pointer;
  }
`;
