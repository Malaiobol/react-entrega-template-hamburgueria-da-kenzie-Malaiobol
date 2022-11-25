import { Header } from "./components/Header";
import { BurguerList } from "./components/BurguerList";
import { Historic } from "./components/Historic";
import { BuyList } from "./components/BuyList";

function App() {
  return (
    <>
      <Header />
      <>
        <Historic />
        <div className="flex">
          <BurguerList />
          <BuyList />
        </div>
      </>
    </>
  );
}

export default App;
