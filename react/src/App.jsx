import "./App.css";

import SortingPrice from "./components/Assignments/SortingPrice";
import SortPriceGreaterThen from "./components/Assignments/SortPriceGreaterThen";
import IncreasePriceByTen from "./components/Assignments/IncreasePriceByTen";
import StartWithAlphabet from "./components/Assignments/StartWithAlphabet";
import ThreeMostExpProduct from "./components/Assignments/ThreeMostExpProduct";
import BelowAndAboveAvg from "./components/Assignments/BelowAndAboveAvg";


  // ------------------------Assignment Data-----------------------------
  function App() {
 let products = [
  {
    name: "Laptop",
    price: 8000,
      status: true,
 },  
 {
     name: "Mobile",
   price: 5000,
   status: false,
   },
  {
     name: "AirPods",
     price: 15000,
    status: true,
  },
 ];

  return (
    <>
  
      <AvailableStock products={products} />
      <SortingPrice products={products} />
      <SortPriceGreaterThen products={products}/>
      <IncreasePriceByTen products={products}/>
      <StartWithAlphabet products={products}/>
      <ThreeMostExpProduct products={products}/>
      <BelowAndAboveAvg products={products}/>
    </>
  );
}


export default App;






