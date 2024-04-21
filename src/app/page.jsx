"use client"
import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";


const page = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
    // console.log(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList("");
  }

  const deleteItem = (id) => {
    console.log("Items deleted successfully.");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>

      <div className="flex items-center justify-center w-screen h-screen font-medium">
        <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">

          {/* <!-- Component Start --> */}
          <div className="max-w-full p-6 bg-gray-800 rounded-lg shadow-lg w-5/12 text-gray-200">

            <div className="flex items-center mb-6">
              <svg className="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h4 className="font-semibold ml-3 text-lg">ToDo - List Application</h4>
            </div>

            {/* add task button */}
            <div className="flex items-center todo-form">
              <input className="flex-grow m-2 bg-transparent focus:outline-none font-medium todo-input" type="text" value={inputList} placeholder="What's the task for today!" onChange={itemEvent} title="What's the task for today!"/>
              <button onClick={listOfItems} className="flex font-medium rounded-t-lg rounded-s-lg rounded-e-lg todo-btn" title="Add Task">
                Add Task
              </button>
            </div>

            {/* mapping of added tasks */}
            <ol>
              {Items?.map((itemValue, index) => {
                return <TodoList key={index} id={index} onSelect={deleteItem} text={itemValue} />
              })}
            </ol>

          </div>
        </div>
      </div>
    </>
  )
};

export default page;


{/* <div>
            <input className="hidden" type="checkbox" id="task_8" />
            <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" htmlFor="task_8">
              <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="ml-4 text-sm">Boil, mash, and stick potatoes in stew.</span>
            </label>
          </div> */}