import { StyledHistoric } from "./style";
import { StyledButton } from "../../Styles/components/Button/style";

export const Historic = () => {
  return (
    <StyledHistoric>
      <h2>
        Resultado para:<span>Exemplo</span>
      </h2>
      <StyledButton>Limpar Busca</StyledButton>
    </StyledHistoric>
  );
};
