import React, { useState } from "react";
import { useTaskDispatch } from "../Contexts/TaskContext";

const Task = ({ task }) => {
  const { id, title, description, tags, priority, done } = task;
  const taskDispatch = useTaskDispatch();
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const tagArray = tags.split(",");

  //Handle the complete icon

  const [isDone, setIsDone] = useState(done);
  const handleDone = () => {
    setIsDone(!isDone);
  };

  //Delete the item from the list

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure to delete "(${title})" `
    );
    if (confirmDelete) {
      taskDispatch({
        type: "delete",
        id: id,
      });
    }
  };

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td className="cursor-pointer" onClick={handleDone}>
        {isDone ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-star"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="yellow"
            fill="yellow"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-star"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        )}
      </td>
      <td>{title}</td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {tagArray.map((tagitem, index) => (
            <li key={index}>
              <span
                className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize"
                style={{ backgroundColor: randomColor() }}
              >
                {tagitem}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button onClick={handleDelete} className="text-red-500">
            Delete
          </button>
          <button className="text-blue-500">Edit</button>
        </div>
      </td>
    </tr>
  );
};

export default Task;
