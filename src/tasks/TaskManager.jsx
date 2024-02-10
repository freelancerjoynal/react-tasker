import React from "react";
import TaskBoardTop from "./TaskBoardTop";
import TaskList from "./TaskList";
import TaskTableHeader from "./TaskTableHeader";

const TaskManager = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskBoardTop />
          <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
              <TaskTableHeader />
              <tbody>
                <TaskList />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskManager;
