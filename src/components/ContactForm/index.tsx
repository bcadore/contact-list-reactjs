import * as S from './styles';
import { Contact } from './types';

interface Props {
  contact: Contact;
}

const ContactForm = ({ contact }: Props) => (
  <S.Form>
    <label htmlFor="contactName">Nome:</label>
    <input
      type="text"
      name="contactName"
      id="contactName"
      value={contact.name}
      readOnly
    />

    <label htmlFor="contactEmail">E-mail:</label>
    <input
      type="email"
      name="contactEmail"
      id="contactEmail"
      value={contact.email}
      readOnly
    />

    <label htmlFor="contactPhone">Telefone:</label>
    <input
      type="tel"
      name="contactPhone"
      id="contactPhone"
      value={contact.phone}
      readOnly
    />
  </S.Form>
);

export default ContactForm;
