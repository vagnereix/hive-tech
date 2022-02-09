import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  margin: 100px auto;
  padding: 100px 1rem;

  display: grid;
  place-items: center;

  @media (max-width: 1160px) {
    overflow: hidden;
    min-height: 550px;
  }
`;

export const Image = styled.img`
  position: absolute;

  width: 300px;
  aspect-ratio: 1 / 0.75;

  z-index: --i;

  &[data-aos='imageAnimation'] {
    &:nth-child(2) {
      transform: translate(-80px, -60px);
    }
    &:nth-child(3) {
      transform: translate(60px, -20px);
    }
    &:nth-child(4) {
      transform: translate(50px, 50px);
    }
    &:nth-child(5) {
      transform: translate(-60px, 60px);
    }

    transition-delay: 0.5s;
    transition-property: transform opacity;

    &.aos-animate {
      &:nth-child(2) {
        opacity: 0.6;
        transform: rotate(-30deg) translate(-70px, -170px);
      }
      &:nth-child(3) {
        opacity: 0.6;
        transform: rotate(30deg) translate(20px, -115px);
        /* rotate(30deg) translate(35px, -135px) */
      }
      &:nth-child(4) {
        opacity: 0.6;
        transform: rotate(45deg) translate(170px, 0px);
      }
      &:nth-child(5) {
        opacity: 0.6;
        transform: rotate(-50deg) translate(-180px, -20px);
      }
    }
  }
`;

export const Content = styled.div`
  position: relative;

  display: grid;
  place-items: center;
`;

export const Text = styled.span`
  position: relative;
  z-index: 10;

  color: #fff;
  display: block;
  font-size: 60px;
  width: min-content;
  text-transform: uppercase;

  background-image: linear-gradient(90deg, #bd34fe, #ffa800);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &[data-aos='zindex'] {
    opacity: 0;
    line-height: 0.7;

    transition-delay: 0.5s;
    transition-property: line-height opacity;

    &.aos-animate {
      opacity: 1;
      line-height: 1;
    }
  }
`;
