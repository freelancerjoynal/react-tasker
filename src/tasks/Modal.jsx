import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
  useModalDispatch,
  useTaskDispatch,
  useTasks,
} from "../Contexts/TaskContext";

const Modal = () => {
  const modalDispatch = useModalDispatch();
  const taskDispatch = useTaskDispatch();

  const { editTask } = useTasks();
  const { setEditTask } = useTasks();

  const [task, setTask] = useState(
    editTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: "",
      priority: "",
      isFavorite: false,
    }
  );
  const handleModalClose = () => {
    setEditTask(null);
    modalDispatch({
      type: "close",
    });
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setTask({
      ...task,
      [name]: value,
    });
  };
  const [erros, setErrrs] = useState({
    title: "",
    description: "",
    tags: "",
  });

  const handleSave = (e) => {
    e.preventDefault();

    if (task.title == "") {
      setErrrs({
        ...erros,
        title: "Please type a title",
      });
      return false;
    } else if (task.description == "") {
      setErrrs({
        ...erros,
        description: "Description is required",
      });
      return false;
    } else if (task.tags == "") {
      setErrrs({
        ...erros,
        tags: "You must put minimum 1 tag",
      });
      return false;
    } else if (task.priority == "") {
      setErrrs({
        ...erros,
        priority: "Please select one",
      });
      return false;
    }

    taskDispatch({
      type: "addnew",
      task,
    });
    modalDispatch({
      type: "close",
    });
  };

  return (
    <>
      <div className="bg-black opacity-70 h-full w-full z-10 fixed top-0 left-0"></div>
      <form
        onSubmit={handleSave}
        method="POST"
        className="z-10 absolute top-10 left-1/3 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 "
      >
        <span
          onClick={handleModalClose}
          className="float-right cursor-pointer text-3xl"
        >
          <IoMdClose />
        </span>
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          {/* title */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              id="title"
              required
            />
            {erros.title && <p className="text-red-500">{erros.title}</p>}
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              name="description"
              value={task.description}
              onChange={handleChange}
              id="description"
              required
              data-gramm="false"
              wt-ignore-input="true"
              required
            />
            {erros.description && (
              <p className="text-red-500">{erros.description}</p>
            )}
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                value={task.tags}
                onChange={handleChange}
                id="tags"
                placeholder="Separate by comma"
                required
              />
              {erros.tags && <p className="text-red-500">{erros.tags}</p>}
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                value={task.priority}
                onChange={handleChange}
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {erros.priority && (
                <p className="text-red-500">{erros.priority}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            onClick={handleSave}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {editTask ? "Update Task " : "Create new Task"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Modal;
