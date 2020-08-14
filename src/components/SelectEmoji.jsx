import React from "react";
import { history } from "../redux/create";

export default function SelectEmoji({ date }) {
  console.log("SelectEmoji", date);
  return (
    <div>
      <div>
        <button onClick={click}>&#128566;</button>
      </div>
      <div>
        <button onClick={click}>&#128518;</button>
      </div>
      <div>
        <button onClick={click}>&#128546;</button>
      </div>
      <div>
        <button onClick={click}>&#128544;</button>
      </div>
      <div>
        <button onClick={click}>&#128524;</button>
      </div>
      <div>
        <button onClick={click}>&#128532;</button>
      </div>
    </div>
  );

  function click(e) {
    history.push({
      pathname: "/add",
      state: {
        date,
        emoji: e.target.textContent,
      },
    });
  }
}
