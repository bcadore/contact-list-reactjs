import styled, { createGlobalStyle } from 'styled-components';
import { breakpoints } from './breakpoints';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0d1b2a;
  };
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0 auto;

  @media (min-width: ${breakpoints.sm}) {
    max-width: 540px;
  }
  @media (min-width: ${breakpoints.md}) {
    max-width: 720px;
  }
  @media (min-width: ${breakpoints.lg}) {
    max-width: 960px;
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 1140px;
  }
  @media (min-width: ${breakpoints.xxl}) {
    max-width: 1320px;
  }
`;

export default EstiloGlobal;
