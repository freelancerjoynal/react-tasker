import React from "react";
import { useTasks } from "../Contexts/TaskContext";
import Task from "./Task";
import TaskBoardTop from "./TaskBoardTop";
import TaskTableHeader from "./TaskTableHeader";

const TaskManager = () => {
  const tasks = useTasks();
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskBoardTop />
          <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
              <TaskTableHeader />
              <tbody>
                {tasks.map((task) => (
                  <Task key={task.id} task={task}></Task>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskManager;
