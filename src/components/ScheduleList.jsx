import React from 'react';
import { Calendar, Badge } from 'antd';
import '../antd.css'
import styles from './ScheduleList.module.css'
import { useCallback } from 'react';
import { history } from '../redux/create';


const defaultChars = { __html: '&#128566' }





export default function ScheduleList({ schedule, loading, error, getSchedule }) {
  const today = new Date();
  const _today = '' + today.getMonth() + (today.getDate() < 10 ? '' + 0 + today.getDate() : today.getDate());
  let curMonth = 0;

  React.useEffect(() => {
    getSchedule();
  }, [getSchedule]);

  const dateCellRender = useCallback((value) => {
    const [month, date] = [value._d.getMonth(), (value._d.getDate() < 10 ? '' + 0 + value._d.getDate() : value._d.getDate())];
    const _date = '' + month + date;


    if (!schedule.find(item => item.author === _date) && _date < _today) {

      return <Badge status={'none'}><span className="imo" dangerouslySetInnerHTML={defaultChars}></span></Badge>
    }
    return (
      <>
        {schedule.map(item => {
          const specialChars = { __html: item.url }
          return (
            item.author === _date ?
              <Badge status={'none'}><span className="imo" dangerouslySetInnerHTML={specialChars}></span></Badge>
              : null
          )
        })
        }
      </>
    );

  }
    , [schedule, _today])



  return (
    <Calendar dateCellRender={dateCellRender} onSelect={(value) => { select(value) }} />
  );

  function select(value) {
    const [month, date] = [value._d.getMonth(), (value._d.getDate() < 10 ? '' + 0 + value._d.getDate() : value._d.getDate())];
    console.log(month, curMonth);

    if (month !== curMonth) return;
    const _date = '' + month + date;
    console.log(_date);
    history.push({
      pathname: "/imo", state: {
        date: _date
      }
    })
  }
}