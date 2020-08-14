import React from "react";
import { history } from "../redux/create";
import { useSelector } from "react-redux";

export default function SelectEmoji({ date }) {
  const schedule = useSelector(state => state.schedule.schedule);
  const item = schedule.find(item => item.author === date);
  return (
    <div>
      <div>
        <button onClick={() => { click('&#128566') }}>&#128566;</button>
      </div>
      <div>
        <button onClick={() => { click('&#128518') }}>&#128518;</button>
      </div>
      <div>
        <button onClick={() => { click('&#128546') }}>&#128546;</button>
      </div>
      <div>
        <button onClick={() => { click('&#128544') }}>&#128544;</button>
      </div>
      <div>
        <button onClick={() => { click('&#128524') }}>&#128524;</button>
      </div>
      <div>
        <button onClick={() => { click('&#128532') }}>&#128532;</button>
      </div>
    </div>
  );

  function click(value) {
    if (item) {
      history.push({
        pathname: "/edit",
        state: {
          schedule: item,
          emoji: value,
        }
      })
      return;
    }
    history.push({
      pathname: "/add",
      state: {
        date,
        emoji: value,
      },
    });
    return;
  }
}
