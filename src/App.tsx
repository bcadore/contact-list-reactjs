import HeaderPage from './containers/HeaderPage';

import EstiloGlobal, { Container } from './styles';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <HeaderPage />
      </Container>
    </>
  );
}

export default App;
