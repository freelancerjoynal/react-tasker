import React from "react";
import { useModalDispatch, useTaskDispatch } from "../Contexts/TaskContext";
import SearchForm from "./SearchForm";

const TaskBoardTop = () => {
  const taskDispatch = useTaskDispatch();
  const modalDispatch = useModalDispatch();
  const handleNewTaskModal = () => {
    modalDispatch({
      type: "open",
    });
  };

  const handleDeleteAll = () => {
    const confirmDelete = window.confirm("Are you sure to delete all?");
    if (confirmDelete) {
      taskDispatch({
        type: "delete-all",
      });
    }
  };

  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <SearchForm />
        <button
          onClick={handleNewTaskModal}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button> 
        <button
          onClick={handleDeleteAll}
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskBoardTop;
