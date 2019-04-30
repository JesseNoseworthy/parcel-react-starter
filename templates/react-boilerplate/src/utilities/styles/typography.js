import theme from 'utilities/styles/theme';
import {css} from 'styled-components';
import media from 'utilities/styles/media';

export default () => css`
  * {
    color: ${theme.colors.black};
    font-family: ${theme.values.fonts.primary};
    font-weight: 400;
    letter-spacing: ${theme.values.letterSpacing};
  }

  html {
    color: ${theme.colors.black};
    font-size: ${theme.values.fontSize};
  }

  h1 {
    font-size: 2.4em;
    font-weight: 700;
    line-height: 2.625rem;
    letter-spacing: -0.7px;

    ${media.desktop`
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 3.75rem;
      letter-spacing: -0.1px;
    `};
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.25rem;

    ${media.desktop`
      font-size: 2rem;
      line-height: 2.625rem;
    `};
  }

  h3 {
    font-size: 1.333rem;
    line-height: 2.25rem;
    font-weight: 700;
    ${media.desktop`
      font-size: 1.5rem;
      line-height: 2.25rem;
    `};
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: ${theme.values.fonts.primary};
    font-weight: 700;
    ${media.desktop`
      font-size: 1.125rem;
      line-height: 1.625rem;
    `};
  }

  h5 {
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 1.125rem;
    letter-spacing: 1.05px;
    font-family: ${theme.values.fonts.primary};
    font-weight: 700;
    ${media.desktop`
      font-size: 1rem;
      line-height: 1.375rem;
      letter-spacing: 1.2px;
    `};
  }

  h6 {
    font-size: 0.8rem;
  }

  p,
  li,
  a,
  dt,
  dd,
  span,
  input,
  label,
  button {
    font-size: 0.9375rem;
    line-height: 1.438rem;
    font-family: ${theme.values.fonts.primary};
    &.large {
      font-size: 1.063rem;
      line-height: 1.625rem;
    }
    &.legal {
      font-size: 0.75rem;
      line-height: 1.125rem;
    }
    ${media.desktop`
      font-size: 1rem;
      line-height: 1.5rem;
      &.large {
        font-size: 1.25rem;
        line-height: 2rem;
      }
      &.legal {
        font-size: 0.75rem;
        line-height: 1.125rem;
      }
    `};
  }

  button {
    cursor: pointer;
  }
`;
