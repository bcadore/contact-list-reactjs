import * as S from './styles';

interface Props {
  label: string;
  onClick: () => void;
}

const ContactButton = ({ label, onClick }: Props) => (
  <S.Button onClick={onClick}>{label}</S.Button>
);

export default ContactButton;
