"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title}]);
    settitle("");
  };

  const deleteAllHandler = () => {
    setmainTask([]);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = (
    <li className="bg-blue-400 select-none text-2xl py-[0.6rem] px-6 flex items-center shadow-xl justify-between rounded-3xl transition-all duration-300 hover:bg-blue-300 border-2 border-transparent hover:border-gray-100">
      No Tasks Available...
    </li>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className="bg-blue-400 border-2 border-transparent flex shadow-xl items-center justify-between py-1 px-6 rounded-3xl transition-all duration-300 hover:bg-blue-300 hover:border-gray-100"
        >
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl select-none py-2">{t.title}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 px-4 py-2 font-bold rounded-3xl transition-all duration-300 hover:bg-red-600 hover:text-white"
          >
            Remove
          </button>
        </li>
      );
    });
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 to-blue-400">
      <div className=" bg-white p-5 rounded-2xl">
        <h1 className=" py-5 text-blue-400 select-none text-center text-5xl font-extrabold font-mono underline">
          Todo-List
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex justify-around flex-wrap items-center gap-3"
        >
          <input
            className="text-2xl
              border-blue-400 text-blue-400 placeholder:text-blue-400 border-2 my-5 px-4 py-2 rounded-3xl"
            placeholder="Enter task here"
            type="text" 
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <button className="bg-gray-700 text-white px-5 py-3 text-lg font-bold rounded-3xl transition-all duration-500 hover:bg-black">
            Add task
          </button>
        </form>
        <div className="py-4 px-4 border-gray-700 bg-gradient-to-r from-purple-700 to-blue-400 rounded-xl">
          <ul className="flex flex-col gap-1">{renderTask}</ul>
        </div>
        <div className="flex items-center justify-center py-4">
          <button 
            onClick={deleteAllHandler}
            className="border-gray-700 text-white bg-red-400 shadow-2xl transition-all duration-500 px-5 py-3 text-lg font-bold rounded-3xl hover:bg-red-600">
              Clear All Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
