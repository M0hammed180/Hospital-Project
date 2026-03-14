const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoggedIn: savedUser ? true : false,
  user: savedUser || {
    role: "patient",
    username: "",
    password: "",
  },
};

function login(state = initialState, action) {
  switch (action.type) {

    case "LOGIN":

        localStorage.setItem("user", JSON.stringify(action.payload))
        
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    case "LOGOUT":
        
        localStorage.removeItem("user")

      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
}

export default login;
