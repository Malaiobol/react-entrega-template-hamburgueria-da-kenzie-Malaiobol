import { StyledHeader } from "./styles";
import { StyledButton } from "../../Styles/components/Button/style";
import Logo from "./img/logo.png";

export const Header = () => {
  // function searchProduct(){

  // }

  return (
    <StyledHeader>
      <div className="logo">
        <img src={Logo} alt=""></img>
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
