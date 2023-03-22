import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePage from "./components/HomePage";
import { getCartAction, getStockItemsAction } from "./reducer/asyncCartReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStockItemsAction());
    dispatch(getCartAction());
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
