import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard";
import HouseCard from "./components/HouseCard";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />

    </div>
  );
}

export default App;
