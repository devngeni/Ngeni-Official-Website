const initialState = {
    users: null,
  };
  
 function TestReducer(state = initialState, action) {
    switch (action.type) {
      case "DO_THIS":
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  }
  export default TestReducer;