import React from "react";
import { Calendar, Badge } from "antd";
import "../antd.css";
import styles from "./ScheduleList.module.css";
import { useCallback } from "react";
import { history } from "../redux/create";

const defaultChars = { __html: "&#128566" };

export default function ScheduleList({
  schedule,
  loading,
  error,
  getSchedule,
  mode,
}) {
  const today = new Date();
  const _today =
    "" +
    today.getMonth() +
    (today.getDate() < 10 ? "" + 0 + today.getDate() : today.getDate());

  React.useEffect(() => {
    getSchedule();
  }, [getSchedule]);

  const dateCellRender = useCallback(
    (value) => {
      const [month, date] = [
        value._d.getMonth(),
        value._d.getDate() < 10
          ? "" + 0 + value._d.getDate()
          : value._d.getDate(),
      ];
      const _date = "" + month + date;

      if (!schedule.find((item) => item.author === _date) && _date < _today) {
        return (
          <Badge status={"none"}>
            <span className="imo" dangerouslySetInnerHTML={defaultChars}></span>
          </Badge>
        );
      }
      return (
        <>
          {schedule.map((item) => {
            const specialChars = { __html: item.url };
            return item.author === _date ? (
              <Badge status={"none"}>
                <span
                  className="imo"
                  dangerouslySetInnerHTML={specialChars}
                ></span>
              </Badge>
            ) : null;
          })}
        </>
      );
    },
    [schedule, _today]
  );

  return (
    <Calendar
      className={mode ? styles.dark_mode : ""}
      dateCellRender={dateCellRender}
      monthCellRender={8}
      onSelect={(value) => {
        select(value);
      }}
    />
  );

  function select(value) {
    const [month, date] = [
      value._d.getMonth(),
      value._d.getDate() < 10
        ? "" + 0 + value._d.getDate()
        : value._d.getDate(),
    ];
    const _date = "" + month + date;
    console.log(_date);
    history.push({
      pathname: "/emoji",
      state: {
        date: _date,
      },
    });
  }
}
