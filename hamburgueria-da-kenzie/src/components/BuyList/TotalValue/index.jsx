import { StyledTotalValue } from "./styles";

export const TotalValue = ({ selectedList, removeAll }) => {
  const valueList = selectedList.map((item) => item.price);
  const totalValue = valueList.reduce(
    (accumulator, index) => accumulator + index,
    0
  );

  return (
    <StyledTotalValue>
      <div>
        <p>
          Total
          <span>
            {totalValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <button onClick={removeAll}>Remover Todos</button>
      </div>
    </StyledTotalValue>
  );
};
