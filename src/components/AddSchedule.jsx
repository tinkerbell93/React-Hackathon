import React from 'react';
import { Link } from 'react-router-dom';
import { history } from '../redux/create';
import { Row, Col } from 'antd';
import styles from '../css/addSchedule.module.scss';

export default function AddSchedule({ addSchedule, date, emoji }) {
  const titleRef = React.createRef(null);
  const messageRef = React.createRef(null);
  const _emoji = { __html: emoji };
  return (
    <Row justify='center' className={styles.container}>
      <Col span={16} className={styles['flex-container']}>
        <form className={styles['emoji-container']}>
          <div className={styles['form-wrapper']}>
            <div className={styles.left}>
              <p dangerouslySetInnerHTML={_emoji} className={styles.emoji}></p>
            </div>
            <div className={styles.right}>
              <p className={styles.date}>
                2020년{' '}
                {(+date + 100 + '').length === 3
                  ? (+date + 100 + '')[0]
                  : (+date + 100 + '')[0] + (+date + 100 + '')[1]}
                월{' '}
                {(+date + 100 + '').length === 3
                  ? (+date + 100 + '')[1] !== '0'
                    ? (+date + 100 + '')[1] + (+date + 100 + '')[2]
                    : (+date + 100 + '')[2]
                  : (+date + 100 + '')[2] !== '0'
                  ? (+date + 100 + '')[2] + (+date + 100 + '')[3]
                  : (+date + 100 + '')[3]}
                일
              </p>
              <input
                type='text'
                className={styles.title}
                name='title'
                ref={titleRef}
                placeholder='일기 제목'
              />
              <textarea
                className={styles.message}
                name='message'
                ref={messageRef}
                placeholder='오늘 하루를 기록해보세요!'
              />
            </div>
          </div>
          <button onClick={click} type='button' className={styles.save}>
            저장
          </button>
          <Link to='/'>
            <button className={styles.cancel}>취소</button>
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
    addSchedule({ title, author, message, url });
    history.push('/');
  }
}
