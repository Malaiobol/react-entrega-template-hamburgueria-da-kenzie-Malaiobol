import { TotalValue } from "./TotalValue";
import { BuyListHeader } from "./BuyHeader";
import { BuyCard } from "./BuyCard";
import { StyledBuysList } from "./styles";

export const BuyList = () => {
  return (
    <StyledBuysList>
      <BuyListHeader />
      <BuyCard />
      <TotalValue />
    </StyledBuysList>
  );
};
