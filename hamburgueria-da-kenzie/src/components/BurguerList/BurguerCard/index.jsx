import { StyledBurguerCard } from "./styles";
import { StyledButton } from "../../../Styles/components/Button/style";
import LogoImg from "../BurguerCard/202109200440_8fcy91zr6le 1.png";

export const BurguerCard = () => {
  return (
    <StyledBurguerCard>
      <div className="backgroundImg">
        <img src={LogoImg} alt="" className="burguerImg" />
      </div>
      <h4 className="burguerName">Burguer Name</h4>
      <small className="burguerClass">Burguer Class</small>
      <p className="burguerPrice">R${}</p>
      <StyledButton>Adicionar</StyledButton>
    </StyledBurguerCard>
  );
};
