import React from "react";
import { history } from "../redux/create";
import { Row, Col } from "antd";
import styles from "../css/selectEmoji.module.scss";

export default function SelectEmoji({ date }) {
  return (
    <Row justify="center" className={styles.container}>
      <Col span={16}>
        <div
          role="button"
          className={styles["emoji-container"]}
          onClick={click}
        >
          <span className={styles.emoji} role="img" aria-label="기본">
            &#128566;
          </span>
        </div>
        <div
          role="button"
          className={styles["emoji-container"]}
          onClick={click}
        >
          <span className={styles.emoji} role="img" aria-label="기쁨">
            &#128518;
          </span>
        </div>
        <div
          role="button"
          className={styles["emoji-container"]}
          onClick={click}
        >
          <span className={styles.emoji} role="img" aria-label="슬픔">
            &#128546;
          </span>
        </div>
        <div
          role="button"
          className={styles["emoji-container"]}
          onClick={click}
        >
          <span className={styles.emoji} role="img" aria-label="화남">
            &#128544;
          </span>
        </div>
        <div
          role="button"
          className={styles["emoji-container"]}
          onClick={click}
        >
          <span className={styles.emoji} role="img" aria-label="만족">
            &#128524;
          </span>
        </div>
        <div
          role="button"
          className={styles["emoji-container"]}
          onClick={click}
        >
          <span className={styles.emoji} role="img" aria-label="걱정">
            &#128532;
          </span>
        </div>
      </Col>
    </Row>
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
