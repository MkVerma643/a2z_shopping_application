var a2z = function (
  state = {
    isLoggedIn: false,
    cart: [],
    address: [],
    cartUpdate: false,
    cartTotal: 0,
    cartTotalItems: 0,
  },
  action
) {
  switch (action.type) {
    //LOGIN
    case "LOGIN": {
      console.log("Reducers Login Case");
      state = { ...state };
      state["isLoggedin"] = true;
      state["isfetching"] = true;
      return state;
    }
    case "LOGIN_SUCCESS": {
      console.log("Login Success Case");
      state = { ...state };
      state["isLoggedin"] = true;
      state["user"] = action.payload;
      state["isfetching"] = false;
      state["isloginerror"] = false;
      return state;
    }
    case "LOGIN_FAILURE": {
      console.log("Login Failure Case");
      state = { ...state };
      state["isfetching"] = false;
      state["isloginerror"] = true;
      return state;
    }
    //
    case "LOGOUT": {
      console.log("redux logic for logout");
      state = { ...state };
      localStorage.clear();
      delete state["isLoggedin"];
      delete state["user"];
      return state;
    }
    case "ALL_PRODUCT": {
      console.log("Reducers Products State");
      state = { ...state };
      state["products"] = { data: action.payload };
      return state;
    }
    case "PRODUCT_DETAILS": {
      console.log("Reducers Products Details State");
      state = { ...state };
      state["products_details"] = { data: action.payload };
      return state;
    }
    case "CART": {
      console.log("redux cart");
      state = { ...state };
      state["cart"] = { data: action.payload };
      return state;
    }
    case "UPDATE-CART": {
      console.log("redux update cart", state.updatecart);
      state = { ...state };
      state["updatecart"] = action.payload;
      return state;
    }
    case "ADDRESS": {
      console.log("redux address Session");
      state = { ...state };
      state["isaddress"] = true;
      state["address"] = action.payload;
      return state;
    }
    case "CHECKOUT": {
      console.log("redux checkout Session");
      state = { ...state };
      state["page"] = action.payload;
      return state;
    }
    case "ORDERS": {
      console.log("redux orders Session");
      state = { ...state };
      state["order"] = action.payload;
      return state;
    }

    default:
      return state;
  }
};

export default a2z;
