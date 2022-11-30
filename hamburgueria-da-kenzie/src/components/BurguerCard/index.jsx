import { StyledBurguerCard } from "./styles";

export const BurguerCard = ({ menu, children }) => {
  return (
    <StyledBurguerCard>
      <div>
        <img src={menu.img} alt="" className="burguerImg" />
      </div>
      <h4>{menu.name}</h4>
      <small>{menu.category}</small>
      <p>
        {menu.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      {children}
    </StyledBurguerCard>
  );
};
