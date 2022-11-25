import { StyledBurguerCard } from "./styles";

export const BurguerCard = ({ menu, children }) => {
  return (
    <StyledBurguerCard>
      <div className="backgroundImg">
        <img src={menu.img} alt="" className="burguerImg" />
      </div>
      <h4 className="burguerName">{menu.name}</h4>
      <small className="burguerClass">{menu.category}</small>
      <p className="burguerPrice">R${menu.price}</p>
      {children}
    </StyledBurguerCard>
  );
};
