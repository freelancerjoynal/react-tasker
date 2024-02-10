export default function taskReducer(state, action) {
  switch (action.type) {
    case "addnew": {
      console.log("Show modal please");
      break;
    }
    default: {
      console.log("Default action");
    }
  }
}
