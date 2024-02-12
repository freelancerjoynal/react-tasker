export default function taskReducer(state, action) {
  switch (action.type) {
    case "addnew": {
      return [action.task, ...state];
      break;
    }
    case "delete": {
      const tasks = state.filter((task) => task.id !== action.id);
      return tasks;
      break;
    }
    case "delete-all": {
      return [];
    }

    default: {
      console.log("Default action");
    }
  }
}
