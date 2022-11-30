import { StyledHistoric } from "./style";
import { StyledButton } from "../../Styles/components/Button/style";

export const SearchHistoric = ({ clearHistoric, actualCategory }) => {
  return (
    <StyledHistoric>
      <h2>
        Resultado para:<span>{actualCategory}</span>
      </h2>
      <StyledButton onClick={clearHistoric}>Limpar Busca</StyledButton>
    </StyledHistoric>
  );
};
