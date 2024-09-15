import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const HabitItem = ({ habit, onNameChange }) => {
  const [status, setStatus] = useState("Neutral");
  const [isEditing, setIsEditing] = useState(false);
  const [habitName, setHabitName] = useState(habit.name);

  const handleNameChange = (e) => {
    setHabitName(e.target.value);
  };

  const handleNameSubmit = (e) => {
    if (e.key === "Enter" || e.type === "blue") {
      setIsEditing(false);
      if (onNameChange) {
        onNameChange(habitName);
      }
    }
  };

  return (
    <div
      className={` rounded my-2 w-[450px] py-2 shadow-sm ${
        status === "Positive"
          ? "bg-[#d9f1d7] text-green-500 border-green-500 outline outline-2"
          : ""
      } ${
        status === "Negative"
          ? "bg-[#fde3e3] text-red-600 border-red-600 outline outline-2"
          : ""
      } ${
        status === "Neutral" ? "bg-[#f9f9f9] text-black outline outline-1" : ""
      }`}
    >
      <li className="flex">
        <div className="basis-1/6 flex justify-center items-center">
          <MdDeleteForever className="fill-gray-400 hover:fill-gray-700 cursor-pointer" />
        </div>
        <div className="basis-2/3 flex justify-center items-center">
          {isEditing ? (
            <input
              type="text"
              value={habitName}
              onChange={handleNameChange}
              onKeyDown={handleNameSubmit} // Submit on Enter key press
              onBlur={handleNameSubmit} // Submit on input field blur
              autoFocus
              className="edit-habit-input"
            />
          ) : (
            <span
              onClick={() => setIsEditing(true)}
              className="habit-name flex items-center cursor-pointer font-bold text-lg"
            >
              {habitName}
            </span>
          )}
        </div>
        <div className="flex justify-center ml-1.5 basis-1/6 items-center ">
          <FaPlus
            onClick={() => setStatus("Positive")}
            className={`cursor-pointer size-7 text-green-500 border border-green-500 hover:bg-green-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-1
            ${
              status === "Negative"
                ? "fill-gray-400 border-gray-400  hover:bg-green-500 hover:border-green-500 hover:fill-white"
                : ""
            } `}
          />
          <BsXDiamondFill
            onClick={() => setStatus("Neutral")}
            className={`cursor-pointer size-7 text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-1
            ${
              status === "Negative" || status === "Positive"
                ? "fill-gray-400 border-gray-400  hover:bg-yellow-400 hover:border-yellow-400 hover:fill-white"
                : ""
            } `}
          />
          <FaMinus
            onClick={() => setStatus("Negative")}
            className={`cursor-pointer size-7 text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-1
            ${
              status === "Positive"
                ? "fill-gray-400 border-gray-400 hover:bg-red-600 hover:border-red-600 hover:fill-white"
                : ""
            }`}
          />
        </div>
      </li>
    </div>
  );
};

export default HabitItem;
