import { StyledTotalValue } from "./style";
import { StyledButton } from "../../Styles/components/Button/style";

export const TotalValue = ({ clearHistoric, actualCategory }) => {
  return (
    <StyledTotalValue>
      <h2>
        Resultado para:<span>{actualCategory}</span>
      </h2>
      <StyledButton onClick={clearHistoric}>Limpar Busca</StyledButton>
    </StyledTotalValue>
  );
};
