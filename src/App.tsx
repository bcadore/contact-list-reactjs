import ContactList from './containers/ContactList';
import HeaderPage from './containers/HeaderPage';

import EstiloGlobal, { Container } from './styles';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <HeaderPage />
        <ContactList />
      </Container>
    </>
  );
}

export default App;
