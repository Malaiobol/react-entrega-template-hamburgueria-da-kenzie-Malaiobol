import { StyledBuyCard } from "./styles";
import ImgBurguer from "../../BurguerList/BurguerCard/202109200440_8fcy91zr6le 1.png";

export const BuyCard = () => {
  return (
    <StyledBuyCard>
      <div>
        <img src={ImgBurguer} alt="" />
      </div>
      <div className="separator">
        <h5>Burguer Name</h5>
        <small>Burguer Class</small>
      </div>
      <button>Remover</button>
    </StyledBuyCard>
  );
};
