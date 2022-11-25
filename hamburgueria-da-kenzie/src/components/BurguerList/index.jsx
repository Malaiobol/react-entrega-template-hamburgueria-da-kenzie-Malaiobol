import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";

import { StyledBurguerList } from "./styles";
import { BurguerCard } from "./BurguerCard";

export const BurguerList = () => {
  const [menu, setMenu] = useState([]);
  console.log(menu);
  useEffect(() => {
    async function getBurguerItem() {
      try {
        const response = await api.get("/products");
        setMenu(response.data);
      } catch (err) {
        console.log(err);
      } finally {
      }
    }
    getBurguerItem();
  }, []);

  return (
    <StyledBurguerList>
      {menu.map((actualItem) => (
        <BurguerCard menu={actualItem} key={actualItem.index} />
      ))}
    </StyledBurguerList>
  );
};
