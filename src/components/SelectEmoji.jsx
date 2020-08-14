import React from "react";
import { history } from "../redux/create";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import styles from "../css/selectEmoji.module.scss";

export default function SelectEmoji({ date }) {
  const schedule = useSelector((state) => state.schedule.schedule);
  const item = schedule.find((item) => item.author === date);
  return (
    <Row justify="center">
      <Col span={16} className={styles.container}>
        <div className={styles["flex-container"]}>
          <div
            role="button"
            className={styles["emoji-container"]}
            onClick={() => {
              click("&#128566");
            }}
          >
            <span className={styles.emoji} role="img" aria-label="기본">
              &#128566;
            </span>
          </div>
          <div
            role="button"
            className={styles["emoji-container"]}
            onClick={() => {
              click("&#128518");
            }}
          >
            <span className={styles.emoji} role="img" aria-label="기쁨">
              &#128518;
            </span>
          </div>
          <div
            role="button"
            className={styles["emoji-container"]}
            onClick={() => {
              click("&#128546");
            }}
          >
            <span className={styles.emoji} role="img" aria-label="슬픔">
              &#128546;
            </span>
          </div>
          <div
            role="button"
            className={styles["emoji-container"]}
            onClick={() => {
              click("&#128544");
            }}
          >
            <span className={styles.emoji} role="img" aria-label="화남">
              &#128544;
            </span>
          </div>
          <div
            role="button"
            className={styles["emoji-container"]}
            onClick={() => {
              click("&#128524");
            }}
          >
            <span className={styles.emoji} role="img" aria-label="만족">
              &#128524;
            </span>
          </div>
          <div
            role="button"
            className={styles["emoji-container"]}
            onClick={() => {
              click("&#128532");
            }}
          >
            <span className={styles.emoji} role="img" aria-label="걱정">
              &#128532;
            </span>
          </div>
        </div>
      </Col>
    </Row>
  );

  function click(value) {
    if (item) {
      history.push({
        pathname: "/edit",
        state: {
          schedule: item,
          emoji: value,
        },
      });
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
