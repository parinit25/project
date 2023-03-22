class apiCartServices {
  static getInstance() {
    return new apiCartServices();
  }
  addStockItems = async (data) => {
    console.log(data);
    const response = await fetch(
      `https://medicine-dc895-default-rtdb.firebaseio.com/stock.json`,
      {
        method: "POST",
        body: JSON.stringify({
          name: data.title,
          description: data.description,
          amount: data.amount,
          quantity: data.quantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  };
  getStockItems = async () => {
    console.log("get");
    const response = await fetch(
      `https://medicine-dc895-default-rtdb.firebaseio.com/stock.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  };
  postCart = async (cart) => {
    const response = await fetch(
      `https://medicine-dc895-default-rtdb.firebaseio.com/cart.json`,
      {
        method: "POST",
        body: JSON.stringify({
          name: cart.name,
          description: cart.description,
          amount: cart.amount,
          quantity: cart.quantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  getCart = async (cart) => {
    const response = await fetch(
      `https://medicine-dc895-default-rtdb.firebaseio.com/cart.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  };
}
export const apiCartService = apiCartServices.getInstance();
