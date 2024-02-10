export default function taskReducer(draft, action) {
  switch (action.type) {
    case "added": {
      console.log("added action");
    }
    default: {
      console.log("Default action");
    }
  }
}
