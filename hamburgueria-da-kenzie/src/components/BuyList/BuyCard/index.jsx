import { StyledBuyCard } from "./styles";

export const BuyCard = ({ menu }) => {
  return (
    <StyledBuyCard>
      <div>
        <img src={menu.img} alt="" />
      </div>
      <div className="separator">
        <h5>{menu.name}</h5>
        <small>{menu.category}</small>
      </div>
      <button>Remover</button>
    </StyledBuyCard>
  );
};
