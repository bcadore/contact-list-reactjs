import * as S from './styles';
import ContactForm from '../ContactForm';
import ContactButton from '../ContactButton';
import { Contact } from './types';

interface Props {
  contact: Contact;
}

const ContactCard = ({ contact }: Props) => (
  <S.CardWrapper>
    <ContactForm contact={contact} />
    <S.ButtonsWrapper>
      <ContactButton label="Editar" onClick={() => alert('Editar')} />
      <ContactButton label="Excluir" onClick={() => alert('Excluir')} />
    </S.ButtonsWrapper>
  </S.CardWrapper>
);

export default ContactCard;
