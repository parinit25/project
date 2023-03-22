import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import React, { Fragment, useEffect, useState } from "react";
import styles from "../css/Css.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { addStockItemsAction } from "../reducer/asyncCartReducer";

export const MedicineAddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const medicine = {
      title: title,
      description: description,
      amount: amount,
      quantity: quantity,
    };
    dispatch(addStockItemsAction(medicine));
  };
  return (
    <div className={styles.left}>
      <Paper
        elevation={3}
        sx={{
          ml: 3,
          width: "100%",
          maxWidth: 700,
          mt: 2,
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Add Stock
          </Typography>
          <TextField
            type="text"
            label="Medicine Name"
            required
            fullWidth
            margin="normal"
            sx={{ width: "92%", ml: 2 }}
            onChange={(e) => setTitle(e.target.value)}
          ></TextField>
          <TextField
            type="text"
            label=" Medicine Description"
            required
            fullWidth
            margin="normal"
            sx={{ width: "92%", ml: 2 }}
            onChange={(e) => setDescription(e.target.value)}
          ></TextField>
          <TextField
            type="number"
            label="Amount"
            required
            fullWidth
            margin="normal"
            sx={{ width: "92%", ml: 2 }}
            onChange={(e) => setAmount(e.target.value)}
          ></TextField>
          <TextField
            type="number"
            label="Quantity"
            required
            fullWidth
            margin="normal"
            sx={{ width: "92%", ml: 2 }}
            onChange={(e) => setQuantity(e.target.value)}
          ></TextField>
          <Button
            sx={{ width: "92%", ml: 2, mb: 2, mt: 2 }}
            variant="contained"
            onClick={handleSubmit}
          >
            {"Submit"}
          </Button>
        </Box>
      </Paper>
    </div>
  );
};
