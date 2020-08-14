import React from "react";
import { Link } from "react-router-dom";

export default function AddSchedule(props) {
  const titleRef = React.createRef(null);
  const messageRef = React.createRef(null);

  return (
    <div>
      <form>
        <p>이모지</p>
        <p>날짜</p>
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
    const author = "날짜";
    const message = messageRef.current.value;
    const url = "이모지";
    props.addSchedule({ title, author, message, url });
  }
}
