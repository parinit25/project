import React from "react";
import { MedicineAddForm } from "../pages/MedicineAddForm";
import { MedicineList } from "./MedicineList";
import Navbar from "./Navbar";
import styles from "../css/Css.module.css";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const HomePage = () => {
  const cartOpen = useSelector((state) => state.cart.cartOpen);
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <MedicineAddForm />
        <MedicineList />
        {cartOpen && <Cart />}
      </div>
    </div>
  );
};

export default HomePage;
