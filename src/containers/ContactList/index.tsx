import ContactCard from '../../components/ContactCard';
import * as S from './styles';
import { Contact } from '../../components/ContactCard/types';

const contacts: Contact[] = [
  {
    id: 1,
    name: 'Teste Name',
    email: 'teste@email.com',
    phone: '01-12345-6789',
  },
  {
    id: 2,
    name: 'Teste Name',
    email: 'teste@email.com',
    phone: '01-12345-6789',
  },
  {
    id: 3,
    name: 'Teste Name',
    email: 'teste@email.com',
    phone: '01-12345-6789',
  },
];

const ContactList = () => (
  <S.ListWrapper>
    {contacts.map((c) => (
      <>
        <ContactCard key={c.id} contact={c} />
      </>
    ))}
  </S.ListWrapper>
);

export default ContactList;
