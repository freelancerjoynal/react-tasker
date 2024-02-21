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
      break;
    }
    case "update": {
      return state.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
      break;
    }

    default: {
      console.log("Default action");
    }
  }
}
