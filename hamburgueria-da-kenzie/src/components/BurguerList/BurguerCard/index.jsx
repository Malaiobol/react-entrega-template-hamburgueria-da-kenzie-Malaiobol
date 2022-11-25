import { StyledBurguerCard } from "./styles";
import { StyledButton } from "../../../Styles/components/Button/style";

export const BurguerCard = (actualItem) => {
  console.log(actualItem.menu.id);
  return (
    <StyledBurguerCard>
      <div className="backgroundImg">
        <img src={actualItem.menu.img} alt="" className="burguerImg" />
      </div>
      <h4 className="burguerName">{actualItem.menu.name}</h4>
      <small className="burguerClass">{actualItem.menu.category}</small>
      <p className="burguerPrice">R${actualItem.menu.price}</p>
      <StyledButton>Adicionar</StyledButton>
    </StyledBurguerCard>
  );
};
