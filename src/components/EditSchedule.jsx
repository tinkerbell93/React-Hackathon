import React from "react";
import { Link } from "react-router-dom";
import { history } from "../redux/create";
import { useState } from "react";
import styles from "../css/addSchedule.module.scss";
import { Row, Col } from "antd";

export default function EditSchedule({ editSchedule, schedule, emoji }) {
  const [title, setTitle] = useState(schedule.title);
  const [message, setMessage] = useState(schedule.message);
  const _emoji = { __html: emoji };
  const date = schedule.author;
  return (
    <Row justify="center" className={styles.container}>
      <Col span={16} className={styles["flex-container"]}>
        <form className={styles["emoji-container"]}>
          <p dangerouslySetInnerHTML={_emoji} className={styles.emoji}></p>
          <p className={styles.date}>
            2020년{" "}
            {(+date + 100 + "").length === 3
              ? (+date + 100 + "")[0]
              : (+date + 100 + "")[0] + (+date + 100 + "")[1]}
            월{" "}
            {(+date + 100 + "").length === 3
              ? (+date + 100 + "")[1] !== "0"
                ? (+date + 100 + "")[1] + (+date + 100 + "")[2]
                : (+date + 100 + "")[2]
              : (+date + 100 + "")[2] !== "0"
              ? (+date + 100 + "")[2] + (+date + 100 + "")[3]
              : (+date + 100 + "")[3]}
            일
          </p>
          <input
            type="text"
            className={styles.title}
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            type="text"
            className={styles.message}
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button onClick={click} type="button" className={styles.save}>
            저장
          </button>
          <Link to="/">
            <button className={styles.cancel}>취소</button>
          </Link>
        </form>
      </Col>
    </Row>
  );

  async function click() {
    const author = date;
    const url = emoji;
    editSchedule(schedule.bookId, { title, author, message, url });
    history.push("/");
  }
}
