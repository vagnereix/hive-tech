import 'aos/dist/aos.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: #111111;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 300 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @keyframes entryAnimation {
    from {
      opacity: 0;
      transform: translate(-20px, -50px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  // New animation to AOS library
  [data-aos='entry-animation'] {
    opacity: 0;
    transform: translate(-50px, -60px);

    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;
