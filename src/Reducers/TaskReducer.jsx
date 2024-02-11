export default function taskReducer(state, action) {
  switch (action.type) {
    case "addnew": {
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          title: "Integration API 3",
          description:
            "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
          tags: "a,b,c,d",
          priority: "High",
          done: true,
        },
      ];
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
