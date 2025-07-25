import styled, { createGlobalStyle } from 'styled-components';

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
  display: flex;
  justify-content: center;
  max-width: 1024px;
  height: 100vh;
  margin: 0px auto;
  overflow-y: hidden;
`;

export default EstiloGlobal;
