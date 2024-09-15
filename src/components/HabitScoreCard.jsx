import { useState } from "react";
import HabitItem from "./HabitItem";
import { RiAddBoxFill } from "react-icons/ri";

const HabitScorecard = ({ date, initialHabits }) => {
  const [habits, setHabits] = useState(initialHabits || []);
  const d = new Date(date).toDateString();

  const addNewHabit = () => {
    const newHabit = {
      name: `New Habit ${habits.length + 1}`,
      status: "Neutral",
    };
    setHabits([...habits, newHabit]);
  };

  return (
    <div className="bg-[#fff] p-5 mb-1 rounded-md shadow-md flex flex-col items-center ">
      <h2 className="text-lg">{d}</h2>
      <ul className=" flex-1 justify-center">
        {habits.map((habit, index) => (
          <HabitItem key={index} habit={habit} />
        ))}
      </ul>

      <button onClick={addNewHabit} className="add-habit-button">
        Add New Habit
      </button>
    </div>
  );
};

export default HabitScorecard;
