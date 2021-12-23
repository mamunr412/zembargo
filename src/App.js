import logo from "./logo.svg";
import "./App.css";
import Documents from "./components/Documents/Documents";
import SmallPallets from "./components/SmallPallets/SmallPallets";
import FoodDevlivery from "./components/FoodDelivery/FoodDevlivery";
import Pharmacy from "./components/Pharmacy/Pharmacy";

function App() {
  return (
    <div className="App">
      {/* <Documents></Documents> */}
      {/* <SmallPallets></SmallPallets> */}
      {/* <FoodDevlivery></FoodDevlivery> */}
      <Pharmacy></Pharmacy>
    </div>
  );
}

export default App;
