import { useState } from "react";

import { StyledHeader } from "./styles";
import { StyledButton } from "../../Styles/components/Button/style";
import Logo from "./img/logo.png";

export const Header = ({ searchByCategory }) => {
  const [actualSearch, setSearch] = useState("");

  function search(e) {
    e.preventDefault();
    searchByCategory(actualSearch);
  }

  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt=""></img>
      </div>
      <form onSubmit={(e) => search(e)}>
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Pesquise aqui seu produto"
        />
        <StyledButton type="submit">Pesquisar</StyledButton>
      </form>
    </StyledHeader>
  );
};
