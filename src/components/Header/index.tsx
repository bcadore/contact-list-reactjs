import * as S from './styles';
import logo from '../../assets/logo.png';

const Header = () => (
  <S.HeaderDiv>
    <S.LogoImage src={logo} alt="Logo Conecta+ App" />
    <S.PageTitle>Presente a onde você estiver</S.PageTitle>
  </S.HeaderDiv>
);

export default Header;
