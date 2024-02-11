import React, { createContext, useContext, useReducer, useState } from "react";
import { initialTasks } from "../Database/Tasks";
import modalReducer from "../Reducers/ModalReducer";
import TaskReducer from "../Reducers/TaskReducer";

//Task context

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

//Modal context
export const ModalContext = createContext(null);
export const ModalDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);
  const [modal, Modaldispatch] = useReducer(modalReducer, false);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredTask = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        searchTerm,
        setSearchTerm,
        filteredTask,
      }}
    >
      <TaskDispatchContext.Provider value={dispatch}>
        <ModalContext.Provider value={modal}>
          <ModalDispatchContext.Provider value={Modaldispatch}>
            {children}
          </ModalDispatchContext.Provider>
        </ModalContext.Provider>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

//Export task context and reducer
export function useTasks() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}

//Export modal context and reducer
export function useModalLog() {
  return useContext(ModalContext);
}

export function useModalDispatch() {
  return useContext(ModalDispatchContext);
}
