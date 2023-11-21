import { BrowserRouter } from "react-router-dom";
import Router from "./hoc/Router";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;