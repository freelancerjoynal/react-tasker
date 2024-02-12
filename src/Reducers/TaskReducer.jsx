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
    case "search": {
      console.log(action.keyword);
      if (action.keyword === "") {
        return [];
      } else {
        return state;
      }
      break;
    }

    default: {
      console.log("Default action");
    }
  }
}
