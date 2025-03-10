import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaurants } from "./redux/actions/restaurantActions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { getCart } from "./redux/actions/basketAction";

const App = () => {
  //Dispatch kurulumu yap
  const dispatch = useDispatch();

  //Sayfa yuklendiginde thunk fonk. ile api'a istek at ve gelen verileri reducera ilet
  useEffect(() => {
    //Restorant verilerini alan fonk.
    dispatch(getRestaurants());
    // cart verilerini alan fonk.
    dispatch(getCart());
  }, []);

  //Reducer'da verileri al ve kullan

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
