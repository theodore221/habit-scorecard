import React, { useState } from "react";
import HabitScorecard from "../components/HabitScorecard";
import AddHabitScorecard from "../components/AddHabitScorecard";

const HomePage = () => {
  const [scorecards, setScorecards] = useState([]);

  const addScorecard = (newScorecard) => {
    console.log("adding scorecard");
    console.log(newScorecard);
    setScorecards([newScorecard, ...scorecards]);
  };

  return (
    <div className="homepage">
      <AddHabitScorecard addScorecard={addScorecard} />
      <div className="scorecards mt-3">
        {scorecards.map((scorecard, index) => (
          <HabitScorecard
            key={index}
            date={scorecard.date}
            initialHabits={scorecard.habits}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
