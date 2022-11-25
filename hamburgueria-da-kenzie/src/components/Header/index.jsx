import { StyledHeader } from "./styles";
import Logo from "./img/logo.png";
import { StyledButton } from "../../services/components/Button/style";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <img src={Logo}></img>
      </div>
      <div className="searchDiv">
        <input
          type="search"
          name=""
          id=""
          placeholder="Pesquise aqui seu produto"
        />
        <StyledButton>Iniciar</StyledButton>
      </div>
    </StyledHeader>
  );
};
