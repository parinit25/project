import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../reducer/cart-slice";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Cart() {
  const cartOpen = useSelector((state) => state.cart.cartOpen);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartItems);
  console.log(cartData);

  const handleClose = () => {
    dispatch(cartAction.hideCart());
  };

  return (
    <div>
      <Dialog
        open={cartOpen}
        fullScreen
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <h1>Cart</h1>
        {cartData.length > 0 ? (
          <>
            {cartData.map((cart) => (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{cart.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Description:{cart.description}
                      <br />
                      Quantity:{cart.quantity}
                      <br />
                      Subtotal:{+cart.quantity * +cart.amount}
                      <br />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            ))}
          </>
        ) : (
          <h1>Nothing in Cart</h1>
        )}
      </Dialog>
    </div>
  );
}
