import { css } from 'styled-components';

export const sizes = {
  desktopXL: 1400,
  desktop: 1024,
  tablet: 768,
  mobile: 320,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
