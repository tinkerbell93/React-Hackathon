import React from "react";
import { Link } from "react-router-dom";
import { history } from "../redux/create";
import { useState } from "react";

export default function EditSchedule({ editSchedule, schedule, emoji }) {
  const [title, setTitle] = useState(schedule.title);
  const [message, setMessage] = useState(schedule.message);
  const _emoji = { __html: emoji };
  const date = schedule.author
  return (
    <div>
      <form>
        <p dangerouslySetInnerHTML={_emoji}></p>
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
        <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <input type="text" name="message" value={message} onChange={(e) => { setMessage(e.target.value) }} />
        <button onClick={click} type="button">확인</button>
        <Link to="/">
          <button>취소</button>
        </Link>
      </form>
    </div>
  );

  async function click() {
    const author = date;
    const url = emoji;
    editSchedule(schedule.bookId, { title, author, message, url });
    history.push("/");
  }
}
