import React, { useState } from "react";

const AddHabitScorecard = ({ addScorecard }) => {
  const [date, setDate] = useState("");
  const [habits, setHabits] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handling submit");
    console.log(date);
    console.log(habits);
    const habitArray = habits
      .split(",")
      .map((habit) => ({ name: habit.trim(), status: "Neutral" }));
    addScorecard({ date, habits: habitArray });
    setDate("");
    setHabits("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-scorecard-form">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter habits separated by commas"
        value={habits}
        onChange={(e) => setHabits(e.target.value)}
        required
      />
      <button type="submit">Add Scorecard</button>
    </form>
  );
};

export default AddHabitScorecard;
