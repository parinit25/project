import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import styles from "../css/Css.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { postCartAction } from "../reducer/asyncCartReducer";

export const MedicineList = () => {
  const [quantity, setQuantity] = useState(0);
  const medicineList = useSelector((state) => state.cart.stockItems);
  const dispatch = useDispatch();
  console.log(medicineList);
  const addItemstoCart = (cart) => {
    console.log(cart);
    dispatch(postCartAction(cart));
    setQuantity(0);
  };

  return (
    <div className={styles.right}>
      <Paper
        elevation={3}
        sx={{
          ml: 3,
          width: "100%",
          maxWidth: 700,
          mt: 2,
        }}
      >
        <TableContainer>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Medicine Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Amount&nbsp;</TableCell>
                <TableCell align="right">Quantity&nbsp;</TableCell>
                <TableCell align="right">Add To Cart&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {medicineList.map((medicine) => (
                <TableRow
                  key={medicineList.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {medicine.name}
                  </TableCell>
                  <TableCell align="right">{medicine.description}</TableCell>
                  <TableCell align="right">{medicine.amount}</TableCell>
                  <TableCell align="right">{medicine.quantity}</TableCell>
                  <input
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{
                      width: "2rem",
                      marginTop: "1rem",
                      marginLeft: "3rem",
                    }}
                  />
                  <button
                    onClick={() =>
                      addItemstoCart({
                        key: medicine.key,
                        name: medicine.name,
                        description: medicine.description,
                        amount: medicine.amount,
                        quantity: quantity,
                      })
                    }
                  >
                    +
                  </button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
