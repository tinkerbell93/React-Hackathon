import React from "react";
import { Link } from "react-router-dom";

export default function AddSchedule({ addSchedule, date, emoji }) {
  const titleRef = React.createRef(null);
  const messageRef = React.createRef(null);
  console.log(+date + 100 + "");
  return (
    <div>
      <form>
        <p>{emoji}</p>
        <p>
          2020년{" "}
          {(+date + 100 + "").length === 3
            ? (+date + 100 + "")[0]
            : (+date + 100 + "")[0] + (+date + 100 + "")[1]}
          월{" "}
          {(+date + 100 + "").length === 3
            ? date[1] + date[2]
            : date[2] + date[3]}
          일
        </p>
        <input type="text" name="title" ref={titleRef} />
        <input type="text" name="message" ref={messageRef} />
        <button onClick={click}>확인</button>
        <Link to="/">
          <button>취소</button>
        </Link>
      </form>
    </div>
  );

  async function click() {
    const title = titleRef.current.value;
    const author = date;
    const message = messageRef.current.value;
    const url = emoji;
    addSchedule({ title, author, message, url });
  }
}
