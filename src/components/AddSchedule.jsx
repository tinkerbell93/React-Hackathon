import React from "react";
import { Link } from "react-router-dom";
import { history } from "../redux/create";
import { Row, Col } from "antd";
import styles from "../css/addSchedule.module.scss";

export default function AddSchedule({ addSchedule, date, emoji }) {
  const titleRef = React.createRef(null);
  const messageRef = React.createRef(null);
  const _emoji = { __html: emoji };
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
          <input type="text" name="title" ref={titleRef} />
          <input type="text" name="message" ref={messageRef} />
          <button onClick={click} type="button">
            확인
          </button>
          <Link to="/">
            <button>취소</button>
          </Link>
        </form>
      </Col>
    </Row>
  );

  async function click() {
    const title = titleRef.current.value;
    const author = date;
    const message = messageRef.current.value;
    const url = emoji;
    console.log(url);
    addSchedule({ title, author, message, url });
    history.push("/");
  }
}
