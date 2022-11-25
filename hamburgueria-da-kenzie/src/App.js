import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { api } from "./services/api";
import { Header } from "./components/Header";
import { Historic } from "./components/Historic";
import { StyledBurguerList } from "./Styles/components/BurguerList/styles";
import { BurguerCard } from "./components/BurguerCard";
import { StyledButton } from "./Styles/components/Button/style";
import { BuyList } from "./components/BuyList";

function App() {
  const [selectedList, setNewItem] = useState([]);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    async function getBurguerItem() {
      try {
        const response = await api.get("/products");
        setMenu(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getBurguerItem();
  }, []);

  function addNewItem(newItem) {
    setNewItem([...selectedList, newItem]);
    // const newList = selectedList.filter((item) => item.id === newItem.id);
    // console.log(newList);
    // setNewItem(newList);
  }

  function removeItem(oldItemId) {
    const newList = selectedList.filter((item) => item.id !== oldItemId);
    setNewItem(newList);
  }

  function removeAll() {
    const newList = [];
    setNewItem(newList);
  }
  return (
    <>
      <Header />
      <>
        <Historic />
        <div className="flex">
          <StyledBurguerList menu={menu}>
            {menu.map((actualItem) => (
              <BurguerCard menu={actualItem} key={actualItem.id}>
                <StyledButton onClick={() => addNewItem(actualItem)}>
                  Adicionar
                </StyledButton>
              </BurguerCard>
            ))}
          </StyledBurguerList>
          <BuyList
            selectedList={selectedList}
            removeItem={removeItem}
            removeAll={removeAll}
          />
        </div>
      </>
    </>
  );
}

export default App;
