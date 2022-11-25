import { Header } from "./components/Header";
import { BurguerList } from "./components/BurguerList";
import { Historic } from "./components/Historic";

function App() {
  return (
    <>
      <Header />
      <>
        <Historic />
        <BurguerList />
      </>
    </>
  );
}

export default App;
